# 📌 Spring Data JPA - Gerenciando um Cadastro de Usuário

## 🚀 Introdução

Na aula passada, vimos que o **Spring Data JPA** é um mecanismo que facilita a comunicação com o banco de dados, utilizando interfaces para fornecer recursos comuns em aplicações tradicionais. Esses recursos incluem os famosos **CRUDs** (Create, Read, Update, Delete).

Agora, vamos conhecer melhor a nossa aplicação! 📌

## 🛠️ Nossa Aplicação

Criamos uma aplicação para **gerenciar um cadastro de usuários**. Para isso, temos um método que é inicializado junto com o contexto da aplicação, ou seja, ao **startar** o Spring Boot, esse componente é executado.

### 📂 Estrutura da Aplicação

- **Entidade:** Representada por uma classe com anotações que definem as colunas do banco de dados.
- **Repositório:** Responsável por persistir os dados na base.
- **Banco de dados em memória:** Estamos usando um banco **H2 Database**, ideal para testes rápidos, mas queremos evoluir para um banco mais robusto.

## 🛢️ Migração para um Banco de Dados Persistente

Atualmente, os dados são voláteis, ou seja, eles se perdem quando a aplicação é encerrada. Precisamos agora de um banco **mais consolidado** e persistente. Entre as opções, temos:

🔹 **Gratuitos:** MySQL, PostgreSQL, H2, SQLite.  
🔹 **Proprietários:** Oracle, SQL Server, entre outros.

Nossa escolha será o **PostgreSQL**! Vamos configurar a aplicação para se conectar a ele. 🚀

## 🔧 Configuração do Banco de Dados
![mages](../assetss/conexaoPostgres.gif)

### 1️⃣ Remover a Dependência do H2

Já que não precisamos mais do banco H2, devemos removê-lo para evitar dependências desnecessárias.

### 2️⃣ Criar um Banco de Dados no PostgreSQL

Para visualizar nosso banco, usamos a ferramenta **DBeaver**. Criamos um banco chamado `meu_banco`.

### 3️⃣ Configuração no `application.properties`

Agora, precisamos centralizar as configurações do banco no **Spring Boot**. O arquivo responsável por isso é o **application.properties**.

```properties
# Configuração do Banco de Dados
spring.datasource.url=jdbc:postgresql://localhost:5432/meu_banco
spring.datasource.username=postgres
spring.datasource.password=12345
spring.datasource.driver-class-name=org.postgresql.Driver

# Mostrar os SQLs no console
spring.jpa.show-sql=true

# Atualizar a estrutura do banco automaticamente
spring.jpa.hibernate.ddl-auto=update

# Dialeto do banco
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
```

📌 **Explicação das Configurações:**

- **Linha 2:** Exibe as queries SQL no console.
- **Linha 3:** Define se o banco pode criar tabelas automaticamente (`update` verifica e ajusta alterações).
- **Linha 6 e 7:** Define o dialeto do banco para melhor compatibilidade.
- **Linha 8 a 10:** Configura a URL, usuário e senha do banco de dados.

### 4️⃣ Adicionar a Dependência do PostgreSQL no `pom.xml`

Além da configuração, precisamos adicionar a dependência do PostgreSQL no nosso projeto:

```xml
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
</dependency>
```

Com isso, o **Spring Boot** já consegue gerenciar nossa conexão com o banco! 😃

## 🎯 Testando a Aplicação

Agora que configuramos tudo corretamente, podemos rodar a aplicação e verificar se a tabela `usuario` será criada no banco.

👀 Durante o teste, encontramos um erro ao inserir um usuário! 😲 Após analisar, percebemos que o nome da tabela `user` era uma palavra reservada do banco. Para corrigir, mudamos o nome da tabela:

```java
@Entity
@Table(name = "usuarios")
public class Usuario {
    // atributos
}
```

Depois dessa correção, rodamos a aplicação novamente e... 🎉 **Sucesso! A tabela foi criada e o usuário foi inserido com sucesso!**

## 🔚 Conclusão

Hoje aprendemos:
✅ O que é o **Spring Data JPA**.  
✅ Como configurar um banco de dados **PostgreSQL** no **Spring Boot**.  
✅ Como adicionar e corrigir dependências no projeto.  
✅ Como solucionar problemas ao rodar a aplicação.  

Na próxima aula, vamos explorar **mais operações com JPA**! 🚀

🔜 **Até a próxima!**

