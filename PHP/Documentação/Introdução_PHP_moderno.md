# 📘 Introdução  ao PHP Moderno


> 🎙️ Ministrada por Eduardo, desenvolvedor de software e entusiasta da linguagem PHP.

---

## 🚀 Visão Geral

Bem-vindos a esta jornada divertida pelo universo do PHP! Vamos explorar, de forma leve e didática, o que é essa linguagem tão influente no desenvolvimento web, entender como ela funciona, instalar o ambiente necessário e até dar os primeiros passos em uma aplicação.

---

## 🧭 Objetivos da Aula

- Entender o papel e a influência do PHP na web moderna.
- Conhecer os **comandos básicos da linguagem**.
- Aprender a montar um ambiente funcional para rodar scripts PHP.
- Iniciar o desenvolvimento de uma **primeira aplicação web com PHP**.
- Compreender conceitos de **back-end, requisições e respostas**, e os **paradigmas** de programação suportados pela linguagem.

---

## 🧰 Pré-requisitos

Antes de mergulharmos no código, vamos nos preparar! Aqui está o que você precisa:

- ✔️ Um sistema operacional (Windows, Linux, etc.)
- ✔️ Conhecimentos básicos de terminal (Prompt de Comando ou Bash)
- ✔️ Um editor de código de sua escolha:
  - Sugestões: Sublime Text, VSCode, PHPStorm (usado pelo instrutor)

### 🔧 Instalações Recomendadas

Para facilitar a vida, utilize um pacote que monte todo o ambiente PHP para você. Aqui estão as sugestões:

#### 💻 No Windows
- **XAMPP**: Inclui Apache (servidor), MySQL (banco de dados) e PHPMyAdmin (interface gráfica para o banco).

#### 🐧 No Linux
- **LAMP**: Pode ser instalado manualmente ou via pacotes.
- **Championship** (mencionado pelo instrutor como alternativa) — ajuda a montar um ambiente pronto para desenvolvimento.

---

## 🌐 Afinal, o que é o PHP?

PHP significa **"PHP: Hypertext Preprocessor"** – um acrônimo recursivo que define uma linguagem **de script interpretada**, usada para **desenvolvimento web no lado do servidor**.

> 📖 De acordo com a [documentação oficial](https://www.php.net), PHP é uma linguagem de propósito geral voltada especialmente para o desenvolvimento web.

Mas vamos além da definição! Hoje, PHP é muito usado para:

- Criar APIs RESTful
- Servir dados a aplicações front-end (Angular, React, etc.)
- Integrar com sistemas de CMS como **WordPress, Joomla, Drupal**
- Construir aplicações robustas com **frameworks modernos** (Laravel, Symfony, Zend)

---

## 📜 História Curiosa

O PHP nasceu em **1997**, criado por **Rasmus Lerdorf**, com o objetivo de facilitar tarefas pessoais e gerenciar seus scripts na web. Mal sabia ele que estava semeando uma das linguagens mais usadas da internet!

---

## 🧪 Como o PHP Funciona?

PHP é **interpretado no servidor**, o que significa que o navegador do usuário nunca vê o código PHP — ele só recebe o **resultado** (HTML renderizado, JSON, etc.).

Esse processo segue o modelo clássico de **Request → Processing → Response**:

1. Usuário envia uma requisição (ex: envia um formulário)
2. O servidor executa o script PHP correspondente
3. Uma resposta é gerada (ex: "Formulário enviado com sucesso!") e enviada de volta

---

## 🧠 Paradigmas de Programação Suportados

PHP é **multiparadigma**, o que o torna extremamente flexível:

### 👴 Procedural (Estrutural)
Você escreve funções e scripts soltos em arquivos `.php`.

### 🧱 Orientado a Objetos (OO)
Desde a versão 5, o PHP ganhou suporte sólido a:
- `namespaces`
- `herança`
- `classes abstratas`
- `interfaces`
- `autoload`

> A orientação a objetos reduziu preconceitos antigos contra o PHP e elevou seu nível de profissionalismo.

### 🧬 Funcional (Sim, temos!)
A linguagem também suporta:
- Closures (funções anônimas)
- Funções como valores (passagem como argumento)
- Lambdas

---

## 🚀 Versões e Evolução

A versão corrente durante a aula era a **PHP 7.2**, marcada por grandes melhorias:

- Melhor performance
- Consumo de memória reduzido
- Novos operadores e sintaxes
- Suporte mais completo a tipagem escalar e retorno de função

---

## 🧱 Ecossistema Rico

PHP não é só uma linguagem, é um universo! Veja o que compõe esse mundo:

- **Frameworks**: Laravel, Symfony, Zend, Slim
- **CMSs**: WordPress, Drupal, Joomla
- **Ferramentas de Qualidade**: PHPStan, PHPCS, PHPUnit
- **Padrões de Código**: PSRs (PHP Standard Recommendations)
- **Composer**: Gerenciador de dependências que revolucionou o PHP moderno

---

## 🧑‍🏫 Dicas do Instrutor

- Instale o ambiente de desenvolvimento completo (como o XAMPP)
- Use um bom editor de texto com suporte a PHP
- Consulte sempre a [documentação oficial do PHP](https://www.php.net)
- Pratique com scripts simples e vá evoluindo gradualmente

---

## 🎉 Conclusão

PHP é muito mais do que "aquela linguagem antiga de páginas dinâmicas". Ele é poderoso, moderno, e continua extremamente relevante no cenário web!

Prepare seu ambiente, escolha um editor, e venha explorar o universo divertido do PHP!

---

💡 *Na próxima aula, vamos criar nossa primeira página PHP com HTML e interação via formulário!*

```php
<?php
echo "Olá, mundo!";
?>
```

---

🧩 *Curiosidade*: PHP roda aproximadamente **80% dos sites ativos na internet**. Muita coisa, né?

---

