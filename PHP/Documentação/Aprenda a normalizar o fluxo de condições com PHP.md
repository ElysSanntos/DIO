# Aula: Normalizando o Fluxo de Condições com PHP

## 🎯 Objetivo
Nesta aula, aprendemos como controlar o fluxo de validação de formulários em PHP, assegurando que apenas a mensagem correta seja exibida ao usuário. Também exploramos como usar `header()` e `return` para interromper a execução do script em momentos adequados.

---

## 🧠 Conceitos abordados

### ✔️ Condições encadeadas (if, elseif, else)
Quando usamos múltiplas condições `if` em sequência, todas são avaliadas, e as últimas podem sobrescrever mensagens definidas anteriormente.

**Problema:** Ao deixar campos vazios ou inválidos, o script exibia sempre a última mensagem de erro.

### ✔️ Uso de `return` para interromper o script
Ao usar `return;` logo após uma condição ser satisfeita e uma mensagem ser definida, garantimos que o restante do código não seja executado.

```php
if (empty($_POST['nome'])) {
    $_SESSION['erro'] = 'O nome não pode ser vazio';
    header('Location: index.php');
    return;
}
```

### ✔️ Mensagens de Sucesso
Assim como mensagens de erro, mensagens de sucesso devem ser tratadas isoladamente para não conflitar com outras mensagens presentes na sessão.

```php
$_SESSION['sucesso'] = 'O nadador Eduardo compete na categoria adulto';
header('Location: index.php');
return;
```

### ✔️ Sessões
Para armazenar mensagens entre requisições, usamos a superglobal `$_SESSION`. É essencial iniciar a sessão com `session_start()`.

**Links úteis:**
- [Documentação oficial do PHP sobre sessões](https://www.php.net/manual/pt_BR/book.session.php)
- [Documentação sobre funções de string (como strlen)](https://www.php.net/manual/pt_BR/ref.strings.php)

---

## 🛠️ Exemplo prático completo

```php
session_start();

if (empty($_POST['nome'])) {
    $_SESSION['erro'] = 'O nome não pode ser vazio';
    header('Location: index.php');
    return;
}

if (strlen($_POST['nome']) < 3) {
    $_SESSION['erro'] = 'O nome deve ter pelo menos 3 caracteres';
    header('Location: index.php');
    return;
}

if (!is_numeric($_POST['idade'])) {
    $_SESSION['erro'] = 'Informe um número para a idade';
    header('Location: index.php');
    return;
}

$idade = (int) $_POST['idade'];

if ($idade >= 6 && $idade <= 12) {
    $_SESSION['sucesso'] = 'O nadador ' . $_POST['nome'] . ' compete na categoria infantil';
} elseif ($idade >= 13 && $idade <= 18) {
    $_SESSION['sucesso'] = 'O nadador ' . $_POST['nome'] . ' compete na categoria adolescente';
} else {
    $_SESSION['sucesso'] = 'O nadador ' . $_POST['nome'] . ' compete na categoria adulto';
}

header('Location: index.php');
return;
```

---

## 🔁 Limpando mensagens após exibição
É importante limpar as mensagens da sessão após exibição para evitar que fiquem persistindo ao atualizar a página.

```php
session_start();

if (isset($_SESSION['erro'])) {
    echo '<p style="color:red">' . $_SESSION['erro'] . '</p>';
    unset($_SESSION['erro']);
}

if (isset($_SESSION['sucesso'])) {
    echo '<p style="color:green">' . $_SESSION['sucesso'] . '</p>';
    unset($_SESSION['sucesso']);
}
```

---

## 💡 Boas práticas

- Use `header()` + `return` para interromper o script após definir a mensagem correta.
- Sempre use `unset()` para limpar mensagens na próxima requisição.
- Separe responsabilidades: crie funções específicas para validação e para definir categorias.

> Em aulas futuras, vamos modularizar o código, extraindo a lógica de validação e classificação para funções reutilizáveis, visando maior manutenibilidade.

---

## 💾 Versionamento com Git
Durante a aula também fizemos:

```bash
git status
git add .
git commit -m "✨ feat: Validação e retorno de mensagens no formulário"
git push origin main
```

---

## 🚀 Próximos passos
- Refatorar código com funções
- Modularizar validações
- Evitar duplicação de lógica

Nosso objetivo é tornar o sistema mais escalável e de fácil manutenção. Vamos juntos!

---



