## 📚 Módulo: Conhecendo funções e validação de dados com PHP

---

### 🔹 Aula 02 – Padronizando comportamentos com funções

#### 🧩 Tópicos abordados:
- Identificação de repetição de código para mensagens de erro.
- Criação de serviço para centralizar mensagens de erro.
- Utilização de funções para encapsular lógica.
- Introdução à definição de tipo de retorno.
- Uso de `declare(strict_types=1)` para ativar tipagem estrita.
- Implementação de funções `setarMensagemErro()` e `obterMensagemErro()`.
- Uso de tipo union para aceitar `string|null` como retorno.

---

Durante a aula, o professor identificou repetições no código referentes à exibição e manipulação de mensagens de erro. Para resolver isso, propôs a criação de um **serviço centralizado** responsável por **setar, recuperar e até remover mensagens de erro**.

Esse serviço foi desenvolvido no diretório `servicos/` e faz uso de **sessões PHP**, sendo necessário iniciar a sessão com `session_start()` no início do script.

#### ✏️ Exemplo: Função para setar mensagem de erro

```php
function setarMensagemErro(string $mensagem): void {
    $_SESSION["mensagem_erro"] = $mensagem;
}

```


#### ✏️ Exemplo: Função para obter mensagem de erro


```


function obterMensagemErro(): string|null {
    return $_SESSION["mensagem_erro"] ?? null;
}
```


O professor explicou a importância de retornar exatamente o tipo de dado esperado, e que, para isso, utilizamos o operador de tipo union (string|null), que permite declarar que o retorno da função pode ser tanto uma string quanto null.

#### 🔐 Tipagem Estrita
Foi reforçado o uso de declare(strict_types=1) no topo dos arquivos PHP:

```
declare(strict_types=1);`

```

Com isso, o PHP exige que os tipos utilizados nos parâmetros e retornos das funções sejam estritamente os declarados, evitando coerções implícitas (por exemplo, transformar um número em string automaticamente).

#### ✅ Benefícios abordados:

- Evita repetição de código.

- Facilita manutenção e alteração futura.

- Aumenta a clareza e previsibilidade do comportamento da aplicação.

- Facilita testes e depuração.

- Promove boas práticas de coesão e encapsulamento.