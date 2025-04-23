<?php


function validaNome(string $nome): bool
{
    $isValido = true;

    if (empty($nome)) {
        setarMensagemErro('O nome não pode ser vazio, por favor preencha-o novamente');
        $isValido = false;
    } elseif (strlen($nome) < 3) {
        setarMensagemErro('O nome não pode conter menos de 3 caracteres');
        $isValido = false;
    } elseif (strlen($nome) > 20) {
        setarMensagemErro('O nome é muito extenso');
        $isValido = false;
    }
    return $isValido;
}

function validaIdade(string $idade): bool
{
    if (!is_numeric($idade)) {
        setarMensagemErro('Informe um número para idade');
        return false;
    }
    return true;
}

// function validaIdade(string $idade) : bool
// {

//     if (!is_numeric($idade)) {
//         setarMensagemErro( 'A idade deve ser um numero');
//         return false;

//     if($idade >= 6 && $idade <= 12)
//     {
//         for($i = 0; $i <= count($categorias); $i++)
//         {
//             if($categorias[$i] == 'infantil')
//             {
//                 setarMensagemErro("O nadador ".$nome. " compete na categoria " .$categorias[$i]);
//                 return;
//             }
//         }
//     }
//     else if($idade >= 13 && $idade <= 18)
//     {
//         for($i = 0; $i <= count($categorias); $i++)
//         {
//             if($categorias[$i] == 'adolescente')
//             {
//                 setarMensagemErro("O nadador ".$nome. " compete na categoria " .$categorias[$i]);
//                 return;
//             }
//         }
//     }
//     else
//     {
//         for($i = 0; $i <= count($categorias); $i++)
//         {
//             if($categorias[$i] == 'adulto')
//             {
//                 setarMensagemErro("O nadador ".$nome. " compete na categoria " .$categorias[$i]);
//                 return;
//             }
//         }
//     }
