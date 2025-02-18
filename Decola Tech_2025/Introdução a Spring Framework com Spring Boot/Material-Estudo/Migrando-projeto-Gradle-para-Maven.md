# 🚀 Migrando um Projeto Gradle para Maven

## 📌 Introdução

Imagine que seu projeto é uma receita de bolo. Você começou usando um livro de receitas (Gradle), mas agora quer seguir uma nova abordagem com um aplicativo de culinária (Maven). Ambos servem para organizar os ingredientes (dependências) e o modo de preparo (build), mas funcionam de maneiras diferentes. Vamos entender como fazer essa migração de forma simples e eficiente!

---

## 🔍 Passo a Passo da Migração

### 🔎 1. Verificar a Documentação Oficial
Antes de tudo, é sempre bom consultar a documentação oficial do Gradle, que já oferece um caminho para converter um projeto para Maven.

📌 **Dica:** Pesquise por `Gradle to Maven` na documentação oficial do Gradle.

### 📂 2. Adicionar o Plugin de Migração

No seu projeto Gradle, abra o arquivo **`build.gradle`** e adicione o seguinte plugin:

```gradle
plugins {
    id 'maven-publish'
}
```

### ⚙️ 3. Configurar a Publicação no Gradle
Adicione a seguinte configuração dentro do bloco de `publishing`:

```gradle
publishing {
    publications {
        mavenJava(MavenPublication) {
            from components.java
        }
    }
}
```

Isso permite que o Gradle gere um arquivo `pom.xml`, essencial para a conversão para Maven.

### 🏗️ 4. Gerar o Arquivo POM (Project Object Model)

Rode o seguinte comando para gerar o arquivo `pom.xml` automaticamente:

```sh
gradle publish
```

Se tudo der certo, um arquivo será criado em:

```
/build/publications/mavenJava/pom-default.xml
```

Esse arquivo contém todas as dependências e configurações do projeto Gradle já convertidas para Maven.

### 📜 5. Ajustar o `pom.xml`
Abra o arquivo `pom.xml` gerado e revise as dependências, plugins e configurações para garantir que tudo está correto.

Exemplo de estrutura básica de um `pom.xml`:

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.exemplo</groupId>
    <artifactId>meu-projeto</artifactId>
    <version>1.0-SNAPSHOT</version>
    <dependencies>
        <!-- Adicione suas dependências aqui -->
    </dependencies>
</project>
```

### 🚀 6. Testar o Novo Build com Maven

Agora, remova os arquivos do Gradle e teste seu projeto utilizando o Maven:

```sh
mvn clean install
```

Se tudo rodar sem erros, parabéns! 🎉 Você migrou seu projeto de Gradle para Maven com sucesso!

---

## 🛠️ Atualizando a Versão do Gradle Antes da Migração

Caso você precise atualizar a versão do Gradle antes de migrar, use o seguinte comando:

```sh
gradle wrapper --gradle-version 8.7
```

Isso garante que você está utilizando a versão mais recente antes de fazer qualquer conversão.

---

## 🎯 Conclusão

Agora você já sabe como migrar um projeto Gradle para Maven de forma simples! O Maven pode ser uma escolha melhor para projetos grandes e bem estruturados, enquanto o Gradle é mais flexível e moderno. Dependendo do seu objetivo, escolher a ferramenta certa faz toda a diferença! 🚀

Caso tenha dúvidas, experimente rodar os comandos novamente ou consultar a documentação oficial. Boa migração! 😃

