# 🧪 Validação de Dados em Formulários com PHP

## 🎯 Objetivo da Aula

Nesta aula, aprendemos como validar dados enviados por formulários em PHP. A ideia principal é **nunca confiar no que o usuário envia** — seja por segurança ou para manter a integridade da aplicação. Vamos usar algumas funções nativas do PHP para garantir que os dados recebidos são válidos antes de processá-los.

---

## 🧠 Por que validar?

Quando um usuário preenche um formulário e clica em "Enviar", ele pode:

- Mandar o campo nome vazio 😶  
- Escrever um nome com apenas uma letra ("T") 😐  
- Digitar um texto enorme tentando executar comandos ou simular ataques 😬  
- Enviar letras no campo idade ao invés de números 😖  

Se **não validarmos**, o PHP aceita tudo isso... e isso pode causar problemas graves, como falhas de segurança ou bugs no sistema.

> 🔐 **Validação é essencial para proteger seu site e evitar comportamentos inesperados.**

---

## 📝 Estrutura do Formulário

```html
<form action="formulario.php" method="post">
  <label>Nome:</label>
  <input type="text" name="nome"><br><br>

  <label>Idade:</label>
  <input type="text" name="idade"><br><br>

  <input type="submit" value="Enviar">
</form>
```

Esse formulário envia os dados via `POST` para o script `formulario.php`.

---

## 🔍 Começando a Validar com PHP

### 1. Verificar se o nome está vazio

```php
if (empty($nome)) {
    echo "⚠️ O nome não pode ser vazio.";
    return;
}
```

### 2. Verificar se o nome tem pelo menos 3 caracteres

```php
if (strlen($nome) < 3) {
    echo "⚠️ O nome deve conter mais de 3 caracteres.";
    return;
}
```

### 3. Limitar o nome a no máximo 40 caracteres

```php
if (strlen($nome) > 40) {
    echo "⚠️ O nome é muito extenso.";
    return;
}
```

### 4. Verificar se a idade é um número

```php
if (!is_numeric($idade)) {
    echo "⚠️ A idade deve ser um número.";
    return;
}
```

---

## 🔄 Fluxo com Validações

As validações funcionam como barreiras. Sempre que alguma estiver errada, o script para a execução (`return`) e mostra uma mensagem clara para o usuário.

Assim, o usuário precisa corrigir o erro antes que o PHP continue com o processamento dos dados (por exemplo, classificar um nadador por idade).

---

## 🧰 Funções Utilizadas

| Função           | Para que serve?                                   |
|------------------|----------------------------------------------------|
| `empty()`        | Verifica se o campo está vazio                     |
| `strlen()`       | Conta quantos caracteres existem numa string       |
| `is_numeric()`   | Verifica se o valor é um número                    |

---

## 📚 Para Estudar Mais

A documentação oficial do PHP tem uma seção riquíssima sobre validação e filtros de dados. É altamente recomendável estudar e explorar essas funções para aplicações reais e seguras:

🔗 [Manual do PHP - Filtros de Validação](https://www.php.net/manual/pt_BR/book.filter.php)

Você encontrará funções como `filter_var()` e constantes como `FILTER_VALIDATE_EMAIL`, `FILTER_VALIDATE_INT` e outras para validar dados com mais precisão e segurança.

---

## ✨ Conclusão

Validação é um dos pilares de qualquer aplicação web segura. Mesmo com front-end bonito e responsivo, **tudo que chega ao servidor precisa ser verificado**.

Usar validações simples como as que vimos aqui já é um ótimo começo. Com o tempo, podemos aprimorar isso usando expressões regulares, filtros do PHP e até bibliotecas específicas.

> ✅ **Lembre-se: todo campo de formulário pode ser uma porta de entrada. Valide sempre!**

---

🧙‍♂️ **Dica do Mestre PHP**: "Prefira prevenir um erro do que remendar um problema."

🚀 Vamos continuar melhorando nosso script de competição de natação, agora com dados confiáveis e protegidos!
