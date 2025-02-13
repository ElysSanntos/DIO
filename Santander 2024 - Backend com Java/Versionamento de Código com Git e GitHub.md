# Versionamento de Código com Git e GitHub

## Objetivo Geral

Introduzir ao versionamento decódigo com Git e GitHub.

![2246f17d-7d38-4b52-bbe4-642b1ce125af](file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/2246f17d-7d38-4b52-bbe4-642b1ce125af.png)

## Sistemas de Controle de Versão

Controlam as versões de um arquivo ao longo do tempo.

⚡️Registra o histórico deatualizações de um arquivo;

⚡️Gerencia quais foram as alterações, a data, o autor, etc.;

⚡️Organização, controle e segurança.

Dentre os sistemas de **controle de versão (VCS),***temos:

- VCS Centralizados (CVCS) - EX: CVS, Subversion
  
  <img title="" src="file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/fc49c3cd-de8a-4b4f-a8bc-be900066c628.png" alt="fc49c3cd-de8a-4b4f-a8bc-be900066c628" data-align="inline">
  
  ![eda03139-2897-41ba-927f-8d6d334ba1ac](file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/eda03139-2897-41ba-927f-8d6d334ba1ac.png)

- VCS Distribuido (DVCS) - Ex: Git, Mercurial
  Clona o repositório completo, o que inclui o histórico de versões.
  
  - Cada clone é como um backup
  
  - Possibilita um fluxo de trabalho flexivel;
  
  - Possibilidade de trabalhar sem conexão com a rede.
  
  ![31707536-cd74-439a-96f5-49f80c17efbd](file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/31707536-cd74-439a-96f5-49f80c17efbd.png)
  ![1d235f4c-32b7-480f-bb07-2a9734aeed70](file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/1d235f4c-32b7-480f-bb07-2a9734aeed70.png)

# O que é Git?

Sistema de  controle de versão Distribuido

- Gratuito e Open Souce(Código aberto);

- Ramificações( branching) e fusões (merging) eficientes;

- Leve e rápido.

## Breve histórico do Git

*2002*

O projeto do núcleo (kernel) do Linux, que é open source,começa a utilizar o BitKeeper, um DVCSproprietário;

*2005*

Após conflitos com a comunidade,o BitKeeper rescindea licença gratuita. O que leva a Linus Torvalds, o criador do Linux, e sua equipe, adesenvolverem sua própria ferramenta, o Git.

## Fluxo básico

<img title="" src="file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/934cf44d-7e4f-40ca-b744-dde32c0372c2.png" alt="934cf44d-7e4f-40ca-b744-dde32c0372c2" style="zoom:67%;">

<img src="file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/06132ad4-8e5c-4f5d-bd25-cac113e06bef.png" title="" alt="06132ad4-8e5c-4f5d-bd25-cac113e06bef" style="zoom:67%;">

<img src="file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/9764556c-9ee7-47ad-a402-f0087b4ca5fa.png" title="" alt="9764556c-9ee7-47ad-a402-f0087b4ca5fa" style="zoom:67%;">

<img src="file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/edd19396-ee80-400c-ab2d-d4587ddb2f51.png" title="" alt="edd19396-ee80-400c-ab2d-d4587ddb2f51" style="zoom:67%;">

<img src="file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/5405f7a0-d0a6-4886-897f-6429818157fe.png" title="" alt="5405f7a0-d0a6-4886-897f-6429818157fe" style="zoom:67%;">

<img src="file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/f946353e-9ca1-4f10-aa34-08ba980a7894.png" title="" alt="f946353e-9ca1-4f10-aa34-08ba980a7894" style="zoom:67%;">

<img src="file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/42bfaf2a-48aa-449a-9d7f-c49cee8dafc2.png" title="" alt="42bfaf2a-48aa-449a-9d7f-c49cee8dafc2" style="zoom:67%;">

<img src="file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/f7edc99e-7e8d-466d-903d-9ba266322428.png" title="" alt="f7edc99e-7e8d-466d-903d-9ba266322428" style="zoom:67%;">

<img src="file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/97f53ef1-b483-49e9-987d-37d03be94b97.png" title="" alt="97f53ef1-b483-49e9-987d-37d03be94b97" style="zoom:67%;">

<img src="file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/06476fb6-0cb1-4d46-b10d-18f95388f573.png" title="" alt="06476fb6-0cb1-4d46-b10d-18f95388f573" style="zoom:67%;">

# O que é GitHub?

Plataforma de hospedagem de código para controle de versão com Git, e colaboração.

- Comunidade ativa;

- Utilizado mundialmente;

- <img title="" src="file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/9cc0e91e-1aba-401b-8973-531bec7a5192.png" alt="9cc0e91e-1aba-401b-8973-531bec7a5192" data-align="inline" style="zoom:25%;">Mascote "Octocat"

## Breve histórico do GitHub

*2008*

Desenvolvido por Chris Wanstrath, J. Hyett, Tom Preston-Werner eScott Chacon.

**2018**

Vítima de um dos maiores ataques de DDoS (ataque distribuído de negação de serviço);

Comprado pela Microsoft Corporation porUS $ 7,5 bilhões.

# Autenticação de Dois Fatores

Acesse sua conta do GitHub e vá em Settings > Password and authentication > Two-factor authentication > Authenticator app

1. Leia o QR Code através do aplicativo autenticador (ex.: Microsoft Authenticator) e insira o código no GitHub;

2. Leia o QR Code através do aplicativo autenticador (ex.: Microsoft Authenticator) e insira o código no GitHub;

3. Autenticação ativada! ;D

## Instalação,Configuração e Autenticação

Instalando e configurando o Git, e autenticando o GitHub via Token e Chave SSH

## Instalando o Git no Windows

1. Acesse < [Git - Downloading Package](https://git-scm.com/download/win) >;

2. Faça o download do instalador eexecute;

3. Aceite a licença e clique em“Next”, e siga configurando como desejar¹ e clicando em “Next”;

4. Finalize clicando em “Install”, e “Finish”.

## Configurando o Git

1. Configurandoseu nome de usuário e e-mail (globalmente):
   ` $ git config --global user.name "Nome Sobrenome"
   $ git config --global user.email seuemail@email.com   `

2. Configurandoo nome da Branch Padrão:
   `
   $git config --global init.defaultBranch main
   `

## Autenticando via Token

Paragerar um Token, acesse sua conta no GitHub, e no menu superior direito cliqueem Settings > Developer settings > Tokens (classic) > Generate new token.

![1f4fa830-d581-492f-a2c1-c31a7636c2a8](file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/1f4fa830-d581-492f-a2c1-c31a7636c2a8.png)

## Armazenando Credenciais

Você pode armazenar suas credenciais para reduzir o número de vezes quevocê deve digitar seu nome de usuário ou senha:

**Salvandono cache:**

` $ git config --global credential.helper cache`

**Oupermanentemente:**

` $ git config --global credential.helper store`

## Autenticando via Chave SSH

Paraadicionar uma Chave SSH, acesse sua conta no GitHub, e no menu superior direitoclique em Settings > SSH and GPG keys > New SSH key.

![e77c520d-bc60-43ee-94f7-b6dd85d113a5](file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/e77c520d-bc60-43ee-94f7-b6dd85d113a5.png)

# PrimeirosPassos com Git eGitHub

## Criando e Clonando Repositórios

Existemduas formas de obter um repositório Git na sua máquina:

1. Transformandoum diretório local que não está sob controle de versão, num repositório Git;

2. Clonandoum repositório Git existente.

## Criando um Repositório Local

Acessea pasta que deseja transformar em um repositório Git  pelo terminal ou clique no atalho em “Git Bash Here”:

1. Inicializeum repositório Git no diretório escolhido:
   ` $ git init`

2. Conecteo repositório local com o repositório remoto:
   ` $ git remote add origin https://github.com/username/nome-do-repositorio.git`

## Clonando um Repositório

Paraclonar um repositório no Git, acesse seu repositório no GitHub e siga os próximos passos:

1. Em “Code”, copie o código HTTPS ou SSH (a depender de como autenticousua conta) do repositório no GitHub;

2. Abrao GitBash, insira o comando git clone e cole o conteúdo copiado para cloná-lo:
   ` $ git clone https://github.com/username/nome-do-repositorio `

## Criando um Repositório Remoto

Acessea sua conta do GitHub, clique no “+” no canto superior direito, e em “New repository”:

1. Insira um nome (obrigatório), e a descrição (opcional);

2. Coloqueuma breve descrição sobre o projeto, essa etapa é opcional;

3. Definase o acesso será público ou privado;

## Salvando Alterações no Repositório Local

Como criar um commit:

1. Adicioneo conteúdo que deseja inserir no commit:
   ` $ git add`

2. Crieum commit e adicione uma mensagem descritiva:
   ` $git commit -m "message"  `
   
   

## Desfazendo Alterações no Repositório Local

1. Como alterar a mensagem do último commit:
   ` $ git commit --amend` 

2. Alterandoa mensagem sem abrir o editor:
   ` $ git commit --amend –m"nova mensagem"`

## Desfazendo Alterações no Repositório Local

Como desfazer um commit:

- ` $ git reset`

- `$ git reset --soft ` 

- `$ git reset --mixed `

- `$ git reset --hard`

## Enviando Alterações para o Repositório Remoto

Como enviar as alterações do repositório local para o remoto:

`$ git push`

“Puxar”as alterações do repositório remoto para o local (busca e mescla).

`$ git pull`



## Trabalhando com Branches

![a5f82d92-c320-4db9-bc1a-e1152de8bb2c](file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/a5f82d92-c320-4db9-bc1a-e1152de8bb2c.png)![2a668411-d44d-473c-8bf0-ca052cd400db](file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/2a668411-d44d-473c-8bf0-ca052cd400db.png)![603b8150-1eac-41f0-a520-518e24b91a63](file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/603b8150-1eac-41f0-a520-518e24b91a63.png)

![02d0e18e-b0a9-40d6-a9d9-eef8dff10329](file:///C:/Users/elyss/OneDrive%20-%20BRQ/Imagens/Typedown/02d0e18e-b0a9-40d6-a9d9-eef8dff10329.png)

Demaneira simplista, uma Branch (em tradução, “Ramo”), é uma ramificaçãodo seu projeto.

- É um ponteiro móvel para um commit no histórico do repositório;

- Quando você cria uma nova Branch a partir de outra existente, a nova se inicia apontando para o mesmo commit da Branch que estava quando foi criada.

`$ git branch`

- Trocar de Branch e criar uma nova:
  `$ git checkout -b nova-branch`

- Deletar uma Branch
  `$ git branch –d nome-da-branch`

- Ver o último commit de cada Branch:
  `$ git branch -v`
  
  
  
  

# Materiais Complementares

Esse material tem como objetivo apresentar informações para facilitar e enriquecer a jornada de aprendizado. 

### Repositório Git

O Git é um conceito essencial no mercado de trabalho atualmente, por isso sua importância. Para consultar o [material original](https://github.com/elidianaandrade/dio-curso-git-github)

### Slides

[Versionamento de Código com Git e GitHub.pptx](https://academiapme-my.sharepoint.com/:p:/g/personal/renato_dio_me/EYjkgVZuUv5HsVgJUEPv1_oB_QWs8MFBY_PBQ2UAtLqucg?rtime=O46BOIZn3Eg)

# Documentação

- [Git]([https://git-scm.com/](https://git-scm.com/)
- [Git - Credential Storage](https://git-scm.com/book/pt-br/v2/Git-Tools-Credential-Storage)
- [GitHub](https://docs.github.com/)
  
  

## Para saber mais

● [Tech Talk: Linus Torvalds on git - YouTube](https://youtu.be/4XpnKHJAok8)

● [Git - Book](https://git-scm.com/book/en/v2)

●  [Como escrever no GitHub - GitHub Docs](https://docs.github.com/pt/get-started/writing-on-github)

●  [Conventional Commits](https://github.com/conventional-commits/conventionalcommits.org)

● [https://desktop.github.com/](https://desktop.github.com/)

● [Getting started with GitHub Pages - GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages)

● [https://myoctocat.com/](https://myoctocat.com/)

● [https://gitfluence.com/](https://gitfluence.com/)

●[https://desktop.github.com/](https://desktop.github.com/)

●[Chocolatey Software | Git 2.44.0](https://community.chocolatey.org/packages/git)











### Dicas/Links Úteis

Links úteis para desenvolver ainda mais através de referências oficiais das tecnologias, páginas de documentação e/ou fóruns de discussão relevantes. 

- [Blog GitHub](https://github.blog/)

- https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/

- https://github.blog/2018-03-01-ddos-incident-report/

- https://news.microsoft.com/2018/06/04/microsoft-to-acquire-github-for-7-5-billion/

- https://github.blog/2023-03-09-raising-the-bar-for-software-security-github-2fa-begins-march-13/- 
  
  

  **Artigos/Fórum:** você pode compartilhar conteúdos técnicos através de Artigos (visíveis globalmente na plataforma da DIO). Por outro lado, você também pode compartilhar suas conquistas e dúvidas usando os Fóruns (que são específicos para cada experiência educacional na DIO, como um Bootcamp por exemplo);

- **Rooms:** caso você esteja inscrito(a) em uma experiência educacional na DIO (como um Bootcamp, por exemplo) você terá acesso ao Rooms. O Rooms é uma ferramenta de bate-papo em tempo real onde todos os inscritos podem interagir, compartilhando dúvidas e dicas (que podem conter imagens e snippets de código-fonte);

- **Pesquise na Web:** pode parecer óbvio, mas é importante frisar a importância das engines de busca no dia-a-dia de um profissional de TI. Caso não encontre o que procura dentro da DIO, pesquise sobre o assunto (conceito, dúvida, erro etc) na Internet (dê um Google), pois na maioria das vezes você será levado à páginas incríveis como o [StackOverflow](https://stackoverflow.com/) que salvarão o seu dia 😎






