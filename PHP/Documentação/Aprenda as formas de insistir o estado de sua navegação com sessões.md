# 🧠 Aula: Sessões e Persistência de Estado no PHP

## 📦 O que é uma sessão?

Imagine que você vai a um restaurante. Ao chegar, o garçom te dá uma plaquinha com um número. Com isso, cada vez que você pedir algo, o garçom já sabe que aquele pedido é seu.

No PHP, **sessões** funcionam mais ou menos assim: cada visitante recebe um identificador único (uma espécie de “plaquinha”), e podemos guardar informações específicas para ele.

---

## 🚀 Iniciando uma sessão

Antes de usarmos qualquer dado de sessão, precisamos iniciar a sessão. Isso deve ser feito **antes de qualquer saída para o navegador (antes do `echo` ou HTML)**:

```php
<?php
session_start();
?>
```

---

## 📌 Salvando dados na sessão

```php
$_SESSION['nome'] = 'Lucas';
$_SESSION['idade'] = 25;
```

A variável `$_SESSION` é um array associativo. Isso significa que você pode guardar pares de chave-valor como se fosse um mini banco de dados temporário por usuário.

---

## 👀 Acessando dados da sessão

```php
echo $_SESSION['nome']; // Saída: Lucas
```

---

## 🤖 Exemplo com operador ternário

Suponha que você quer mostrar o nome do usuário se ele estiver logado:

```php
<?php
session_start();

$usuario = isset($_SESSION['nome']) ? $_SESSION['nome'] : 'Visitante';

echo "Olá, $usuario!";
?>
```

---

## 🧹 Encerrando a sessão

Se o usuário sair do site, e você quiser limpar os dados da sessão, use:

```php
session_destroy();
```

Mas isso apenas marca a sessão para destruição. Se quiser limpar os dados imediatamente:

```php
session_start();
$_SESSION = []; // limpa os dados
session_destroy(); // destrói a sessão
```

---

## 🎮 Exemplo completo com formulário

```php
<!-- index.php -->
<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $_SESSION['nome'] = $_POST['nome'] ?? 'Desconhecido';
}

$nome = $_SESSION['nome'] ?? 'Visitante';
?>

<form method="POST">
  <label>Seu nome: <input name="nome" /></label>
  <button type="submit">Salvar</button>
</form>

<p>Bem-vindo, <?php echo htmlspecialchars($nome); ?>!</p>
```

---

## 📚 Documentação Oficial - Sessões em PHP

Aqui está o link oficial da documentação do PHP sobre sessões:

🔗 [Documentação oficial - Sessões no PHP (php.net)](https://www.php.net/manual/pt_BR/book.session.php)

### Atalhos úteis:

- [📖 Introdução às Sessões](https://www.php.net/manual/pt_BR/intro.session.php)  
- [🟢 Função `session_start()`](https://www.php.net/manual/pt_BR/function.session-start.php)  
- [🔴 Função `session_destroy()`](https://www.php.net/manual/pt_BR/function.session-destroy.php)  
- [📦 Array `$_SESSION`](https://www.php.net/manual/pt_BR/reserved.variables.session.php)


## 🧙‍♂️ Curiosidades e Dicas

- Sessões funcionam com **cookies de identificação**: o PHP armazena um cookie chamado `PHPSESSID` no navegador.
- É ideal para **dados temporários de login**, carrinhos de compra, preferências do usuário, etc.
- **Nunca guarde dados sensíveis diretamente na sessão**, como senhas.
