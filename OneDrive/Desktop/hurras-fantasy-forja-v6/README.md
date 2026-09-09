# Hurras Fantasy — Forja V6

**Tema unificado dark fantasy + Vitalidade 0–100.**

- Todas as páginas HTML/PHP com cabeçalho usam `souls-theme.css` como camada visual final.
- A criação de ficha foi reorganizada em Identidade, Origem & Evolução, Equipamento e Arcano & Jornada.
- Vitalidade: **Nível 1 = 10**, somando **+10 por nível**, até **Nível 10 = 100**. 0 representa personagem Caído.
- O Cofre do navegador, exportação/importação JAVA, PDF e sincronização SQLite foram mantidos.

# Hurras Fantasy - Forja V4

Site de RPG dark fantasy com criação de personagem, raças, classes, armas, grimório, ficha A4, cofre local e sincronização opcional com SQLite.

## O que há nesta versão

- 32 raças com pontos raciais, passiva, habilidade racial ativa e traço racial.
- 22 classes com pontos de classe, restrições de equipamento e 3 técnicas próprias por classe.
- 62 armas com categoria, raridade, requisito, bônus, penalidade e classes permitidas.
- 72 magias adicionais no banco dinâmico, além das magias que já existiam na página do grimório.
- Página `funcoes/habilidades.html` para consultar habilidades raciais e técnicas de classe.
- Ficha aleatória completa: nome, raça, classe, subclasse, atributos, equipamentos, escola mágica, magias, itens e conquistas.
- Salvamento automático no navegador via IndexedDB com fallback em localStorage.
- Sincronização opcional com SQLite quando o site é aberto pelo servidor Node incluso.
- Exportação e importação de fichas em `.java` gerado pelo próprio Hurras.
- Impressão da ficha em duas páginas A4 para salvar como PDF.

## Abrir sem servidor

Você pode abrir `funcoes/clan.html` direto no navegador. O cofre local e o arquivo `.java` funcionam normalmente.

## Abrir com banco SQLite

Requer Node.js 22.5 ou superior.

```bash
npm start
```

Depois abra:

```text
http://localhost:3000/funcoes/clan.html
```

O banco é criado em `server/data/hurras.db`.

## Arquivo JAVA da ficha

O botão **Exportar JAVA** cria um arquivo `.java` legível com nome, raça, classe, nível e equipamento, além de um bloco `HURRAS_DATA_BASE64` que preserva a ficha completa. Para importar de volta, use somente arquivos `.java` exportados pelo próprio Hurras e não remova esse bloco.

## PDF

Na Forja de Ficha, clique em **Salvar ficha em PDF**. Na janela do navegador escolha **Salvar como PDF** e mantenha gráficos de fundo ativados para preservar o tema escuro.
