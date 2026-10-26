# Step 1 RapidFire

Quiz rápido, independente do deck antigo, mantido dentro de `ilmiodeck/rapidfire`.

## Abrir

Depois que a alteração for incorporada ao ramo principal, abra `rapidfire/index.html` localmente no navegador ou publique a pasta com GitHub Pages.

Se o GitHub Pages do repositório estiver habilitado para o ramo `main` e a raiz `/`, o endereço será:

`https://henriquemmafra.github.io/ilmiodeck/rapidfire/`

Esse endereço depende de GitHub Pages estar habilitado; não é uma confirmação de implantação.

## Como funciona

- Uma questão de múltipla escolha por vez. Alternativas A, B, C e D, com suporte às teclas A–D e 1–4.
- Correção imediatamente após responder; explicação de cada alternativa, inclusive por que estão erradas.
- Questões originais em inglês estilo Step 1 e explicações em português.
- Filtros por assunto, dificuldade, questões nunca respondidas, erros pendentes e revisões devidas.
- Questões erradas recebem prioridade nas novas sessões.
- Intervalos básicos após acertos: 1, 3, 7, 14 e 30 dias. Erros voltam à fila de revisão.
- Histórico salvo em **localStorage** apenas no navegador atual. Para transferir entre computadores, use **Exportar progresso** e **Importar progresso**.
- O repositório público contém apenas as questões, não o seu histórico de acertos/erros.

## Atualização conforme novos erros

Ao enviar uma questão errada para o ChatGPT, peça: **"Adicione este conceito ao RapidFire no GitHub."**

O arquivo de manutenção é [questions.js](./questions.js). A nova questão deve ser *original*: preservar o conceito cobrado, mas não reproduzir literalmente textos, alternativas ou imagens de bancos comerciais.

Formato de cada objeto do array `window.RAPIDFIRE_QUESTIONS`:

```js
{
  id: "identificador-unico-estavel",
  topic: "Imunologia",
  level: 2,
  stem: "Original single-best-answer question in English?",
  options: ["First possibility", "Second possibility", "Third possibility", "Fourth possibility"],
  answer: 1, // 0=A, 1=B, 2=C, 3=D
  explanations: ["Explicação A", "Explicação B", "Explicação C", "Explicação D"],
  teaching: "Ponto central para memorizar."
}
```

Cada identificador `id` deve ser único e permanecer estável; alterá-lo faz o progresso do item deixar de ser reconhecido.

Para imagens **originais/autorizadas**, coloque o arquivo em `rapidfire/images/` e acrescente ao objeto:
`image: "images/nome.png"`, `imageAlt: "Descrição acessível"` e, opcionalmente, `imageCaption: "Legenda"`.

## Privacidade e limites

O aplicativo não usa servidor, login, rastreamento nem chave de acesso. O banco de questões é compartilhado pelo GitHub; o progresso é local e não sincroniza automaticamente entre aparelhos. Atualizações do banco são feitas por commits no GitHub, quando há acesso autorizado. Não inclui questões copiadas de exames ou bancos pagos.

## Desenvolvimento

HTML, CSS e JavaScript simples, sem instalação de dependências e sem etapa de compilação. Os arquivos podem ser servidos por qualquer hospedagem estática.
