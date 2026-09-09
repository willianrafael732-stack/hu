# Atualização Forja V6

## Visual unificado
- Criado `souls-theme.css`, carregado no final do `<head>` em todas as páginas HTML e nas páginas PHP com interface.
- Paleta única: carvão, ferro, ouro envelhecido, brasas e vermelho escuro.
- Navbar, cartões, tabelas, campos, botões, avisos e rodapés agora seguem o mesmo padrão dark fantasy.
- Links absolutos que quebravam ao abrir o projeto por arquivo local foram normalizados para caminhos relativos.

## Criação de ficha organizada
A Forja foi dividida em quatro blocos:
1. Identidade
2. Origem & Evolução
3. Equipamento
4. Arcano & Jornada

## Nova regra de Vitalidade
A Vitalidade não depende mais de Vigor, raça, classe ou equipamento para definir o teto.

- Nível 1: 10
- Nível 2: 20
- Nível 3: 30
- Nível 4: 40
- Nível 5: 50
- Nível 6: 60
- Nível 7: 70
- Nível 8: 80
- Nível 9: 90
- Nível 10: 100

**Fórmula:** `Vitalidade máxima = nível × 10`.

A grade da ficha possui 100 pontos. Os pontos acima do limite do nível ficam bloqueados. Clicar na grade define a Vitalidade atual; os botões permitem causar/curar 1 ou 10 pontos.

## Migração
Fichas antigas continuam no Cofre. Ao abrir dados anteriores à V6, o dano antigo é zerado para evitar incompatibilidade com a nova escala de Vitalidade.
