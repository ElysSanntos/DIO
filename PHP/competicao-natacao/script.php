<?php

session_start();

$categorias = [];
$categorias[] = "Infantil";
$categorias[] = "Adolescente";
$categorias[] = "Adulto";
$categorias[] = "Idoso";

// print_r($categorias);

$nome = $_POST['nome'];
$idade = $_POST['idade'];

if (empty($nome)) {
    $_SESSION['mensagem de ERRO'] = 'O nome não pode ser vazio';
    header('index.php');
}

if (strlen($nome) < 3) {
    $_SESSION['mensagem de ERRO'] = 'O nome não pode conter menos de 3 caracteres';
    header('index.php');
}

if (strlen($nome) > 20) {
    $_SESSION['mensagem de ERRO'] = 'O nome é muito extenso';
    header('index.php');
}

if (!is_numeric($idade)) {
    $_SESSION['mensagem de ERRO'] = 'A idade deve ser um numero';
    header('index.php');
}

// print_r($nome);
// var_dump($idade);
// return 0;

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

?>

