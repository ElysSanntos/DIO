## 1️⃣ O que é recomendado ao usar o Gradle em um projeto?

### Respostas:
- <span style="background-color: #28a745; padding: 3px;">a) Usar sempre o Gradle Wrapper para garantir a versão correta. ✔️</span>
- b) Não configurar variáveis de ambiente. ❌
- c) Sempre editar o arquivo build.gradle manualmente. ❌
- d) Desabilitar o cache do Gradle para melhorar a performance. ❌

---

## Conclusão

O uso do Gradle Wrapper é uma prática recomendada para garantir consistência nas versões do Gradle ao longo do desenvolvimento e construção do projeto. Além disso, manter o cache habilitado e configurar corretamente o ambiente são passos essenciais para garantir a eficiência no uso do Gradle. 🚀

---

## 2️⃣ Ao declarar uma dependência em um projeto Maven (usando Lombok como exemplo), qual dos formatos a seguir devemos usar?

### Respostas:
- a) `compileOnly 'org.projectlombok:lombok:1.18.32'` ❌
- b) `libraryDependencies += "org.projectlombok" % "lombok" % "1.18.32" % "provided"` ❌
- c) `'org.projectlombok:lombok:jar:1.18.32'` ❌
- d) `<dependency org="org.projectlombok" name="lombok" rev="1.18.32"/>` ❌
- <span style="background-color: #28a745; padding: 3px;">e) `<dependency> <groupId>org.projectlombok</groupId> <artifactId>lombok</artifactId> <version>1.18.32</version> <scope>provided</scope> </dependency>` ✔️</span>

---

## Conclusão

No Maven, a forma correta de declarar a dependência do **Lombok** é utilizando o formato `<dependency>` dentro do `pom.xml`, com o escopo **provided**. Isso significa que Lombok será usado apenas durante a compilação, sem ser incluído no build final do projeto.

---

## 3️⃣ Em um projeto Maven, qual arquivo usamos para declarar as dependências do projeto?

### Respostas:
- a) `settings.gradle` ❌
- b) `build.gradle/build.gradle.kts` ❌
- c) `ivy.xml` ❌
- <span style="background-color: #28a745; padding: 3px;">d) `pom.xml` ✔️</span>
- e) Nenhuma das alternativas ❌

---

## Conclusão

No Maven, o arquivo utilizado para declarar as dependências é o `pom.xml` (**Project Object Model**). Esse arquivo define todas as configurações do projeto, incluindo as dependências, plugins e outras propriedades essenciais para o build.

---

## 4️⃣ Qual comando usamos para compilar um projeto Maven?

### Respostas:
- a) `maven compile` ❌
- b) `javac compile` ❌
- c) `mvn complie` ❌ *(Erro de digitação: o correto seria `mvn compile`)*
- d) `gradle compile` ❌
- <span style="background-color: #28a745; padding: 3px;">e) `mvn compile` ✔️</span>

---

## Conclusão

No Maven, o comando correto para compilar um projeto é `mvn compile`. Esse comando analisa o código-fonte, resolve as dependências e gera os arquivos `.class`, preparando o projeto para execução ou empacotamento.

---

## 5️⃣ Ao declarar uma dependência em um projeto Gradle (usando Lombok como exemplo), qual dos formatos a seguir devemos usar?

### Respostas:
- a) `libraryDependencies += "org.projectlombok" % "lombok" % "1.18.32" % "provided"` ❌
- b) `<dependency> <groupId>org.projectlombok</groupId> <artifactId>lombok</artifactId> <version>1.18.32</version> <scope>provided</scope> </dependency>` ❌
- c) `'org.projectlombok:lombok:jar:1.18.32'` ❌
- <span style="background-color: #28a745; padding: 3px;">d) `compileOnly 'org.projectlombok:lombok:1.18.32'` ✔️</span>
- e) `<dependency org="org.projectlombok" name="lombok" rev="1.18.32"/>` ❌

---

## Conclusão

No Gradle, a forma correta de declarar a dependência do **Lombok** é utilizando **`compileOnly 'org.projectlombok:lombok:1.18.32'`**. Isso significa que Lombok será usado apenas em tempo de compilação e não será incluído no build final da aplicação.

Além disso, ao utilizar Lombok, é necessário adicionar a anotação `annotationProcessor` para que o Gradle processe corretamente as anotações do Lombok:

```gradle
dependencies {
    compileOnly 'org.projectlombok:lombok:1.18.32'
    annotationProcessor 'org.projectlombok:lombok:1.18.32'
}
```

Isso garante que as anotações do Lombok, como `@Getter`, `@Setter` e `@Data`, sejam processadas corretamente. 🚀✨

