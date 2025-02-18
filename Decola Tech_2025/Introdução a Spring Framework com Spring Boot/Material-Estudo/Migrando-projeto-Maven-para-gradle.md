# ✨ Migrando de Maven para Gradle - Uma Jornada Lúdica! 

## ⚡ Por que Migrar? 
Imagina que você tem uma velha bicicleta (Maven). Ela te levou a muitos lugares, mas agora você quer uma moto (Gradle), que é mais rápida e eficiente. A migração é basicamente trocar sua bicicleta por uma moto, mantendo a direção segura e garantindo que tudo funcione bem.

## ⚙ Passo a Passo da Migração
Vamos seguir um roteiro simples para fazer essa troca de forma suave. 

### 📂 1. Conhecendo Nosso Projeto
Antes de qualquer coisa, precisamos entender nosso projeto. Temos um sistema que usa **Maven** e um arquivo **pom.xml** com as dependências e configurações.

### 🛠️ 2. Usando a Ferramenta de Migração
Gradle tem uma ferramenta própria para ajudar na migração. No terminal, rodamos:
```bash
gradle init
```
Isso detecta que o projeto está em Maven e pergunta como queremos converter para Gradle.

### 🔧 3. Escolhendo o Tipo de Script
Gradle pode usar dois tipos de scripts:
- **Kotlin DSL (build.gradle.kts)** - Mais moderno e seguro
- **Groovy DSL (build.gradle)** - Mais comum e tradicional

Escolha **Groovy DSL** se não tiver preferência.

### 🔄 4. Configurando a Versão do Java
Gradle precisa saber qual versão do Java você está usando. No **build.gradle**, adicione:
```gradle
java {
    toolchain {
        languageVersion.set(JavaLanguageVersion.of(17))
    }
}
```
Isso garante que a versão correta do Java seja usada.

### 📅 5. Verificando as Dependências
Agora precisamos conferir se todas as dependências do **pom.xml** foram corretamente convertidas para o **build.gradle**. Caso falte algo, adicionamos manualmente assim:
```gradle
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    testImplementation 'org.junit.jupiter:junit-jupiter-api:5.7.1'
}
```

### 🚀 6. Testando a Compilação
Para ver se tudo está certo, rodamos:
```bash
gradle build
```
Se der erro, revisamos as configurações e corrigimos.

### 🏰 7. Limpando os Arquivos Antigos
Se tudo funcionou, podemos remover os arquivos do Maven:
```bash
rm -rf pom.xml
```
Agora só usamos **Gradle**! 

## 🚀 Conclusão
Agora você trocou sua "bicicleta" (Maven) por uma "moto" (Gradle)! 
Isso significa builds mais rápidos, melhor gerenciamento de dependências e mais flexibilidade. Com o tempo, você se acostuma com a nova ferramenta e aproveita todas as vantagens dela!
