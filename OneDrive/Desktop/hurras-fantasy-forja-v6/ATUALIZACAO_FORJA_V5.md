# Hurras Fantasy — Forja V5

## Alterações

- Central de personagens refeita no estilo Novo / Abrir / Excluir personagem.
- O Cofre continua usando IndexedDB + fallback localStorage.
- A central abre diretamente a ficha selecionada com `?open=<id>`.
- Novo personagem abre a ficha limpa com `?new=1`.
- Vitalidade agora é funcional:
  - máximo calculado por Vigor e modificadores de Vitalidade;
  - marcador de dano clicável;
  - botões +1/+5 para cura e -1/-5 para dano;
  - valor atual/máximo visível na ficha;
  - dados ficam salvos junto do personagem.
- Mana agora também é clicável e possui controles +/-.
- Magias novas foram integradas dentro dos níveis Aprendiz, Profissional, Mestre e Relíquias do mesmo grimório, em vez de aparecerem em um bloco separado.
- Adicionadas 27 novas magias (3 por escola) sem remover as anteriores.
- O antigo conteúdo de função elemental foi preservado em `funcoes/grimorio-elemental-legado.html`.
- A ficha ganhou atalhos no topo para Novo personagem, Abrir personagem e Gerenciar/excluir.

## Fluxo recomendado

1. Abra `funcoes/criaçãodeficha.html`.
2. Escolha Novo Personagem ou um personagem salvo.
3. Edite em `funcoes/clan.html`.
4. Salve no Cofre do navegador.
5. Use Salvar ficha em PDF quando quiser imprimir/exportar.
