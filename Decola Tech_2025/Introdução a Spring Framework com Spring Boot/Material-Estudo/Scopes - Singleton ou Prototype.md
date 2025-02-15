# 📌 Quantos irei precisar?

No Spring Boot, quando trabalhamos com **objetos gerenciados pelo Spring**, precisamos definir quantas instâncias desses objetos serão criadas e mantidas durante a execução da aplicação. Isso é definido pelo **Scope (escopo)** dos beans.

## 🔍 Conceito de Scope

O **Scope** determina o ciclo de vida e a visibilidade de um bean dentro do contêiner do Spring. Ou seja, ele define **quantas instâncias** do objeto serão criadas e quando serão destruídas.

Os principais escopos no Spring Boot são:

- **Singleton**: Apenas uma instância do objeto é criada para toda a aplicação.
- **Prototype**: Uma nova instância é criada toda vez que o bean é solicitado.

Agora, vamos ver como configurar cada um deles na prática.

## 🏗️ Configurando objeto Singleton

Por padrão, todos os beans no Spring Boot são **Singleton**. Isso significa que **apenas uma instância** do objeto será criada e compartilhada por toda a aplicação.

### Exemplo:
```java
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("singleton") // Opcional, pois singleton é o padrão
public class MeuBeanSingleton {
    public MeuBeanSingleton() {
        System.out.println("Instância Singleton Criada!");
    }
}
```

### O que acontece aqui?
- O Spring cria **uma única instância** desse objeto.
- Toda vez que alguém pedir esse bean, ele **retorna a mesma instância**.
- Útil para **serviços** e **componentes compartilhados**.

## 🔄 Configurando objetos Prototype

Quando configuramos um bean como **Prototype**, cada vez que ele for solicitado, **uma nova instância** será criada.

### Exemplo:
```java
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("prototype")
public class MeuBeanPrototype {
    public MeuBeanPrototype() {
        System.out.println("Nova instância Prototype Criada!");
    }
}
```

### O que acontece aqui?
- Toda vez que esse bean for solicitado, uma **nova instância** será criada.
- Útil para **objetos temporários**, como configurações dinâmicas ou formulários de usuário.

