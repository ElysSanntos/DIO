# Aula: Sintaxe e Comandos Básicos

## Introdução

Dando continuidade ao nosso curso de introdução ao PHP moderno, nesta aula vamos falar sobre a **sintaxe** e **comandos básicos** da linguagem PHP. Na aula anterior, conhecemos:

- A história do PHP
- Como ele surgiu
- Informações técnicas sobre seu funcionamento
- Como testar o ambiente e verificar a versão instalada

## Sintaxe e Características

Como toda linguagem de programação, o PHP possui **características próprias** de escrita. Entre elas:

- **Declaração de variáveis**
- **Criação de funções e métodos**
- **Declaração de classes**
- **Uso de namespaces**

## Estruturas de Controle

O PHP possui as estruturas básicas que você já pode ter visto ao estudar lógica de programação:

- Condicionais: `if`, `else`, `elseif`, `switch`
- Laços de repetição: `while`, `do while`, `for`, `foreach`

## Operadores de Comparação

- `==` — Igual
- `===` — Idêntico (compara valor e tipo)
- `!=` ou `<>` — Diferente
- `!==` — Não idêntico
- `<`, `>`, `<=`, `>=` — Comparações numéricas

## Operadores Lógicos

- `and` ou `&&` — E lógico
- `or` ou `||` — Ou lógico
- `!` — Negação

## Comandos de Saída (Output)

- `echo` — Imprime valores simples (não é uma função)
- `print` — Similar ao `echo`, mas é uma função
- `var_dump()` — Mostra tipo e valor da variável, ideal para debug
- `print_r()` — Exibe arrays de forma legível

## Trabalhando com Formulários

O PHP permite recuperar dados enviados por formulários HTML por meio de variáveis superglobais:

- `$_GET` — Recupera dados enviados por **método GET**
- `$_POST` — Recupera dados enviados por **método POST**

> Essas variáveis facilitam a interação com o protocolo HTTP.

## Sobre o Protocolo HTTP

PHP trabalha diretamente com **requisições HTTP**, o que torna fundamental entender o protocolo. Ele possui:

- Verbos (GET, POST, PUT, DELETE, etc)
- Headers (cabeçalhos)
- Corpo da requisição/resposta

> Conhecer HTTP é essencial para qualquer desenvolvedor web.

## Sessões (Sessions)

Permitem **manter o estado da aplicação** durante a navegação do usuário:

- Exemplo: manter o usuário logado enquanto o navegador estiver aberto

## Arrays (Vetores)

PHP oferece suporte nativo para **arrays**, que são estruturas fundamentais para:

- Pilhas
- Listas
- Filas

> Arrays são amplamente utilizados e têm diversas funções nativas no PHP para manipulação.

---


