<?php

$categorias = [];
$categorias[] = "Infantil";
$categorias[] = "Adolescente";
$categorias[] = "Adulto";
$categorias[] = "Idoso";

// print_r($categorias);

$nome = "Eduardo";
$idade = 30;

// print_r($nome);
// var_dump($idade);

$categorias = ["infantil", "adolescente", "adulto", "idoso"];


for ($i = 0; $i <= count($categorias) - 1; $i++) {
    if ($categorias[$i] == "infantil" && $idade >= 6 && $idade <= 12) {
        echo "O nadador $nome compete na categoria infantil";
    } elseif ($categorias[$i] == "adolescente" && $idade >= 13 && $idade <= 18) {
        echo "O nadador $nome compete na categoria adolescente";
    } elseif ($categorias[$i] == "adulto" && $idade > 18 && $idade < 60) {
        echo "O nadador " . $nome . " compete na categoria " . $categorias[$i];
    } elseif ($categorias[$i] == "idoso" && $idade >= 60) {
        echo "O nadador $nome compete na categoria idoso";
    }
}
