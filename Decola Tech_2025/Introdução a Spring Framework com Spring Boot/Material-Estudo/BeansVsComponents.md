# IoC e DI no Spring Boot: Quando usar @Bean e @Component?

## 📌 **Inversão de Controle (IoC) e Injeção de Dependência (DI)**

### 🔹 **O que é IoC (Inversão de Controle)?**
A **Inversão de Controle** é um princípio da programação onde a responsabilidade de criar e gerenciar dependências é delegada ao framework (neste caso, o Spring). Isso evita que precisemos instanciar objetos manualmente usando `new`, tornando o código mais desacoplado.

> 💡 **Exemplo sem IoC:**  
> ```java
> public class Carro {
>     private Motor motor;
>     
>     public Carro() {
>         this.motor = new Motor(); // Criando diretamente -> Alto acoplamento
>     }
> }
> ```
>  
> 💡 **Exemplo com IoC:**  
> ```java
> public class Carro {
>     private Motor motor;
>     
>     public Carro(Motor motor) { // Dependência injetada -> Baixo acoplamento
>         this.motor = motor;
>     }
> }
> ```

---

### 🔹 **O que é DI (Injeção de Dependência)?**
A **Injeção de Dependência** é um mecanismo que permite ao Spring fornecer as dependências de um objeto automaticamente. Isso reduz o acoplamento e facilita testes unitários.

O Spring pode injetar dependências de três formas:
1. **Por Construtor** (recomendado)
2. **Por Setter**
3. **Por Injeção Direta de Campo (@Autowired)**

---

## 📌 **Quando usar `@Bean` e `@Component`?**
Ambos são usados para gerenciar Beans no Spring, mas têm diferenças importantes.

### ✅ **`@Component`** (Usado em classes regulares)
- Indica que uma classe deve ser gerenciada pelo Spring.
- O Spring detecta automaticamente todas as classes marcadas com `@Component` dentro dos pacotes escaneados (`@ComponentScan`).
- Pode ser usado com outras anotações especializadas:
  - `@Service` → Para classes de serviço
  - `@Repository` → Para classes que interagem com banco de dados
  - `@Controller` → Para classes que gerenciam endpoints REST

> 💡 **Exemplo usando `@Component`**
> ```java
> import org.springframework.stereotype.Component;
>
> @Component
> public class MeuComponente {
>     public String dizerOla() {
>         return "Olá, Spring!";
>     }
> }
> ```

---

### ✅ **`@Bean`** (Usado dentro de `@Configuration`)
- Indica que um método dentro de uma classe `@Configuration` retorna um objeto que será gerenciado como um Bean do Spring.
- É útil quando você precisa de mais controle sobre a criação do objeto ou quando a classe que deseja instanciar não pode ser anotada com `@Component`.

> 💡 **Exemplo usando `@Bean`**
> ```java
> import org.springframework.context.annotation.Bean;
> import org.springframework.context.annotation.Configuration;
>
> @Configuration
> public class AppConfig {
>
>     @Bean
>     public MeuComponente meuComponente() {
>         return new MeuComponente();
>     }
> }
> ```

---

## 📌 **Qual usar? `@Component` ou `@Bean`?**
- **Se você tem controle sobre a classe (pode editar)** → Use `@Component`
- **Se a classe vem de uma biblioteca externa ou precisa de configuração especial** → Use `@Bean`

---

## 📌 **Exemplo prático de IoC e DI com Spring Boot**
Vamos criar um exemplo simples onde um **Serviço** (`MeuServico`) depende de um **Componente** (`MeuComponente`).

### 🔹 **1. Criando o Componente**
```java
import org.springframework.stereotype.Component;

@Component
public class MeuComponente {
    public String mensagem() {
        return "Spring Boot é incrível!";
    }
}
```

### 🔹 **2. Criando o Serviço**
```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MeuServico {
    private final MeuComponente meuComponente;

    @Autowired
    public MeuServico(MeuComponente meuComponente) {
        this.meuComponente = meuComponente;
    }

    public void executar() {
        System.out.println(meuComponente.mensagem());
    }
}
```

### 🔹 **3. Criando a Aplicação**
```java
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MinhaAplicacao {

    public static void main(String[] args) {
        SpringApplication.run(MinhaAplicacao.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(MeuServico meuServico) {
        return args -> meuServico.executar();
    }
}
```

🔹 **Saída esperada no console:**
```
Spring Boot é incrível!
```

---

## 📌 **Resumo**
| Anotação   | Quando usar? |
|------------|-------------|
| `@Component` | Quando a classe pode ser escaneada automaticamente pelo Spring. |
| `@Service` | Igual a `@Component`, mas semântica específica para serviços. |
| `@Repository` | Para classes que acessam banco de dados. |
| `@Controller` | Para classes que expõem endpoints REST. |
| `@Bean` | Quando a classe não pode ser anotada com `@Component`, como classes externas. |

---

