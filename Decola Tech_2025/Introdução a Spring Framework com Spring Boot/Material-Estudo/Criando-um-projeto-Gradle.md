# 🚀 Guia para Criar um Projeto Gradle - Passo a Passo

Neste guia, vamos aprender como criar um projeto Gradle do zero, utilizando a estrutura básica e explicações diretas e simples.

## 📂 O que é o Gradle?

Gradle é uma ferramenta de automação de build. Com ele, podemos compilar, testar, empacotar e até distribuir nossa aplicação com facilidade. Ele é muito popular no mundo Java, mas também pode ser usado para outros tipos de projetos.

## 📝 Passo 1: Criando o Projeto Gradle

1. Primeiro, vamos criar uma nova pasta para o nosso projeto.

   - No terminal, digite:
     ```bash
     mkdir meu-projeto-gradle
     cd meu-projeto-gradle
     ```

2. Agora, vamos inicializar o Gradle com o comando:
   ```bash
   gradle init
Esse comando cria a estrutura inicial do Gradle no seu projeto. O Gradle vai perguntar qual tipo de projeto você deseja criar. Escolha a opção application, que já vem com configurações de execução para aplicações Java.

## 🔧 Estrutura do Projeto
Após a execução do comando gradle init, seu projeto terá a seguinte estrutura:

meu-projeto-gradle/
├── build.gradle
├── gradle/
│   └── wrapper/
│       └── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradlew
├── gradlew.bat
└── src/
    └── main/
        └── java/
            └── App.java

***build.gradle:*** Arquivo principal onde definimos as dependências e configurações do Gradle.
***gradlew e gradlew.bat:*** Scripts que ajudam a rodar o Gradle sem precisar instalá-lo globalmente.
src/main/java/App.java: O arquivo Java de exemplo.
## 🔥 Passo 2: Executando o Projeto
Agora que temos a estrutura, vamos rodar o projeto pela primeira vez:

No terminal, dentro da pasta do projeto, execute:


```./gradlew run```

No Windows, use:


```gradlew.bat run```
Se tudo der certo, você verá algo assim:


> Task :run
Hello World!

Isso significa que o Gradle conseguiu rodar sua aplicação com sucesso!

## 🔄 Passo 3: Adicionando Dependências
Gradle é ótimo porque podemos adicionar dependências facilmente. Vamos adicionar uma biblioteca para manipular datas, por exemplo.

Abra o arquivo build.gradle e adicione a seguinte dependência na seção dependencies:


> dependencies {
    implementation 'org.apache.commons:commons-lang3:3.12.0'
}
Agora, volte ao terminal e execute:


```./gradlew build```
Isso vai baixar a dependência e preparar tudo para usar.

## 📄 Passo 4: Usando a Dependência
Vamos usar a dependência que acabamos de adicionar no nosso código. Abra o arquivo src/main/java/App.java e substitua o conteúdo pelo seguinte código:


> import org.apache.commons.lang3.StringUtils;
public class App {
    public static void main(String[] args) {
        String str = "gradle";
        System.out.println(StringUtils.capitalize(str));
    }
}

Aqui estamos usando o método capitalize para transformar a primeira letra de "gradle" em maiúscula. Ao rodar o comando ./gradlew run novamente, o terminal vai exibir:


## 🔍 Passo 5: Testando a Aplicação
Vamos agora adicionar um teste simples para garantir que nossa aplicação está funcionando corretamente.

Crie a pasta src/test/java/ se ela não existir.
Dentro dela, crie um arquivo AppTest.java com o seguinte código:

> import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
public class AppTest {
    @Test
    public void testApp() {
        assertEquals("Gradle", StringUtils.capitalize("gradle"));
    }
}
Para rodar os testes, no terminal, execute:
bash
Copiar
Editar
./gradlew test


O Gradle irá rodar o teste e mostrar o resultado.

## ⚙️ Passo 6: Personalizando o Build
Gradle oferece muitas opções de personalização. Vamos adicionar algumas configurações no arquivo build.gradle para configurar o comportamento do build.

Abra o build.gradle e adicione o seguinte código para configurar a versão Java:

> java {
    sourceCompatibility = JavaVersion.VERSION_11
    targetCompatibility = JavaVersion.VERSION_11
}

Isso faz com que o Gradle use o Java 11 para compilar o projeto.

## 🎉 Conclusão
Parabéns! Você aprendeu como criar e configurar um projeto Gradle, adicionar dependências, escrever e rodar testes. Gradle é uma ferramenta poderosa e, com o tempo, você vai aprender a aproveitar ao máximo seus recursos.



❓ Perguntas Comuns sobre o Gradle

- O que é o Gradle? Gradle é uma ferramenta de automação de build que ajuda a compilar, testar e empacotar suas aplicações.

- Como adicionar dependências no Gradle? Basta editar o arquivo build.gradle e adicionar a dependência na seção dependencies.

- Como posso rodar meu projeto Gradle? Use o comando ./gradlew run para rodar sua aplicação.

- O que são os arquivos gradlew e gradlew.bat? São scripts que permitem rodar o Gradle sem precisar instalá-lo globalmente.

- Posso usar o Gradle com outras linguagens além do Java? Sim! Gradle pode ser usado para outros tipos de projetos, como Python, Kotlin e até para compilação de frontend.

