# 📝 Aula: Formulários com Condicionais e Sessões em PHP

## 🎙️ Introdução

Olá, aventureiro do PHP! 🧙‍♂️✨

Na última jornada, exploramos os reinos dos CMS, frameworks e as florestas densas da sintaxe básica de PHP. Aprendemos a usar os feitiços condicionais como `if` e `else`, e demos nossos primeiros passos na codificação moderna.

Mas agora, chegou a hora de enfrentarmos uma nova caverna: os **formulários**, os **métodos HTTP** e as misteriosas **sessões PHP**!

---

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

### 💡 Código HTML (script.php)

```php
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Inscrição de Competidores</title>
</head>
<body>
    <h2>Formulário de Inscrição</h2>

    <form action="processa.php" method="post">
        <label>Nome:</label>
        <input type="text" name="nome"><br><br>

        <label>Idade:</label>
        <input type="text" name="idade"><br><br>

        <input type="submit" value="Enviar">
    </form>
</body>
</html>
```

---

## ⚔️ GET vs POST

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

### 🧪 Exemplo de Código com Validação (processa.php)

```php
<?php
session_start();

$nome = $_POST['nome'];
$idade = $_POST['idade'];

if (empty($nome)) {
    echo "⚠️ Por favor, preencha o nome.";
    return;
}

if (!is_numeric($idade)) {
    echo "⚠️ A idade deve ser um número.";
    return;
}

// Guardar dados na sessão
$_SESSION['nome'] = $nome;
$_SESSION['idade'] = $idade;

// Determinar categoria
if ($idade >= 6 && $idade <= 12) {
    $categoria = 'Infantil';
} elseif ($idade >= 13 && $idade <= 18) {
    $categoria = 'Adolescente';
} elseif ($idade >= 19 && $idade <= 30) {
    $categoria = 'Adulto';
} else {
    $categoria = 'Sênior';
}

// Resposta ao usuário
echo "🏅 O competidor $nome tem $idade anos e está na categoria <strong>$categoria</strong>.";
```

---

## 🧳 Sessões em PHP

O protocolo HTTP é **sem estado** – ou seja, ele esquece tudo depois de cada requisição. Triste, né?

Mas o PHP tem um truque! 🧠✨  
Com as **sessões**, podemos guardar dados entre requisições, como:

- Nome de um usuário após o login.
- Itens em um carrinho de compras.

### 🔐 Como usar sessões?

```php
session_start(); // Inicia a sessão

$_SESSION['nome'] = 'Eduardo'; // Salva dado na sessão

echo $_SESSION['nome']; // Recupera o dado
```

Você pode até destruir a sessão quando quiser:

```php
session_destroy();
```

---

## ✅ Conclusão da Jornada

Hoje você aprendeu:

- A diferença entre GET e POST
- Como capturar dados de formulários com PHP
- Como validar entradas do usuário
- Como manter dados entre páginas usando sessões

Prepare seu escudo, pois na próxima aula enfrentaremos novos desafios: **armazenar dados em arquivos ou bancos**, além de melhorar a **experiência do usuário com mensagens de erro amigáveis**! 🧙‍♂️🧩

Até lá, guerreiro do código! ⚔️
