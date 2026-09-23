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
Abra sempre pelo ícone: é assim que roda em tela cheia. É necessário estar online.

Na primeira abertura o app pede a URL e a chave. Use a configuração do projeto. Depois pede seu e-mail e senha do Supabase.

No iPad e no Windows é o mesmo endereço. No Chrome ou Edge aparece um ícone
de instalar na barra de endereço.

## Configuração e acesso

Use suas credenciais pessoais para entrar. Não publique senhas, e-mails de login ou chaves privadas neste repositório.

## Links das páginas dos pais
Só funcionam depois de publicar. Estão também dentro do app, em **Ajustes**,
com botão de copiar.

Copie os links diretamente na aba Ajustes do app. Compartilhe cada link apenas com os responsáveis da turma.

## Como usar no dia a dia
1. Escolha a turma na fila de cima e confira a data.
2. Marque individualmente a presença e a entrega de cada aluno.
3. Toque em **Enviar** para salvar todas as marcações pendentes, inclusive de outras turmas ou datas editadas nesta sessão.
4. Aguarde a mensagem **Enviado e confirmado pelo banco**. Em caso de falha, tente novamente.
5. Sem internet, edição e envio ficam bloqueados. Não há envio automático. As marcações não enviadas ficam apenas na página aberta; envie antes de fechar.

A aba **Notas** mostra o acumulado por aluno e a regra do desconto.
Mudou a regra? Toque em **Salvar regra para todos os aparelhos** — senão
a mudança fica só neste aparelho e a página dos pais não acompanha.

## Trocar as listas de alunos no próximo bimestre
Me mande a planilha nova. Eu gero o SQL preservando o histórico deste bimestre.
Não rode o `delete from alunos` depois que houver chamada lançada.
