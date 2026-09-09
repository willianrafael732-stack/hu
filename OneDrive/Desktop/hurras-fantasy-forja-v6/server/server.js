const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const {DatabaseSync}=require('node:sqlite');
const {URL}=require('node:url');
const ROOT=path.resolve(__dirname,'..');
const DATA=path.join(__dirname,'data');
fs.mkdirSync(DATA,{recursive:true});
const db=new DatabaseSync(path.join(DATA,'hurras.db'));
db.exec(`CREATE TABLE IF NOT EXISTS characters (
 owner_id TEXT NOT NULL,
 id TEXT NOT NULL,
 name TEXT NOT NULL,
 player_name TEXT DEFAULT '',
 race TEXT DEFAULT '',
 class_name TEXT DEFAULT '',
 payload TEXT NOT NULL,
 updated_at TEXT NOT NULL,
 PRIMARY KEY(owner_id,id)
); CREATE INDEX IF NOT EXISTS idx_characters_owner_updated ON characters(owner_id,updated_at DESC);`);
const PORT=Number(process.env.PORT||3000);
function json(res,status,obj){const body=JSON.stringify(obj);res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Content-Length':Buffer.byteLength(body),'Cache-Control':'no-store'});res.end(body)}
function owner(req){const v=String(req.headers['x-hurras-player']||'').trim();return /^[a-zA-Z0-9._:-]{8,120}$/.test(v)?v:null}
function readBody(req){return new Promise((resolve,reject)=>{let data='';req.on('data',c=>{data+=c;if(data.length>2_000_000){reject(new Error('Payload muito grande'));req.destroy()}});req.on('end',()=>{try{resolve(data?JSON.parse(data):{})}catch{reject(new Error('JSON inválido'))}});req.on('error',reject)})}
async function api(req,res,url){if(url.pathname==='/api/health'&&req.method==='GET')return json(res,200,{ok:true,database:'sqlite'});const own=owner(req);if(!own)return json(res,400,{error:'Perfil do jogador ausente'});
 if(url.pathname==='/api/characters'&&req.method==='GET'){const rows=db.prepare('SELECT id,name,player_name,race,class_name,payload,updated_at FROM characters WHERE owner_id=? ORDER BY updated_at DESC').all(own).map(r=>({id:r.id,name:r.name,player:r.player_name,race:r.race,className:r.class_name,updatedAt:r.updated_at,data:JSON.parse(r.payload)}));return json(res,200,rows)}
 if(url.pathname==='/api/characters'&&req.method==='POST'){try{const rec=await readBody(req);if(!rec.id||!rec.data)return json(res,400,{error:'Ficha incompleta'});const updated=rec.updatedAt||new Date().toISOString();db.prepare(`INSERT INTO characters(owner_id,id,name,player_name,race,class_name,payload,updated_at) VALUES(?,?,?,?,?,?,?,?) ON CONFLICT(owner_id,id) DO UPDATE SET name=excluded.name,player_name=excluded.player_name,race=excluded.race,class_name=excluded.class_name,payload=excluded.payload,updated_at=excluded.updated_at`).run(own,String(rec.id),String(rec.name||'Sem nome').slice(0,120),String(rec.player||'').slice(0,120),String(rec.race||'').slice(0,80),String(rec.className||'').slice(0,80),JSON.stringify(rec.data),updated);return json(res,200,{ok:true,id:rec.id,updatedAt:updated})}catch(e){return json(res,400,{error:e.message})}}
 const m=url.pathname.match(/^\/api\/characters\/([^/]+)$/);if(m&&req.method==='DELETE'){db.prepare('DELETE FROM characters WHERE owner_id=? AND id=?').run(own,decodeURIComponent(m[1]));res.writeHead(204);return res.end()}
 return json(res,404,{error:'Rota não encontrada'})}
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.avif':'image/avif','.svg':'image/svg+xml','.pdf':'application/pdf'};
function serve(req,res,url){let p=decodeURIComponent(url.pathname);if(p==='/'||p==='')p='/funcoes/inicio.html';const abs=path.normalize(path.join(ROOT,p));if(!abs.startsWith(ROOT))return json(res,403,{error:'Acesso negado'});fs.stat(abs,(err,st)=>{if(err||!st.isFile()){res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});return res.end('Arquivo não encontrado')}res.writeHead(200,{'Content-Type':mime[path.extname(abs).toLowerCase()]||'application/octet-stream','Cache-Control':'no-cache'});fs.createReadStream(abs).pipe(res)})}
http.createServer(async(req,res)=>{const url=new URL(req.url,'http://localhost');try{if(url.pathname.startsWith('/api/'))return await api(req,res,url);serve(req,res,url)}catch(e){console.error(e);json(res,500,{error:'Erro interno'})}}).listen(PORT,()=>console.log(`Hurras Fantasy: http://localhost:${PORT}/funcoes/clan.html`));
