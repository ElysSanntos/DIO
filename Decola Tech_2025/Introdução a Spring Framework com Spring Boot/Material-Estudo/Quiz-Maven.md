


O que acontece se você não definir a variável de ambiente `MAVEN_HOME` corretamente?

- <span style="background-color: #28a745; padding: 3px;"> O Maven não funcionará corretamente, podendo gerar erros. ✔️ 
-  O Maven não conseguirá localizar o repositório local. ❌
-  O Maven funcionará normalmente. ❌
-  O Maven não conseguirá acessar o JDK. ❌

## Explicação:
Se a variável de ambiente `MAVEN_HOME` não for definida corretamente, o Maven **não funcionará corretamente**, podendo gerar erros. Isso pode ocorrer porque o Maven não consegue encontrar os caminhos certos para o repositório local ou o JDK, impactando sua capacidade de compilar e executar os projetos.

---


Como configurar o Maven para usar um repositório local diferente?

- Não é possível mudar o repositório local. ❌
-  Alterando o arquivo `build.gradle`. ❌
-  Editando o arquivo `pom.xml`. ❌
-  <span style="background-color: #28a745; padding: 3px;"> Modificando o arquivo `settings.xml`. ✔️ 

## Explicação:
Para configurar o Maven para usar um repositório local diferente, você precisa **modificar o arquivo `settings.xml`**, que é o arquivo de configuração global do Maven. Dentro desse arquivo, você pode especificar o caminho para o repositório local desejado, alterando a tag `<localRepository>`.

Exemplo:

```xml
<settings>
  <localRepository>/caminho/do/repositório/local</localRepository>
</settings>

```
---


Qual é o arquivo de configuração principal do Maven?

-  <span style="background-color: #28a745; padding: 3px;"> `pom.xml`. ✔️ (Resposta correta)
- build.gradle. ❌
- maven.config`. ❌
-  `settings.gradle. ❌

## Explicação:
O arquivo de configuração principal do Maven é o **`pom.xml`** (Project Object Model). Ele é usado para definir as dependências, configurações de construção e outros detalhes do projeto.

- **`build.gradle`** é usado pelo Gradle, não pelo Maven.
- **`maven.config`** é um arquivo de configuração específico do Maven Wrapper, não o arquivo principal.
- **`settings.gradle`** também é usado pelo Gradle e não pelo Maven.

---


Como você pode instalar o Maven em seu sistema operacional?



-  Baixando o instalador do Maven e configurando o `MAVEN_HOME`. ❌
- <span style="background-color: #28a745; padding: 3px;">a) Instalando através de um gerenciador de pacotes como `apt-get` ou `brew`. ✔️ 
-  O Maven é instalado automaticamente com o JDK. ❌
-  Apenas descompactando o arquivo `.zip` e rodando o Maven diretamente. ❌

## Explicação:
O Maven pode ser instalado facilmente **através de um gerenciador de pacotes** como `apt-get` no Linux ou `brew` no macOS. Esses gerenciadores de pacotes cuidam da instalação e dependências automaticamente.

- Embora você também possa **baixar o instalador do Maven e configurar o `MAVEN_HOME`** manualmente, a instalação via gerenciadores de pacotes é uma opção mais rápida e simplificada.
- O Maven **não é instalado automaticamente com o JDK** e **não pode ser instalado apenas descompactando o arquivo `.zip`** sem configurar adequadamente o ambiente.
