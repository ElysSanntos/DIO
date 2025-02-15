# 🔑 Properties Value

## 📌 Spring Boot: application.properties e @Value

### ⚖️ Nem tudo é "="
No Spring Boot, as configurações não se limitam a simples atribuições. Podemos definir propriedades dinâmicas e utilizar variáveis para flexibilizar nossa aplicação.

## 💪 O poderoso `application.properties`
O arquivo **`application.properties`** (ou `application.yml`) é o coração das configurações no Spring Boot. Nele, podemos definir parâmetros como:

```properties
server.port=8081
spring.datasource.url=jdbc:mysql://localhost:3306/meubanco
app.mensagem=Bem-vindo ao Spring Boot!
usuario.nome=João Silva
usuario.email=joao@email.com
usuario.telefone=11 98765-4321
```

### ✅ **Vantagens do `application.properties`**:
- **Centraliza configurações** da aplicação.
- Permite **alterações sem modificar o código-fonte**.
- Melhora a **organização e reutilização** das configurações.
- Pode ser **substituído por variáveis de ambiente** em produção.

---

## 🎯 `@Value`
A anotação **`@Value`** permite injetar valores do `application.properties` diretamente em variáveis dentro da aplicação:

```java
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class MinhaConfig {

    @Value("${app.mensagem}")
    private String mensagem;

    public String getMensagem() {
        return mensagem;
    }
}
```

✅ **Agora, qualquer alteração nos dados pode ser feita diretamente no `application.properties`, sem necessidade de modificar o código-fonte.**

---

## 🛠️ Default value
Se uma propriedade não for definida, podemos fornecer um **valor padrão**:

```java
@Value("${app.nome:Aplicação Padrão}")
private String nome;
```

Caso `app.nome` não esteja no `application.properties`, a variável `nome` terá o valor **"Aplicação Padrão"**.

### 📌 **Exemplo no `application.properties`**:

```properties
# Nome definido
usuario.nome=Maria Souza
```

Se "usuario.nome" **não estiver no arquivo**:

```java
System.out.println(nome); // Usuário Padrão
```

---

## 🎯 **Alternativa: `@ConfigurationProperties`**
Para aplicações maiores, é recomendado usar `@ConfigurationProperties`, pois permite um mapeamento mais organizado de várias propriedades.

### 📌 **Definição no `application.properties`**:

```properties
app.config.usuario.nome=João Silva
app.config.usuario.email=joao@email.com
app.config.usuario.telefone=11 98765-4321
```

### 📌 **Classe de configuração**:

```java
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "app.config.usuario")
public class UsuarioConfig {
    private String nome;
    private String email;
    private String telefone;

    // Getters e Setters
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public String getTelefone() { return telefone; }
    public void setTelefone(String telefone) { this.telefone = telefone; }
}
```

✅ **Agora podemos injetar a classe inteira e acessar os valores de forma organizada!**

---

## 🏆 **Conclusão**

- O `application.properties` armazena configurações de forma centralizada.
- A anotação `@Value` injeta valores diretamente no código.
- Podemos definir **valores padrão** para evitar erros.
- Para aplicações maiores, `@ConfigurationProperties` é a melhor alternativa.

💡 **Dica**: Sempre **evite expor credenciais sensíveis** no `application.properties`. Utilize variáveis de ambiente em produção!

---

## 📚 **Referências**

1. Spring Boot Documentation: [https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html)
2. Spring Framework Guide: [https://spring.io/guides](https://spring.io/guides)
3. Livro: "Spring Boot in Action" - Craig Walls

---

