## 📚 Módulo: Conhecendo funções e validação de dados com PHP

---

### 🔹 Aula 01 – Introdução a funções em PHP  

#### 🧩 Tópicos abordados:
- Revisão do uso de sessões e validações anteriores.
- Problema com mensagens persistentes na sessão.
- Criação de um diretório `servicos/` para organização do código.
- Introdução à criação de funções em PHP.
- Encapsulamento de validações em funções reutilizáveis.
- Tipagem de parâmetros e retorno de funções em PHP.
- Ativação de tipagem estrita com `declare(strict_types=1)`.
- Benefícios da tipagem forte (forte coesão e previsibilidade).

---

Durante a aula, foi retomado o que havia sido feito na aula anterior: a manipulação de sessões e validação dos dados enviados via formulário em PHP. Um problema foi identificado: mesmo após uma nova submissão correta, mensagens antigas continuavam sendo exibidas. Isso acontecia porque as mensagens estavam sendo persistidas na sessão.

Para resolver esse tipo de problema e evoluir a aplicação, iniciamos a refatoração do código. O professor propôs a criação de um novo diretório chamado `servicos/`, no qual seriam centralizadas funções utilitárias reutilizáveis.

O foco foi na criação de duas funções:
1. `validarNome()`
2. `validarIdade()`

Essas funções encapsulariam a lógica de validação que antes estava solta no código principal.

#### Exemplo de função `validarNome`:

```php
function validarNome(string $nome): bool {
    if (empty($nome)) {
        return false;
    }

    if (strlen($nome) < 3 || strlen($nome) > 40) {
        return false;
    }

    return true;
}
```
Além disso, foi apresentado o conceito de **tipagem de retorno** (por exemplo, `: bool`) e a ativação da **tipagem estrita** com o uso de:

```php
declare(strict_types=1);
```
Isso força o PHP a ser mais rigoroso com os tipos esperados e retornados, aproximando seu comportamento de linguagens fortemente tipadas como Java ou C#.

Um ponto importante é que, mesmo sem a tipagem estrita, o PHP tenta coerção de tipo. Por exemplo, se uma função espera uma string, o PHP pode aceitar um número e convertê-lo automaticamente. Com strict_types, isso não é permitido – o tipo deve ser exatamente o que foi especificado.

Ao final, foi discutido como isso melhora a qualidade do código, deixando-o mais manutenível, robusto e fácil de testar.