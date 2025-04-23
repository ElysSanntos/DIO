## 📚 Módulo: Conhecendo funções e validação de dados com PHP
### 🔹 Aula 03 – Combinando condições com funções e retornos

## 🚀 Visão Geral
Durante esta aula, o objetivo foi melhorar a organização do código, criando funções que encapsulam comportamentos específicos da aplicação para aumentar a reusabilidade e manutenção do sistema. A ideia foi remover a duplicidade de código e centralizar funções como validação de dados e mensagens de erro e sucesso.

## 🧩 Tópicos abordados:
- Encapsulamento de comportamento da aplicação em funções.
- Criação de um serviço para definir categorias de competidores.
- Validação de dados como nome e idade antes de definir a categoria.
- Remoção da duplicidade de código no processo de validação e mensagens.
- Melhorias na estrutura do código para facilitar manutenção futura.

## ✏️ Exemplo: Função para definir a categoria do competidor

```php
function defineCategoriaCompetidor(string $nome, string $idade) : ?string
{
    $categorias = ["Infantil", "Adolescente", "Adulto", "Idoso"];
    
    if(validaNome($nome) && validaIdade($idade)) {
        removerMensagemErro();
        
        if($idade >= 6 && $idade <= 12) {
            setarMensagemSucesso("O nadador " . $nome . " compete na categoria Infantil.");
            return null;
        }
        else if($idade >= 13 && $idade <= 18) {
            setarMensagemSucesso("O nadador " . $nome . " compete na categoria Adolescente.");
            return null;
        }
        else {
            setarMensagemSucesso("O nadador " . $nome . " compete na categoria Adulto.");
            return null;
        }
    } else {
        removerMensagemSucesso();
        return obterMensagemErro();
    }
}

```

## ✅ Benefícios abordados:

🔁 **Maior Reusabilidade:** Funções podem ser reutilizadas em várias partes do código, evitando duplicação.  
🛠️ **Facilidade de Manutenção**: Código mais organizado e fácil de entender, facilitando ajustes futuros.  
🏗️ **Melhoria na Estrutura**: Aplicação de boas práticas de programação, como encapsulamento de comportamentos em funções e serviços.  
🔐 **Validação Centralizada**: A validação de dados como nome e idade foi centralizada, evitando erros e tornando o código mais confiável.

## 🧰 Funções Utilizadas

| Função                     | Para que serve?                                           |
|---------------------------|-----------------------------------------------------------|
| `validaNome()`            | Valida se o nome do competidor é válido.                  |
| `validaIdade()`           | Valida se a idade do competidor é válida.                 |
| `setarMensagemSucesso()`  | Define uma mensagem de sucesso para a sessão.             |
| `obterMensagemErro()`     | Recupera a mensagem de erro da sessão, se houver.         |
| `removerMensagemErro()`   | Remove a mensagem de erro da sessão.                      |
| `removerMensagemSucesso()`| Remove a mensagem de sucesso da sessão.      



## 🔁 Resumo Final
Nessa aula, vimos como melhorar o código de validação e definição de categorias para competidores, utilizando funções e serviços para centralizar o comportamento. O processo de validação foi otimizado, e a duplicidade de código foi removida, resultando em um código mais limpo e mais fácil de manter. Criamos uma função para definir a categoria de competidores com base na idade e implementamos a validação do nome e idade antes da execução.

## 📚 Para Estudar Mais
A documentação oficial do PHP tem várias funções que ajudam a validar dados e manipular sessões. É importante entender como usar as funções de validação como `filter_var()` e trabalhar com sessões de forma eficaz.  
🔗 [Manual do PHP - Filtros de Validação](https://www.w3schools.com/php/php_filter.asp)  
Explore também as funcionalidades de `filter_var()` para validação de e-mails, números inteiros e outros tipos de dados. Essas funções são essenciais para garantir que os dados manipulados na aplicação sejam seguros e corretos.

