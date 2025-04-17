# 🏊‍♂️ Projeto PHP Simples – Classificação de Nadadores

Vamos criar um projeto simples em PHP para treinar os primeiros comandos da linguagem.

A ideia é desenvolver um sistema que permita cadastrar competidores com nome e idade, e classificar automaticamente em uma das seguintes categorias:

- 6 a 12 anos → **Infantil**
- 13 a 18 anos → **Adolescente**
- Acima de 18 anos → **Adulto**

---

## 🛠️ Etapas para criar o projeto PHP

### ✅ Requisitos

Antes de começar, verifique se o PHP está instalado no seu sistema.

No terminal, execute:

```bash
php -v
```

A saída deve ser parecida com:

```
PHP 8.3.17 (cli) (built: Feb 11 2025 22:39:27)
```

---

### 📁 Passo 1 – Criar a pasta do projeto

Abra o terminal e crie uma pasta com:

```bash
mkdir competicao-natacao
cd competicao-natacao
```

---

### 📄 Passo 2 – Criar o arquivo PHP principal

Crie um arquivo chamado `index.php`:

```bash
touch index.php
```

Se estiver no Windows, pode criar direto pelo editor de código (como o VS Code).

---

### ✍️ Passo 3 – Escrever o código inicial

Abra o arquivo `index.php` e escreva o seguinte:

```php
<?php

// Criando uma lista de categorias
$categorias = [];
$categorias[] = "Infantil";
$categorias[] = "Adolescente";
$categorias[] = "Adulto";

// Exibindo o conteúdo do array
print_r($categorias);
```

---

## ▶️ Executando o projeto

### 🔌 Passo 4 – Subir o servidor local do PHP

No terminal, dentro da pasta do projeto, execute:

```bash
php -S localhost:8000
```

Você verá a mensagem:

```
PHP Development Server (http://localhost:8000) started
```

---

### 🌐 Passo 5 – Abrir no navegador

Abra seu navegador e acesse:

```
http://localhost:8000
```

A saída deve ser:

```
Array
(
    [0] => Infantil
    [1] => Adolescente
    [2] => Adulto
)
```

---

## 💡 Dica

Você pode adicionar lógica para classificar a idade usando `if` e `else` depois de cadastrar um competidor.

---

## 📚 Conclusão

Com esse projeto básico, você já:

- Criou um array em PHP
- Executou um arquivo `.php` localmente
- Subiu um servidor embutido
- Visualizou saída no navegador

Agora é só continuar evoluindo! 🚀
