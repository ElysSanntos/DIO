## 📚 Módulo: Conhecendo funções e validação de dados com PHP

---

### 🔹 Aula 03 – Padronizando mensagens e validações com funções

#### 🧩 Tópicos abordados:
- Encapsulamento de comportamento em funções reutilizáveis.
- Criação de serviços para mensagens de erro e sucesso.
- Substituição do acesso direto à `$_SESSION` por funções.
- Remoção de mensagens da sessão após uso.
- Flexibilização da lógica interna sem impactar a interface do código.
- Separação de responsabilidades e manutenção evolutiva.

---

Durante a aula, o professor explicou a importância de encapsular comportamentos em funções, substituindo chamadas diretas à `$_SESSION` por funções utilitárias. Isso permite que, no futuro, o armazenamento das mensagens seja alterado (por exemplo, para banco de dados em memória) **sem que o restante do código precise ser modificado**.

Foram desenvolvidas funções específicas para lidar com **mensagens de erro** e **mensagens de sucesso**, além de funções auxiliares para **remover essas mensagens da sessão** após uso.

Essas funções foram organizadas como um serviço no projeto, permitindo que o restante da aplicação apenas consuma essas funções, sem conhecer os detalhes da implementação.

---

#### ✏️ Exemplo: Função para setar mensagem de erro

```php
function setarMensagemErro(string $mensagem): void {
    $_SESSION['mensagem_de_erro'] = $mensagem;
}
```

---

#### ✏️ Exemplo: Função para obter mensagem de erro

```php
function obterMensagemErro(): string|null {
    return $_SESSION['mensagem_de_erro'] ?? null;
}
```

---

#### ✏️ Exemplo: Função para setar mensagem de sucesso

```php
function setarMensagemSucesso(string $mensagem): void {
    $_SESSION['mensagem_de_sucesso'] = $mensagem;
}
```

---

#### ✏️ Exemplo: Função para obter mensagem de sucesso

```php
function obterMensagemSucesso(): string|null {
    return $_SESSION['mensagem_de_sucesso'] ?? null;
}
```

---

#### ✏️ Exemplo: Funções para remover mensagens da sessão

```php
function removerMensagemErro(): void {
    if (isset($_SESSION['mensagem_de_erro'])) {
        unset($_SESSION['mensagem_de_erro']);
    }
}

function removerMensagemSucesso(): void {
    if (isset($_SESSION['mensagem_de_sucesso'])) {
        unset($_SESSION['mensagem_de_sucesso']);
    }
}
```

---

### 💡 Encapsulamento inteligente

Com esse padrão, podemos alterar a implementação interna dessas funções (como salvar em banco ou em memória cache) sem alterar o restante da aplicação. Essa prática é chamada de **manutenção evolutiva**, e é uma das grandes vantagens da **programação orientada a responsabilidades**.

---

### ✅ Benefícios abordados:

- Permite reutilização e evita duplicação de código.
- Facilita futuras mudanças internas sem quebrar a aplicação.
- Melhora a legibilidade e organização do código.
- Centraliza lógica de mensagens, facilitando testes e manutenção.
- Garante que apenas uma mensagem (erro ou sucesso) seja exibida por vez.

---

### 📌 Exemplo de commit Git

```
✨ feat: adiciona funções para manipulação de mensagens de erro e sucesso via sessão
```

---

Essas melhorias preparam o terreno para uma aplicação mais robusta, flexível e fácil de manter. Bora continuar com o projeto! 🚀
