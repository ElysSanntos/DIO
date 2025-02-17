# 🛠️ Como Instalar o Maven: Passo a Passo Descomplicado


Oi, galera! 👋 Tudo bem com vocês? Sejam muito bem-vindos a mais uma aula aqui no nosso cantinho do conhecimento! Hoje, vamos aprender a instalar uma ferramenta maravilhosa que vai fazer muita diferença no desenvolvimento dos nossos projetos. 😎

## 💻 O que é o Maven?

Antes de começar a instalação, vou falar um pouquinho sobre o que é o **Maven**. Ele é uma ferramenta **incrível** para gerenciar dependências nos nossos projetos. 📦🔧

Por exemplo, se estamos trabalhando com bibliotecas específicas e queremos que o Maven faça o "trabalho sujo", ele baixa essas dependências e as coloca prontinhas para a gente. Dá para usar até para gerar relatórios de qualidade de código e coberturas de testes! 👨‍💻💡

## 🚀 Vamos começar!

### 🖥️ **Opção 1: Usando o Terminal (Simplicidade no Comando)**

Essa aqui é a forma mais direta e prática de fazer a instalação. Para quem gosta de **agilidade**, essa é a melhor opção.

1. **Verificando o Java:**

Primeiro, a gente precisa garantir que o **Java** esteja instalado. O Maven depende dele! Então, bora digitar esse comando aqui no terminal:

```bash
java -version
```
Se aparecer algo como java version "11", estamos no caminho certo! 😎

**Instalando o Maven:**
Agora, no terminal, digite o comando mágico para começar a instalação do Maven:

````sudo apt install maven````

O terminal vai fazer a magia acontecer, baixando tudo que a gente precisa! 🔮✨

**Confirmando a instalação:**
Depois de tudo instalado, vamos garantir que o Maven foi instalado corretamente. Então, digite:


```mvn -version```

Se aparecer a versão do Maven, parabéns! Você acaba de fazer sua primeira instalação com sucesso! 🎉🎉

### 🖥️🔧 Opção 2: Instalação Manual (Para quem curte mais controle)
E para quem gosta de ter controle absoluto sobre o que está acontecendo, temos a opção mais manual! ✋

## Baixando o Maven:
Você vai precisar acessar o site oficial do Maven e baixar a versão mais recente, que pode ser a 3.6.9 ou até uma versão mais alta se você preferir.

### Extraindo o arquivo:
Depois de baixar o arquivo, é só descompactar ele na pasta onde você quiser. Use esse comando para extrair:

>tar -xvzf apache-maven-3.6.9-bin.tar.gz
Configurando as variáveis de ambiente:

Aqui, você vai configurar o MAVEN_HOME para garantir que o Maven saiba onde está instalado. Esse comando vai ser seu amigo:


export MAVEN_HOME=/opt/apache-maven
E aí, é só dar aquele "start" com o comando:


``mvn -version``
Se tudo correr bem, você terá o Maven rodando no seu sistema! 🚀

## 💡 Dica Importante!
Caso queira fazer tudo de uma vez, use a opção ``-y`` para confirmar automaticamente durante a instalação. Assim, o processo fica bem mais rápido! 😏

`## 🚀 Finalizando!
E é isso, galera! Agora vocês sabem como instalar o Maven de duas formas: a maneira rápida com o terminal ou com um pouco mais de controle manual. Cada um escolhe o seu estilo! 😎


