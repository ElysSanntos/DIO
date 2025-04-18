# 📝 Aula: Formulários com Condicionais e Sessões em PHP

## 🎙️ Introdução

Olá, aventureiro do PHP! 🧙‍♂️✨

Na última jornada, exploramos os reinos dos CMS, frameworks e as florestas densas da sintaxe básica de PHP. Aprendemos a usar os feitiços condicionais como `if` e `else`, e demos nossos primeiros passos na codificação moderna.

Mas agora, chegou a hora de enfrentarmos uma nova caverna: os **formulários**, os **métodos HTTP** e as misteriosas **sessões PHP**!

## 📜 O Roteiro da Missão

Nessa aula você irá:

- 🛡️ Relembrar como usar GitHub (link para outro curso opcional)
- 🌐 Descobrir os segredos do protocolo HTTP
- 🧾 Criar um formulário para capturar o **nome** e a **idade** de um competidor
- 🔍 Validar esses dados usando PHP
- 🧠 Entender por que validar dados é uma prática fundamental
- 🎒 Conhecer as misteriosas **sessões** do PHP

---

## 🌐 O Protocolo HTTP

HTTP é a ponte mágica entre **cliente** e **servidor**. Seu nome verdadeiro? _HyperText Transfer Protocol_.

🧙‍♂️ Inventado por magos da tecnologia como Roy Fielding, esse protocolo funciona com um sistema de **requisição e resposta**. Você (usuário) envia um pedido, e o servidor (guardião dos dados) responde.

### ⚔️ Verbos HTTP

Esses são os feitiços que você pode conjurar:

- **GET** – Busca informações (como visitar uma página).
- **POST** – Envia informações (como enviar um formulário).
- Outros, que só os magos avançados usam: `PUT`, `DELETE`, `PATCH`, `OPTIONS`...

### 🧾 Como funciona a requisição?

A requisição é dividida em:

- **Header** – A capa da carta. Contém informações úteis como de onde veio, quem é, e o que deseja.
- **Body** – O pergaminho com a mensagem (usado no `POST` para enviar os dados).

---

## ✍️ Criando um Formulário

Vamos construir um pequeno formulário para coletar:

- 🧝 Nome do Competidor
- 🧓 Idade do Competidor

### ⚔️ GET vs POST

- **GET**:
  - Envia dados pelo header (visíveis na URL).
  - Exemplo: `meusite.com?nome=Eduardo&idade=30`
  - Ideal para buscas e requisições simples.

- **POST**:
  - Envia dados no body (ocultos da URL).
  - Mais seguro para formulários que lidam com senhas, dados pessoais etc.

---

## 🔍 Validando Dados

PHP nos permite **validar** o que o usuário envia. Por quê?

- 🛡️ Para impedir ataques.
- 🧼 Para garantir que os dados estão corretos.
- 🧙‍♂️ Para proteger seu servidor.

### Exemplos de validação:

- Verificar se o nome foi preenchido.
- Garantir que a idade é um número.

---

## 🧳 Sessões em PHP

O protocolo HTTP é **sem estado** – ou seja, ele esquece tudo depois de cada requisição. Triste, né?

Mas o PHP tem um truque! 🧠✨  
Com as **sessões**, podemos guardar dados entre requisições, como:

- Nome de um usuário após o login.
- Itens em um carrinho de compras.

### Como usar?

```php
session_start(); // Inicia a sessão

$_SESSION['nome'] = 'Eduardo'; // Salva dado na sessão

echo $_SESSION['nome']; // Recupera o dado```
