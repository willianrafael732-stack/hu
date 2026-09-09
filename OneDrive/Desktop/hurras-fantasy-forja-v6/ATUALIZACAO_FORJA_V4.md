# Atualização - Forja V4

## Fichas `.java`

A interface não usa mais JSON para troca manual de fichas. O cofre continua usando estruturas internas do navegador/SQLite, mas para o usuário a exportação e importação agora são feitas por arquivo `.java`.

O `.java` exportado contém um pequeno registro humano-legível e a constante `HURRAS_DATA_BASE64`, responsável por preservar todos os campos da ficha. Arquivos Java comuns de outros projetos não são fichas Hurras e não serão importados.

## Habilidades

Cada uma das 32 raças recebeu:

- passiva racial (preservada do sistema existente);
- 1 habilidade racial ativa;
- 1 traço racial complementar.

Cada uma das 22 classes recebeu 3 técnicas próprias, incluindo uma técnica de maior impacto para momentos decisivos.

## Criação aleatória

O gerador agora cria um personagem completo em vez de apenas trocar raça/classe. Ele escolhe nome, natureza, comportamento, profissão, crença, crônica, nível, equipamentos permitidos, escola mágica coerente, magias, itens, conquistas e distribui pontos adicionais.

## Magia

As magias antigas foram mantidas. O banco dinâmico passou de 54 para 72 magias, com novas magias do grau Relíquia para as nove escolas elementais/místicas.

## PDF

A ficha continua em duas páginas A4 e agora mostra a herança racial e as técnicas de classe de forma compacta, para não criar uma terceira página.
