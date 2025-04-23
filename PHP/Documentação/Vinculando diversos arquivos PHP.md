# 📚 Módulo: Conhecendo funções e validação de dados com PHP  
🔹 Aula 5: Vinculando diversos arquivos PHP  

---

## 🚀 Visão Geral

Nesta aula, aprofundamos o uso de funções no PHP e aprendemos como vincular diversos arquivos para estruturar melhor o código, facilitando a reutilização de lógicas como validação e mensagens de sessão.

---

## 🧩 Tópicos abordados

- Submissão de formulário em PHP
- Inclusão de arquivos com `include`
- Organização de dependências e serviços
- Uso de funções para reaproveitamento de código
- Encapsulamento de validações e mensagens
- Redirecionamento e exibição de mensagens
- Melhoria do fluxo de interação no formulário

---

## ✏️ Exemplos de código

```php
// Incluindo dependências no script de submissão
include '../servicos/mensagemSessao.php';
include '../servicos/validador.php';
include '../servicos/categoriaCompetidor.php';

// Chamando função principal
defineCategoriaCompetidor($nome, $idade);
```

## Exemplo de função em categoriaCompetidor.

```

function defineCategoriaCompetidor($nome, $idade): ?string {
    if (!validaNome($nome)) {
        setarMensagemErro("Nome inválido");
        return "Erro: Nome inválido";
    }
    if (!validaIdade($idade)) {
        setarMensagemErro("Idade fora dos critérios");
        return "Erro: Idade fora dos critérios";
    }

    setarMensagemSucesso("Categoria definida com sucesso!");
    return null;
}
```
## ✅ Benefícios abordados

- Evita repetição de código  
- Centraliza lógica de negócio  
- Facilita manutenção e testes  
- Garante legibilidade e organização  
- Permite encapsulamento e modularização  
- Torna a submissão de formulário mais robusta e reutilizável  

---

## 🧰 Funções Utilizadas

| Função                      | Responsabilidade                                          |
|----------------------------|------------------------------------------------------------|
| `include()`                | Inclui arquivos de dependência                            |
| `validaNome()`             | Valida o campo nome                                       |
| `validaIdade()`            | Valida o campo idade                                      |
| `setarMensagemErro()`      | Armazena mensagens de erro na sessão                      |
| `setarMensagemSucesso()`   | Armazena mensagens de sucesso na sessão                   |
| `recuperarMensagemErro()`  | Recupera mensagem de erro armazenada                      |
| `recuperarMensagemSucesso()`| Recupera mensagem de sucesso armazenada                  |
| `defineCategoriaCompetidor()` | Executa a lógica de validação e define categoria       |

---

## 🔁 Resumo Final

O script principal é o responsável por orquestrar as chamadas aos serviços (validador, mensagens, categorias). Assim como em linguagens como C ou Java, onde incluímos bibliotecas ou pacotes, no PHP fazemos o mesmo com `include`. Essa estrutura modular permite que o script se mantenha enxuto, delegando tarefas específicas a arquivos separados.

Além disso, reforçamos a importância de reutilizar funções para validação e feedback ao usuário, melhorando a experiência e evitando redundância no código.

---

## 📚 Para Estudar Mais

- 📄 [Documentação do `include` no PHP](https://www.php.net/manual/pt_BR/function.include.php)  
- 📄 [Sessões no PHP](https://www.php.net/manual/pt_BR/book.session.php)  
- 📄 [Funções personalizadas em PHP](https://www.php.net/manual/pt_BR/functions.user-defined.php)

