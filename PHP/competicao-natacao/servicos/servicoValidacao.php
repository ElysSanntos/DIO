<?php

function validaNome(string $nome): bool
{
    if (empty($nome)) {
        $_SESSION['mensagem-de-erro'] = 'O nome não pode ser vazio, por favor preencha-o novamente';
            return false;
    }
    else if (strlen($nome) < 3) {
        $_SESSION['mensagem-de-erro'] = 'O nome não pode conter menos de 3 caracteres';
        return false;
    }
    else if (strlen($nome) > 20) {
        $_SESSION['mensagem-de-erro'] = 'O nome é muito extenso';
        return false;
    }
    return true;
}

function validaIdade(string $idade) : bool
{

    if (!is_numeric($idade)) {
        $_SESSION['mensagem-de-erro'] = 'A idade deve ser um numero';
        return false;

    if($idade >= 6 && $idade <= 12)
    {
        for($i = 0; $i <= count($categorias); $i++)
        {
            if($categorias[$i] == 'infantil')
            {
                $_SESSION['mensagem-de-sucesso'] =  "O nadador ".$nome. " compete na categoria " .$categorias[$i];
                return;
            }
        }
    }
    else if($idade >= 13 && $idade <= 18)
    {
        for($i = 0; $i <= count($categorias); $i++)
        {
            if($categorias[$i] == 'adolescente')
            {
                $_SESSION['mensagem-de-sucesso'] =  "O nadador ".$nome. " compete na categoria " .$categorias[$i];
                return;
            }
        }
    }
    else
    {
        for($i = 0; $i <= count($categorias); $i++)
        {
            if($categorias[$i] == 'adulto')
            {
                $_SESSION['mensagem-de-sucesso'] =  "O nadador ".$nome. " compete na categoria " .$categorias[$i];
                return;
            }
        }
    }
    
}






