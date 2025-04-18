# 🛡️ Validação Final de Formulário com Mensagens de Erro e Git – PHP na Prática

## 🎬 Contexto da Aula

Imagina que o usuário acessa o formulário e… digita qualquer coisa no campo **idade**: "bolly", "💥", ou uma frase absurda. 😵‍💫  
Nosso algoritmo simplesmente aceita, e ainda classifica esse cidadão como adulto, mesmo sem ter idade válida! 😱

E mais: isso pode até ser um ponto de entrada para **códigos maliciosos**.

> 🧠 Tudo o que vem de um `<input>` chega no PHP como *string*, inclusive números como `"23"`.

---

## 🧪 Qual o problema?

Nosso algoritmo não sabe lidar com valores não numéricos no campo idade. E se o valor estiver "errado", o programa pode:
- Se comportar de forma inesperada 🌀  
- Exibir uma mensagem incorreta 😬  
- Ser vulnerável a ataques 🛑

---

## ✅ Qual a solução?

Usar funções nativas do PHP para **verificar o tipo do dado** que recebemos.

### 🧰 Função útil: `is_numeric()`

Essa função verifica se o valor recebido é um número válido (inteiro ou decimal, mesmo vindo como string).

```php
is_numeric($variavel);
```

Se for número → retorna `true`  
Se não for número → retorna `false`

---

## 💥 Aplicando a validação na prática

Vamos negar (`!`) a função para exibir a mensagem de erro quando **não** for numérico:

```php
if (!is_numeric($idade)) {
    echo "⚠️ Por favor, informe um número válido para a idade.";
    exit;
}
```

> 🔍 `!` é o operador de negação: ele inverte o valor retornado.  
> Se `is_numeric($idade)` for `false`, então `!false` vira `true`, e o bloco `if` é executado.

📎 [Ver documentação oficial de is_numeric()](https://www.php.net/manual/pt_BR/function.is-numeric.php)

---

## 🎯 Validações completas do formulário

| Campo     | Regras de Validação                                                  |
|-----------|-----------------------------------------------------------------------|
| **Nome**  | - Não pode estar vazio<br>- Mínimo 3 caracteres<br>- Máximo 40       |
| **Idade** | - Deve ser um número (verificado com `is_numeric()`)                |

---

## 🧑‍💻 Código completo com validações

```php
<?php
$nome = $_POST['nome'];
$idade = $_POST['idade'];

if (empty($nome)) {
    echo "⚠️ O campo nome é obrigatório.";
    exit;
}

if (strlen($nome) < 3 || strlen($nome) > 40) {
    echo "⚠️ O nome deve ter entre 3 e 40 caracteres.";
    exit;
}

if (!is_numeric($idade)) {
    echo "⚠️ Por favor, informe um número válido para a idade.";
    exit;
}

// Se passou por todas as validações...
echo "✅ Cadastro realizado com sucesso!";
?>
```

---

## 📦 Git – Versionando seu código

### 📌 1. Verifique o que foi alterado

```bash
git status
```

Você verá os arquivos modificados (ex: `index.php`, `script.php`)

---

### ➕ 2. Adicione os arquivos

```bash
git add index.php script.php
```

---

### 💬 3. Faça um commit explicativo

```bash
git commit -m "✨ Adicionando validações aos campos do formulário"
```

---

### 🚀 4. Envie para o GitHub

```bash
git push origin master
```

---

## 📖 Visualizando as mudanças no GitHub

No GitHub, vá na aba **"Commits"** para ver o histórico:

- Veja o que foi alterado  
- Compare versões antigas e novas  
- Acompanhe a evolução do seu projeto! 📈

---

## 🏁 Conclusão

Agora o formulário está mais robusto e seguro:

✅ Impede envio de dados inválidos  
✅ Dá mensagens de erro claras ao usuário  
✅ Garante a integridade das informações  
✅ Usa o Git para registrar a evolução do código

🧙‍♂️ Continue explorando, validando e versionando!  
O código de hoje será o legado do programador de amanhã! 🚀
