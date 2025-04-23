# 🧪 Quiz - Aprenda a normalizar o fluxo de condições com PHP


### 1. Correção de código do historiador

Formulário:

```html
<form action="cadastro.php" method="get">
  <p>Nome<input type="text" name="nome"></p>
  <p>Matéria<input type="text" name="materia_primordial"></p>
  <p><input type="submit" value="Cadastrar"></p>
</form>
```

PHP:

```php
var_dump($nome); // retorna string(9)"Heráclito"
var_dump($materia_primordial); // retorna string(4)"fogo"
```

Você sabe que o correto seria:

Nome: Tales  
Matéria primordial: água

Afirmativas:

- I - $_POST['nome'];
- II - $_GET['nome'];
- III - $_POST['materia_primordial'];
- IV - $_GET['materia_primordial'];
- V - O comando var_dump($nome) deveria retornar "Tales"
- VI - echo $materia_primordial deveria retornar "água"

✅ **Resposta correta: II, IV e VI**

---

### 2. Trafegar dados na web

Identifique as alternativas corretas:

- I - Para escrever um código PHP é necessário começar com `<?php`, mas não é obrigatório terminar com `?>`.
- II - Para 'printar' uma mensagem com PHP usa-se o comando `echo "Minha Mensagem";`.
- III - As variáveis em PHP começam com o símbolo `$`.

✅ **Resposta correta: Todas estão corretas**

---

### 3. HTTP é uma forma de:

✅ **Resposta esperada: Trafegar dados na web**

---

### 4. O Operador Ternário serve para:

- I - Deixar o código mais longo  
- II - Deixar o código mais simples e conciso  
- III - Deixar o código mais otimizado e performático  

✅ **Resposta correta: Apenas a 2**

---

### 5. Verificando baralhos

Arrays simulados:

```php
Array([0] => paus, [1] => ouros, [2] => copas, [3] => espadas)
Array([0] => 1, [1] => 2, ..., [10] => 10, [11] => Valete, [12] => Dama, [13] => Reis)
```

Afirmativas:

- I - A primeira linha poderia ser um `print_r($naipes)`.
- II - O último índice do segundo array deveria ser [12].
- III - Há um erro na construção dos índices do segundo array.
- IV - Se separássemos apenas as figuras, o último índice seria [3] => Rei.

✅ **Resposta correta: I, II e III**

---

### 6. Fórmula da água

Complete:  
A fórmula química da água é composta por moléculas de ___________ e ____________.

Opções:

- I - `echo hidrogenio;`
- II - `echo 'hidrogênio';`
- III - `echo $hidrogenio;`
- IV - `echo oxigenio;`
- V - `echo 'oxigênio';`

✅ **Resposta correta: II e V**

---

### 7. Sobre métodos HTTP

Sentenças:

- I - O HTTP só possui dois métodos, o GET e o POST.
- II – GET serve para recuperar um recurso sem trafegar um corpo (body) na requisição. Sendo assim, é comum que informações adicionais sejam enviadas via path ou header.
- III – POST é responsável por enviar informações com um corpo (body) a serem processadas.

✅ **Resposta correta: Apenas a I esta errada**

---

### 8. Sobre arrays

Sentenças:

- I – Em PHP, um array pode ser classificado como um mapa.
- II – O valor de um array pode ser outro array.
- III – O comando array só pode ser iniciado com colchetes (`[]`).

✅ **Resposta correta: I e II**

---

### 9. Estrutura de repetição for

Sentenças:

- I - Para fazer a divisão de parâmetros, usa-se ponto e vírgula.
- II - O primeiro parâmetro inicializa o valor do contador de loop.
- III - O segundo parâmetro é avaliado a cada iteração. Se for true, o loop continua; se false, termina.

✅ **Resposta correta: I, II e III**

---

### 10. Comentário correto em PHP

Qual é a forma correta de adicionar um comentário?

```php
// Comentário de uma linha
/* Comentário de múltiplas linhas */
/** DocBlock */
```

✅ **Resposta correta: Qualquer uma acima é válida (esperada na aula: /**/)**

---


Boa sorte e sucesso na sua jornada!
