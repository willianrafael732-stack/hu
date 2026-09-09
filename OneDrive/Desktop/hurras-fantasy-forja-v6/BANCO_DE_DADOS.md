# Cofre de fichas e banco do site

## Navegador
A ficha usa IndexedDB para manter várias fichas e localStorage para um rascunho automático. Funciona abrindo `funcoes/clan.html` diretamente.

## Banco SQLite do site
Requer Node.js 22.5 ou superior. Não há dependências externas.

1. Abra um terminal na pasta do projeto.
2. Execute `npm start`.
3. Abra `http://localhost:3000/funcoes/clan.html`.
4. Use **Sincronizar com site**.

O arquivo SQLite é criado automaticamente em `server/data/hurras.db`. Cada navegador recebe um identificador local e enxerga apenas as fichas desse perfil. Para publicação pública com contas reais, adicione autenticação antes de expor o servidor na internet.
