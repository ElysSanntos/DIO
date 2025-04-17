# Introduzindo Condicionais no seu Projeto com PHP

Nesta aula, o objetivo é fazer com que o sistema cadastre o nome e a idade de um nadador e, com base nesses dados, determine e devolva em qual categoria ele se enquadra.

---

## Criando as variáveis iniciais

Vamos começar criando duas variáveis: uma para o nome e outra para a idade.

```php
$nome = "Eduardo";
$idade = 18;
```

---

## Explorando os comandos `print_r` e `var_dump`

O `print_r` é útil para mostrar estruturas de forma organizada, enquanto `var_dump` exibe os tipos e valores:

```php
print_r($nome);
var_dump($idade);
```

Saída no navegador:

```
string(7) "Eduardo"
int(18)
```

---

## Implementando a lógica de categorias

Queremos classificar o nadador em:

- Infantil (6 a 12 anos)
- Adolescente (13 a 18 anos)
- Adulto (acima de 18 anos)

```php
if ($idade >= 6 && $idade <= 12) {
    echo "Infantil";
} elseif ($idade >= 13 && $idade <= 18) {
    echo "Adolescente";
} else {
    echo "Adulto";
}
```

Se `$idade = 18`, a saída será: `Adolescente`.

---

## Testando outros valores

Mudando a idade para 8:

```php
$idade = 8;
```

Saída: `Infantil`.

---

## Trabalhando com arrays e laços de repetição

Vamos agora montar um array de categorias e percorrê-lo com `for`.

```php
$categorias = ["infantil", "adolescente", "adulto", "idoso"];

for ($i = 0; $i <= count($categorias) - 1; $i++) {
    if ($categorias[$i] == "infantil" && $idade >= 6 && $idade <= 12) {
        echo "O nadador $nome compete na categoria infantil";
    } elseif ($categorias[$i] == "adolescente" && $idade >= 13 && $idade <= 18) {
        echo "O nadador $nome compete na categoria adolescente";
    } elseif ($categorias[$i] == "adulto" && $idade > 18 && $idade < 60) {
        echo "O nadador $nome compete na categoria adulto";
    } elseif ($categorias[$i] == "idoso" && $idade >= 60) {
        echo "O nadador $nome compete na categoria idoso";
    }
}
```

---

## Exemplos práticos

```php
$idade = 8;
// Saída: O nadador Eduardo compete na categoria infantil

$idade = 18;
// Saída: O nadador Eduardo compete na categoria adolescente

$idade = 30;
// Saída: O nadador Eduardo compete na categoria adulto

$idade = 65;
// Saída: O nadador Eduardo compete na categoria idoso
```

---

## Concatenando strings

Em PHP, usamos o ponto (`.`) para concatenar strings:

```php
echo "O nadador " . $nome . " compete na categoria " . $categorias[$i];
```

---

## Conclusão

Nessa aula exploramos:

- Variáveis
- Tipos de dados
- Comandos de depuração (`print_r` e `var_dump`)
- Condicionais com `if`, `elseif`, `else`
- Arrays
- Laços `for`
- Operadores de comparação e lógicos
- Concatenação de strings

Essa base já permite construir decisões dinâmicas e categorização dentro de sistemas PHP simples.

---
