# 📚 Introdução ao ORM e JPA

## 🚀 Sumário

1. [O que é ORM?](#o-que-é-orm)
2. [O que é JPA?](#o-que-é-jpa)
3. [Diferença entre ORM e JPA](#diferenca-entre-orm-e-jpa)
4. [Como o ORM funciona?](#como-o-orm-funciona)
5. [Estrutura de uma Classe de Modelo em JPA](#estrutura-de-uma-classe-de-modelo-em-jpa)
6. [Anotações de Mapeamento](#anotacoes-de-mapeamento)
7. [Exemplo de Implementação com Hibernate](#exemplo-de-implementacao-com-hibernate)
8. [Conclusão e Referências](#conclusao-e-referencias)

---

## 🏷️ O que é ORM?

**ORM (Object-Relational Mapping)**, ou **Mapeamento Objeto-Relacional**, é um recurso que visa simplificar a interação entre o paradigma da Orientação a Objetos (OO) e os bancos de dados relacionais. Em vez de escrever SQL manualmente, o ORM permite que objetos Java sejam automaticamente mapeados para tabelas no banco de dados.

### 💡 Por que usar ORM?
- **Redução de Complexidade**: Elimina a necessidade de escrever código SQL repetitivo.
- **Produtividade**: Facilita a criação e manutenção do código.
- **Abstração de Banco de Dados**: Permite interagir com o banco de dados sem se preocupar com a implementação do SQL.

![Diagrama ORM](https://via.placeholder.com/600x400?text=Diagrama+de+Mapeamento+Objeto-Relacional)

---

## 🧑‍💻 O que é JPA?

A **Java Persistence API (JPA)** é uma especificação em Java para a persistência de dados em bancos de dados relacionais, utilizando o conceito de ORM. A JPA facilita o gerenciamento de dados e a persistência de objetos Java, permitindo realizar operações de **CRUD** (Criar, Ler, Atualizar, Excluir) em objetos.

### 📌 Especificações e Implementações
JPA é apenas uma especificação, ou seja, define um conjunto de regras. **Hibernate** é uma das implementações mais populares de JPA. Outras implementações incluem **EclipseLink** e **OpenJPA**.

![Logo JPA](https://via.placeholder.com/400x100?text=Logo+JPA)

---

## ⚖️ Diferença entre ORM e JPA

- **ORM** é a técnica de mapear objetos para tabelas de banco de dados.
- **JPA** é uma **especificação** de como implementar o ORM em Java.

### 💬 Exemplo Prático
- **ORM**: Hibernate, EclipseLink, OpenJPA.
- **JPA**: Define como o framework ORM deve funcionar em Java, mas não implementa.

---

## 🔄 Como o ORM funciona?

O **ORM** permite que a conversão entre **objetos Java** e **tabelas SQL** seja realizada automaticamente, poupando o desenvolvedor da necessidade de manipular SQL diretamente.

### Passos do Mapeamento:
1. **Definição da Classe de Modelo**: Criar uma classe Java que representará a tabela no banco.
2. **Configuração de Mapeamento**: Usar anotações ou XML para definir como as propriedades da classe se relacionam com as colunas da tabela.
3. **Persistência**: Usar frameworks como Hibernate ou EclipseLink para realizar operações CRUD.

![Fluxo ORM](https://via.placeholder.com/600x400?text=Fluxo+de+Mapeamento+ORM)

---

## 🏗️ Estrutura de uma Classe de Modelo em JPA

### Exemplo de Classe de Modelo:
```java
import javax.persistence.*;

@Entity
@Table(name = "usuario")
public class Usuario {
  
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "email", unique = true)
    private String email;

    // Getters e Setters
}
```
