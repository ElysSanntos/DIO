# 🎓 Curso: Potencializando Seus Estudos e Carreira com IA (Chatbots, Copilotos e Agentes)
> **Disciplina:** Potencializando Seus Estudos e Carreira com IA (Chatbots, Copilotos e Agentes)  
> **Objetivo:** Compreender a evolução das ferramentas de Inteligência Artificial Generativa sob a perspectiva de autonomia, contexto e aplicação prática no ambiente local.

---

## 🌟 1. Introdução à Jornada da IA
O ecossistema de inteligência artificial generativa evolui com rapidez. Mais do que decorar nomes de ferramentas, o segredo do sucesso profissional é dominar os **conceitos estruturais** por trás de cada nível de interação com as IAs. 

A jornada se divide em uma progressão clara de **autonomia e contexto**, composta por três categorias de interação:

```
[Chatbots: O Consultor] ➔ [Copilotos: O Colega] ➔ [Agentes: O Delegado]
   (Menor Autonomia)                                  (Maior Autonomia)
```

---

## 📊 2. Tabela Comparativa: Chatbots vs. Copilotos vs. Agentes

| Critério | 💬 Chatbots (Nível 1) | 🤝 Copilotos (Nível 2) | 🤖 Agentes (Nível 3) |
| :--- | :--- | :--- | :--- |
| **Metáfora Didática** | Um **Consultor Especialista** que você procura para tirar dúvidas pontuais. | Um **Colega de Trabalho** sentado ao seu lado sugerindo melhorias em tempo real. | Um **Funcionário de Confiança** a quem você delega uma tarefa complexa de ponta a ponta. |
| **Escopo de Contexto** | Apenas as mensagens digitadas por você dentro da janela do chat. | O arquivo ativo ou ambiente que você está usando (IDE, Doc, Planilha, Gmail). | Toda a pasta de trabalho (workspace), arquivos do sistema local, terminal e internet. |
| **Autonomia** | Baixa. Responde estritamente ao que você pergunta e não altera seu ambiente. | Média. Sugere e completa ações enquanto você trabalha ativamente. | Alta. Toma decisões, gera planos de execução, cria/deleta arquivos e roda comandos. |
| **Ambiente de Execução** | Geralmente isolado em uma aba web (ex: ChatGPT, Claude.ai). | Integrado como extensão do software principal (ex: Copilot na IDE, Gemini no Docs). | Executado diretamente na máquina local com acesso ao sistema operacional (ex: Antigravity). |

---

## 🔍 3. Detalhamento Conceitual

### 💬 Nível 1: Chatbots (O Consultor)
O chatbot responde perguntas sob demanda. A qualidade da resposta depende 100% da clareza e riqueza do seu **prompt**. 
* **Limitação:** Ele não conhece o seu contexto pessoal. Se você não fornecer as informações detalhadamente no prompt, a resposta será genérica.
* **Exemplos comuns:** ChatGPT, Claude.ai, Gemini Web.

### 🤝 Nível 2: Copilotos (O Colega de Trabalho)
Diferente do chatbot, o copiloto acompanha o seu trabalho em tempo real. Ele "enxerga" o que você está escrevendo ou codificando e oferece sugestões contextuais antes mesmo de você perguntar.
* **Exemplo no Gmail/Google Docs:** Você começa a digitar um e-mail informal e o copiloto Gemini sugere o autocompletar de frases. Ao selecionar um texto e clicar em "Ajude-me a escrever", ele pode ler seus e-mails anteriores e arquivos do Google Drive para formatar a resposta no seu estilo corporativo.
* **Exemplo de Desenvolvimento (VS Code):** Você escreve um comentário de código (ex: `# Criar duas variáveis e somar`) e o copiloto de código (como o GitHub Copilot) autocompleta toda a estrutura de código em Python ou Java.

### 🤖 Nível 3: Agentes (O Delegado Autônomo)
Os agentes representam o auge atual do desenvolvimento de IAs. Eles não apenas sugerem ou respondem, mas **executam planos de ação de forma independente** a partir de uma meta ampla dada pelo usuário.
* **Como pensam:** Integrados com Grandes Modelos de Linguagem (LLMs), os agentes possuem uma capacidade de raciocínio lógico em loop. Eles analisam o pedido, elaboram um plano, executam os passos, avaliam se o resultado ficou bom (auto-revisão interna) e corrigem a rota se der erro.
* **Acesso local:** Os agentes funcionam no seu próprio computador. Eles têm a permissão (sob sua aprovação prévia) de criar arquivos físicos, ler documentos, instalar dependências, abrir navegadores da web e rodar comandos no terminal (PowerShell/Bash).

---

## 🛠️ 4. Tutorial Prático: Google Antigravity no Computador

O **Google Antigravity** é uma plataforma que encapsula o conceito de agente autônomo. Veja três tutoriais práticos demonstrando o poder desse agente local:

### 📑 Tutorial 1: Materialização de Workspace a partir de Planos
* **Cenário:** Você tem um arquivo com o seu plano de estudos em formato PDF ou Markdown. Você quer criar toda a estrutura física de arquivos para iniciar os estudos.
* **Passo a Passo:**
  1. Crie uma pasta vazia em seu computador (Ex: `potencializando-estudos-ia`).
  2. Insira o documento de referência (Ex: `plano-estudos.pdf`) dentro dessa pasta.
  3. Abra o **Google Antigravity** e aponte o workspace para esta pasta (`Open Folder`).
  4. Insira o seguinte prompt no chat do agente:
     ```text
     Analise o documento PDF nesta pasta. Materialize esse plano de estudos aqui, criando:
     1. README.md com o resumo do plano.
     2. cronograma.md com o roteiro de semanas.
     3. Uma pasta chamada "anotacoes" contendo um arquivo de template "semana-01.md".
     4. recursos.md com links de materiais recomendados.
     ```
  5. O agente irá ler o PDF, montar um plano de tarefas interno e criar fisicamente todos os arquivos solicitados na sua pasta. Ele pedirá a sua aprovação final (`Accept / Reject`) para persistir as alterações na máquina.

---

### 📷 Tutorial 2: Automação e Organização de Arquivos com PowerShell
* **Cenário:** Você tem uma pasta com centenas de capturas de tela desorganizadas (screenshots) e quer organizá-las em subpastas com base nas datas em que foram criadas.
* **Passo a Passo:**
  1. Abra a pasta contendo as imagens desorganizadas dentro do Agente Antigravity.
  2. No painel de controle, digite o seguinte comando em linguagem natural:
     ```text
     Organize todos os screenshots desta pasta em subpastas divididas por data de criação do arquivo.
     ```
  3. O agente analisará o formato dos arquivos e preparará um script do PowerShell (como `organizar.ps1`).
  4. O agente solicitará sua permissão de segurança para rodar o comando PowerShell na sua máquina.
  5. Após você autorizar, ele executará o script, criará as pastas por data (Ex: `2026-06-21`) e moverá as imagens.
  6. Para manter seu sistema limpo, o agente pedirá autorização para deletar o script `.ps1` temporário que ele mesmo criou após o sucesso da operação.

---

### 🌐 Tutorial 3: Navegação Web e Geração de Checklists Locais
* **Cenário:** Você encontrou um artigo técnico extenso em uma página web e deseja extrair as regras principais em um checklist estruturado em markdown no seu computador.
* **Passo a Passo:**
  1. No canto superior do agente, selecione a opção `Open Browser` (Navegador Integrado).
  2. Acesse a URL do artigo (Ex: Um post da DIO sobre mitigação de custos AWS).
  3. Com a aba ativa no browser do agente, envie o prompt no chat:
     ```text
     Li este artigo técnico aberto no navegador, mas gostaria de um checklist em formato markdown 
     salvo localmente no meu workspace para eu monitorar estes custos passo a passo.
     ```
  4. O agente extrairá o conteúdo em tempo real da aba do navegador, processará as informações e gravará o arquivo markdown local formatado com caixas de seleção `- [ ]`.

---

## 🔗 5. Materiais de Referência e Alternativas de Mercado

Para continuar seus estudos teóricos e práticos de agentes e copilotos, consulte os recursos oficiais abaixo:

* 📖 **Conceito de Agentes:** [Documentação de Conceitos do Claude Code (Anthropic)](https://code.claude.com/docs)
* 🐳 **Plataforma de Desenvolvimento:** [Extensões e Copilotos do VS Code](https://code.visualstudio.com/docs/editor/artificial-intelligence)
* 📖 **Repositório do Curso:** [DIO - Potencializando Estudos com IA](https://github.com/digitalinnovationone/potencializando-estudos-carreira-com-ia)
* 🛠️ **Alternativas Open-Source de Agentes Locais:** [Ollama - Para rodar LLMs locais](https://ollama.com/) e interagir com agentes locais.
