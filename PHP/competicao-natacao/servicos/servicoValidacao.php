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

