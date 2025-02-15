# Primeiros Passos

## Criando um projeto com Initializr

O **Spring Initializr** é uma ferramenta muito útil para criar a base de um novo projeto Spring Boot rapidamente. Com ele, você pode configurar as dependências e os parâmetros do seu projeto antes de começar a codificar. Para criar um projeto com o Spring Initializr, siga os seguintes passos:

1. Acesse o site [https://start.spring.io/](https://start.spring.io/).
2. Escolha a versão do Spring Boot que você deseja usar.
3. Selecione o tipo de projeto (Maven ou Gradle). Para este tutorial, vamos usar o Maven.
4. Escolha a linguagem que você deseja (Java é a mais comum).
5. Preencha os campos de *Group* (ex: com.example) e *Artifact* (ex: meu-projeto).
6. Selecione as dependências que você deseja incluir no projeto (por exemplo, *Spring Web*, *Spring Data JPA*, *Thymeleaf*).
7. Clique em "Generate", e o arquivo `.zip` será baixado com a estrutura básica do seu projeto.

Depois de descompactar o arquivo gerado, você terá todos os arquivos necessários para começar a trabalhar com o Spring Boot.

## Importando o projeto Maven no IntelliJ

Agora que você criou o seu projeto com o Spring Initializr, é hora de importá-lo no **IntelliJ IDEA**. Para isso, siga os passos abaixo:

1. Abra o IntelliJ IDEA e vá para *File > Open*.
2. Navegue até o diretório onde você descompactou o seu projeto.
3. Selecione a pasta raiz do seu projeto e clique em *OK*.
4. O IntelliJ irá reconhecer que o projeto é um projeto Maven e pedirá para importar as dependências. Clique em *Import*.
5. Aguarde o IntelliJ baixar e configurar todas as dependências necessárias.

Depois disso, seu projeto estará pronto para ser executado e você pode começar a trabalhar nele diretamente no IntelliJ IDEA.

## Conhecendo a estrutura Spring Boot

Ao importar o seu projeto no IntelliJ, você verá que o Spring Boot organiza a estrutura do projeto de forma simples e direta. A estrutura padrão de um projeto Spring Boot é a seguinte:

meu-projeto/ ├── src/ │ ├── main/ │ │ ├── java/ │ │ │ └── com/ │ │ │ └── example/ │ │ │ └── meuProjeto/ │ │ │ ├── MeuProjetoApplication.java │ │ │ └── ... │ │ └── resources/ │ │ ├── application.properties │ │ └── static/ │ │ └── templates/ │ └── test/ │ ├── java/ │ └── resources/ └── pom.xml


Aqui está o que cada pasta faz:

- **src/main/java**: Contém os arquivos fonte do seu código Java.
- **src/main/resources**: Contém arquivos de configuração e recursos estáticos (como imagens, arquivos CSS, etc.).
- **src/test/java**: Contém os arquivos de teste unitário para o seu código.
- **pom.xml**: Arquivo de configuração do Maven, onde você define dependências, plugins, etc.

A classe principal do seu projeto será a que contém o método `main()`, geralmente com a anotação `@SpringBootApplication`.

## Bean e CommandLineRunner

### Bean

No Spring Boot, um **bean** é um objeto gerenciado pelo contêiner Spring. O Spring cuida de criar, inicializar, configurar e gerenciar o ciclo de vida do bean. A maneira mais comum de declarar um bean é usar a anotação `@Bean` em um método dentro de uma classe de configuração. Aqui está um exemplo básico de um bean no Spring:

```java
@Configuration
public class AppConfig {

    @Bean
    public MeuBean meuBean() {
        return new MeuBean();
    }
}
```

No exemplo acima, o método meuBean() cria e retorna uma instância de MeuBean, que será gerenciada pelo Spring.

**CommandLineRunner**
O CommandLineRunner é uma interface fornecida pelo Spring Boot que permite executar um código logo após o aplicativo ser iniciado. O método *run()* da interface é chamado automaticamente quando o aplicativo Spring Boot é iniciado. Esse método é útil para executar tarefas iniciais, como carregamento de dados ou configurações.

Aqui está um exemplo de como usar o CommandLineRunner:


@SpringBootApplication
public class MeuProjetoApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(MeuProjetoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("O aplicativo Spring Boot foi iniciado com sucesso!");
    }
}
Neste exemplo, a classe MeuProjetoApplication implementa a interface CommandLineRunner e sobrescreve o método run(). Esse código será executado logo após o Spring Boot iniciar a aplicação.


