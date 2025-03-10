# 📡 Arquitetura de Aplicações REST com Spring Web: Expondo Endpoints REST
## 🚀 O que são Endpoints?
Os endpoints são pontos de acesso em um sistema. Eles são URLs (endereços de rede) disponíveis para interagir com recursos, como buscar produtos, salvar novos ou atualizar os existentes. Cada endpoint é uma extremidade ou ponto de acesso dentro de uma aplicação, permitindo comunicação entre sistemas ou entre o cliente e o servidor.

# 🔑 Definindo o que é API
Uma API (Interface de Programação de Aplicações) é como um conjunto de regras que permite que dois sistemas diferentes se comuniquem. Para ilustrar, podemos dizer que a API é como um menu de restaurante, onde você escolhe as opções (funcionalidades) e a API entrega a resposta (resultado) do que você pediu. A API REST permite que sistemas interajam usando métodos como GET, POST, PUT e DELETE.

# 💻 Como Criar e Expor um Endpoint no Spring Web
Agora, vamos aprender como criar um endpoint usando Spring Web! 🌱

# 🛠️ Passos Iniciais
Primeiro, precisamos ter uma classe de Produto e um repositório para manipular os dados no banco. A classe Produto vai representar o que queremos cadastrar, buscar ou atualizar.

# 📁 Estrutura do Projeto
Para este exemplo, vamos criar:

***Produto (Classe):*** Definindo os atributos como nome, preço e descrição.
***Repositório (Interface):*** Interação com o banco de dados.
***Serviço (Classe):*** A lógica de negócio que vai salvar, buscar ou atualizar os produtos.
Controlador (Classe de Controle): A classe que vai expor os endpoints REST.
## 🧑‍💻 Criando o Controlador de Produtos
Vamos criar a classe ProdutoController, que será responsável por expor os endpoints REST que permitem interagir com os produtos.


> @RestController
> @RequestMapping("/produto")
> public class ProdutoController {
>    @Autowired
    private ProdutoService produtoService;
    // Endpoint para salvar um produto
    @PostMapping
    public Produto salvarProduto(@RequestBody Produto produto) {
        return produtoService.salvar(produto);
    }
}


Aqui, utilizamos a anotação @RestController para indicar que esta classe vai ser um controlador REST e a anotação @RequestMapping para definir a URL base para os nossos endpoints, no caso, /produto.

## 🧳 Expondo um Método de Salvar
A ideia é criar um endpoint POST para salvar um produto:


> @PostMapping
public Produto salvarProduto(@RequestBody Produto produto) {
    return produtoService.salvar(produto);
}
Esse método usa a anotação @PostMapping para mapear as requisições POST e o @RequestBody para indicar que o corpo da requisição vai conter os dados do produto.

## 🔄 Atualizando e Buscando Produtos
Além de salvar produtos, também podemos criar endpoints para buscar e atualizar os produtos.

## 🧰 Endpoint para Buscar Todos os Produtos

> @GetMapping
public List<Produto> listarProdutos() {
    return produtoService.listar();
}

Aqui, usamos ***@GetMapping*** para indicar que esse método vai lidar com requisições GET. Ele vai retornar todos os produtos da base de dados.

## 🛠️ Endpoint para Atualizar um Produto

> @PutMapping("/{id}")
public Produto atualizarProduto(@PathVariable Long id, @RequestBody Produto produto) {
    return produtoService.atualizar(id, produto);
}

Para atualizar, usamos @PutMapping e @PathVariable para capturar o ID do produto que será atualizado.

## ⚙️ Injeção de Dependência: Conectando Tudo
Agora, precisamos garantir que o ProdutoController consiga acessar a lógica de negócio que está no ProdutoService. Para isso, usamos a injeção de dependência.


***@Autowired***
private ProdutoService produtoService;
A anotação **@Autowired** garante que o ProdutoService seja automaticamente injetado no ProdutoController, fazendo com que ele consiga acessar os métodos de lógica de negócio.

## 📲 Conclusão
Nós acabamos de aprender como criar e expor endpoints REST no Spring Web. 
### 🛠️ Os principais pontos que vimos foram:

**Endpoints** são URLs que permitem interagir com os dados de uma aplicação.
**API REST** é um conjunto de regras para interação entre sistemas.
Usamos Spring Web para criar controladores e serviços que lidam com requisições HTTP.
**POST, GET, e PUT** são os métodos HTTP para salvar, buscar e atualizar dados, respectivamente.
A partir daqui, você pode começar a criar APIs para interagir com os seus próprios dados, seja para criar, ler, atualizar ou deletar recursos!