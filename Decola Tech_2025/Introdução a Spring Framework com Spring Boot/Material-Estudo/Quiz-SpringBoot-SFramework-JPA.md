# 📝 Quiz sobre Spring Boot, Spring Framework e JPA

 Qual das alternativas abaixo contém o Starter correto para  importarmos a dependência do SGBD PostgreSQL?

- <span style="background-color: #28a745; padding: 3px;">✅ **```xml <dependency> <groupId>org.postgresql</groupId> <artifactId>postgresql</artifactId> </dependency>
 
- ❌ Nenhuma das alternativas.  
- ❌ ```xml
  <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>postgresql</artifactId>
  </dependency>```

- ❌ ```xml <dependency> <groupId>org.postgresql</groupId> <artifactId>spring-boot-starter-data-jpa</artifactId> </dependency>```


- ❌ ```xml <dependency> <groupId>org.springframework.postgresql</groupId> <artifactId>postgresql</artifactId> </dependency>```


 Sobre os conceitos bases do Spring Framework, analise as afirmações abaixo e marque a alternativa correta:
Declarações:

I. O container do Spring IoC define uma instância do objeto. ✅
II. Será criado um novo objeto a cada solicitação ao container. ❌ (Depende do escopo do bean)
III. Um bean será criado para cada requisição HTTP. ❌ (Isso ocorre apenas no escopo @RequestScope)
IV. Cria um bean para o ciclo de vida do contexto da aplicação. ✅
✅ Singleton, Prototype, Http-Request, Application Scope.



 Sobre os conceitos bases do Java Persistence API (JPA), analise as afirmações abaixo e marque a alternativa correta:
Declarações:

I. É um recurso para aproximar o POO ao contexto de Bancos de Dados Relacionais. 
II. É uma especificação baseada em interfaces, que através de um framework realiza operações de persistência de objetos em Java. 
III. Hibernate, Eclipse Link, Top Link, Open JPA.  (Esses são frameworks que implementam JPA)

- ❌JPA, ORM, Implementações JPA.
- ❌ Nenhuma das alternativas.
- ❌ ORM, JPA, Implementações JPA.
- <span style="background-color: #28a745; padding: 3px;">✅ ORM, Implementações JPA, JPA.
- ❌ Implementações JPA, ORM, JPA.


 Para que serve a annotation @ConfigurationProperties(prefix)?

- <span style="background-color: #28a745; padding: 3px;"> ✅ Uma maneira de incluir uma configuração externalizada e de fácil acesso a propriedades definidas em arquivos de propriedades.
- ❌ Para podermos atribuir valor padrão a uma propriedade de classe.
- ❌ Indica em qual profile tal bean deve ser carregado.
- ❌ Nenhuma das alternativas.
- ❌ Indica que o Spring deve invocar aquele método e gerenciar o objeto retornado por ele.

 Para que serve a annotation @ConfigurationProperties(prefix)?
Uma maneira de incluir uma configuração externalizada e de fácil acesso a propriedades definidas em arquivos de propriedades.

- <span style="background-color: #28a745; padding: 3px;">✅ Resposta correta: "Serve para executar consultas SQL e SQL nativas."
- ❌ Para podermos atribuir valor padrão a uma propriedade de classe.
- ❌ Indica em qual profile tal bean deve ser carregado.
- ❌ Nenhuma das alternativas.
- ❌ Indica que o Spring deve invocar aquele método e gerenciar o objeto retornado por ele.

 Para que serve a annotation @Scope?

- ❌ **Nenhuma das alternativas.**
- <span style="background-color: #28a745; padding: 3px;">✅ **Utilizada para marcar o tempo de vida de um objeto gerenciado pelo container.**
- ❌ **Utilizada para marcar o ponto de injeção na sua classe.**
- ❌ **Indica em qual profile tal bean deve ser carregado.**
- ❌ **Indica que o Spring deve invocar aquele método e gerenciar o objeto retornado por ele.**

## Explicação:
A annotation @Scope no Spring é utilizada para definir o tempo de vida de um bean gerenciado pelo container. Ela pode ser configurada para diferentes escopos, como singleton, prototype, entre outros.


 Qual das alternativas abaixo contém o Starter correto para importarmos a dependência do SGBD PostgreSQL?

- ❌ **<dependency> <groupId>org.postgresql</groupId> <artifactId>spring-boot-starter-data-jpa</artifactId> </dependency>**
- ❌ **<dependency> <groupId>org.springframework.postgresql</groupId> <artifactId>postgresql</artifactId> </dependency>**
- <span style="background-color: #28a745; padding: 3px;">✅ **<dependency> <groupId>org.postgresql</groupId> <artifactId>postgresql</artifactId> </dependency>**
- ❌ **Nenhuma das alternativas.**
- ❌ **<dependency> <groupId>org.springframework.boot</groupId> <artifactId>postgresql</artifactId> </dependency>**


 Qual das opções abaixo é uma extensão de arquivo de configuração padrão do aplicativo quando estamos trabalhando com Spring Boot?

- ❌ **.sql**
- ❌ **.xml**
- ❌ **.cmd**
- ❌ **.kt**
- <span style="background-color: #28a745; padding: 3px;"> ✅ **.properties**

### Explicação:
A extensão de arquivo padrão para configuração de propriedades em aplicativos Spring Boot é .properties. Este arquivo é comumente usado para definir configurações como a conexão com o banco de dados, parâmetros de ambiente, e outras configurações de aplicação.

Embora também seja possível usar arquivos .yml (YAML), o .properties é o mais comum.


O que são os Starters do Spring Boot?

- ❌ **São responsáveis por ler o conteúdo do classpath e realizar as configurações necessárias para que a aplicação funcione.**
- <span style="background-color: #28a745; padding: 3px;">✅ **São dependências que agrupam outras dependências com um propósito em comum.**
- ❌ **Nenhuma das alternativas.**
- ❌ **São um conjunto de funcionalidades que ajuda o trabalho de qualquer dev.**
- ❌ **É uma IDE totalmente customizada para o desenvolvimento de aplicações do ecossistema Spring.**
### Explicação:
Os Starters no Spring Boot são conjuntos de dependências que agrupam bibliotecas relacionadas, com o objetivo de facilitar a configuração e a integração de tecnologias específicas na sua aplicação. Por exemplo, o starter spring-boot-starter-data-jpa agrupa as dependências necessárias para trabalhar com JPA (Java Persistence API).

 Qual é a definição do Spring Data JPA?

- ❌ **Fornece ferramentas para que os desenvolvedores criem rapidamente alguns dos padrões comuns em sistemas distribuídos.**
- ❌ **Nenhuma das alternativas.**
- <span style="background-color: #28a745; padding: 3px;"> ✅ **É parte da família maior do Spring Data, torna mais fácil implementar repositórios baseados em JPA.**
- ❌ **É um framework que se concentra em fornecer autenticação e autorização para aplicativos Java.**
- ❌ **Fornece um modelo abrangente de programação e configuração para aplicativos empresariais modernos baseados em Java - em qualquer tipo de plataforma de implantação.**


### Explicação:
O Spring Data JPA faz parte da família Spring Data e facilita a implementação de repositórios usando JPA (Java Persistence API). Ele reduz a quantidade de código necessário para realizar operações de persistência de dados, tornando mais simples a integração com bancos de dados relacionais.

Para que serve a annotation @ConfigurationProperties(prefix)?

- ❌ **Para podermos atribuir valor padrão a uma propriedade de classe.**
- <span style="background-color: #28a745; padding: 3px;">✅ **Uma maneira de incluir uma configuração externalizada e de fácil acesso a propriedades definidas em arquivos de propriedades.**
- ❌ **Indica que o Spring deve invocar aquele método e gerenciar o objeto retornado por ele.**
- ❌ **Indica em qual profile tal bean deve ser carregado.**
- ❌ **Nenhuma das alternativas.**

### Explicação:
A annotation @ConfigurationProperties(prefix) é usada para vincular as propriedades definidas em arquivos de configuração (como application.properties ou application.yml) a um objeto Java. O prefixo especificado ajuda o Spring Boot a mapear as propriedades corretamente para as variáveis da classe. Isso facilita o gerenciamento de configurações externalizadas.

 Para que serve a annotation @Value?

- <span style="background-color: #28a745; padding: 3px;">✅ **Para podermos atribuir valor padrão a uma propriedade de classe.**
- ❌ **Nenhuma das alternativas.**
- ❌ **Utilizada para marcar o ponto de injeção na sua classe.**
- ❌ **Utilizada para marcar o tempo de vida de um objeto gerenciado pelo container.**
- ❌ **Indica que o Spring deve invocar aquele método e gerenciar o objeto retornado por ele.**


### Explicação:
A annotation @Value é usada para injetar valores em campos, métodos ou construtores em uma classe, a partir de propriedades configuradas em arquivos como application.properties ou application.yml. Ela pode ser utilizada para configurar valores dinamicamente, como propriedades do ambiente ou outros dados configuráveis.