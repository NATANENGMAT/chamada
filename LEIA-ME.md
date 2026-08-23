# Chamada — publicar no GitHub Pages

Os arquivos já estão com a URL e a chave do seu projeto preenchidas.
Não precisa editar nada.

## 1. Criar o repositório
1. No GitHub, na conta `natanengmat`, crie um repositório novo chamado `chamada`.
2. Marque **Public** (o Pages gratuito exige) e crie.

> Público é o *código*, não os dados. Notas e faltas ficam no Supabase,
> atrás do seu login. O que vai pro GitHub é uma página vazia.

## 2. Enviar os arquivos
**Add file → Upload files** → arraste os 7 arquivos desta pasta → **Commit changes**.

Envie os arquivos soltos, não a pasta. O `index.html` precisa ficar na raiz.

## 3. Ligar o Pages
**Settings → Pages** → Source: **Deploy from a branch** →
branch `main`, pasta `/ (root)` → **Save**.

Em 1 ou 2 minutos o endereço fica de pé:
`https://natanengmat.github.io/chamada/`

## 4. Instalar no iPhone
Abra o endereço no **Safari** → botão Compartilhar → **Adicionar à Tela de Início**.
Abra sempre pelo ícone: é assim que roda em tela cheia e offline.

Na primeira abertura o app pede a URL e a chave. Já estão neste arquivo,
na seção abaixo. Depois pede seu e-mail e senha do Supabase.

No iPad e no Windows é o mesmo endereço. No Chrome ou Edge aparece um ícone
de instalar na barra de endereço.

## Suas chaves
- **Project URL:** https://hmnfhqemudatwtdctdvn.supabase.co
- **Chave publicável:** sb_publishable_OqV9st0ZV1fdPA4Zppf1DQ_-aRvuIis
- **Login:** natan032526@gmail.com

## Links das páginas dos pais
Só funcionam depois de publicar. Estão também dentro do app, em **Ajustes**,
com botão de copiar.

| Turma | Link |
|---|---|
| 9º01 | https://natanengmat.github.io/chamada/turma.html?t=63f2319c47b98d7f |
| 9º02 | https://natanengmat.github.io/chamada/turma.html?t=f3abf3a0da4b7e86 |
| 9º04 | https://natanengmat.github.io/chamada/turma.html?t=2c454d6a55edf511 |
| 2ª Série 04 | https://natanengmat.github.io/chamada/turma.html?t=601f08efdfe62205 |
| 3ª Série 01 | https://natanengmat.github.io/chamada/turma.html?t=016e6800ba673ba6 |
| 3ª Série 02 | https://natanengmat.github.io/chamada/turma.html?t=d41d7945eb7cb137 |

Mande o link de cada turma só no grupo daquela turma.

## Como usar no dia a dia
1. Escolha a turma na fila de cima e confira a data.
2. Toque em **Todos presentes, entregou**.
3. Toque só nas exceções:
   - **Presença**: cada toque alterna — → P → F → FJ → —
   - **Entrega**: abre uma folha com no dia / atrasado (com a data) / não entregou
4. Sem internet, pode marcar normalmente. Aparece **offline** no topo e as
   marcações sobem sozinhas quando a rede voltar.

A aba **Notas** mostra o acumulado por aluno e a regra do desconto.
Mudou a regra? Toque em **Salvar regra para todos os aparelhos** — senão
a mudança fica só neste aparelho e a página dos pais não acompanha.

## Trocar as listas de alunos no próximo bimestre
Me mande a planilha nova. Eu gero o SQL preservando o histórico deste bimestre.
Não rode o `delete from alunos` depois que houver chamada lançada.
