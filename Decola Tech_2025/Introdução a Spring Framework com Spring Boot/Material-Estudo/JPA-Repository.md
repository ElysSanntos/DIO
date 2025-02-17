🏗️ JPA Repository


🚀 Introdução


Nesta aula, vamos aprofundar nossos conhecimentos sobre o Spring Data JPA, explorando o poder do Repository Pattern, um dos padrões mais utilizados para abstração de acesso a dados.

🏛️ O que é o Repository Pattern?
O Repository Pattern é um padrão de projeto semelhante ao DAO (Data Access Object). Ele visa:

✅ Abstrair o acesso a dados de maneira genérica;
✅ Facilitar a reutilização de código em aplicações que necessitam de persistência;
✅ Reduzir a complexidade da implementação, fornecendo métodos prontos para CRUD.

Antes da existência do Spring Boot e Spring Data JPA, as aplicações utilizavam o padrão DAO, que exigia uma camada de abstração explícita. Com o Spring Data JPA, essa implementação é automatizada.

📌 Principais Interfaces do Repository Pattern
O Spring Data JPA facilita a implementação do Repository Pattern utilizando AOP (Aspect-Oriented Programming).
Agora, basta estender as interfaces disponíveis:

CrudRepository
JpaRepository
PagingAndSortingRepository
A grande vantagem é que essas interfaces já possuem métodos CRUD genéricos prontos, eliminando a necessidade de implementá-los manualmente.

🛠️ Métodos CRUD Disponíveis
Aqui estão alguns dos métodos mais comuns que podemos usar ao estender JpaRepository ou CrudRepository:

Método	Descrição
save(entity)	Insere ou atualiza um objeto no banco de dados.
findById(id)	Busca um objeto pelo seu ID.
existsById(id)	Verifica se um objeto existe no banco de dados.
findAll()	Retorna todos os registros de uma tabela.
delete(entity)	Remove um objeto do banco de dados.
count()	Retorna a quantidade de registros em uma tabela.
⚡ O Spring Data JPA injeta automaticamente a implementação desses métodos via AOP, sem necessidade de código adicional.

🔍 Consultas Customizadas
Nem sempre os métodos padrão são suficientes. Para consultas mais complexas, o Spring Data JPA oferece duas estratégias:

1️⃣ Query Methods
O Spring Data JPA interpreta a assinatura do método para gerar automaticamente uma query JPQL correspondente.

🔹 Exemplo de método para buscar usuários por e-mail e sobrenome:

java
Copiar
Editar
List<Usuario> findByEmailAndLastName(String email, String lastName);
💡 O Spring Data JPA entende que deve gerar automaticamente uma JPQL equivalente para essa consulta.

Aqui estão algumas palavras-chave suportadas:

Operador	Descrição
And	Conjunção lógica (WHERE campo1 = ? AND campo2 = ?)
Or	Disjunção lógica (WHERE campo1 = ? OR campo2 = ?)
Between	Filtra por um intervalo de valores
LessThan / GreaterThan	Operadores < e >
Like	Busca com LIKE no SQL
OrderBy	Ordenação dos resultados
📌 Consulte a documentação oficial para explorar mais opções.

2️⃣ Queries Personalizadas com @Query
Se um Query Method não for suficiente (por ser muito complexo ou conter muitos parâmetros), podemos utilizar JPQL diretamente através da anotação @Query.

📝 Exemplo: Buscar usuários cujo nome contenha determinada palavra
java
Copiar
Editar
@Query("SELECT u FROM Usuario u WHERE u.nome LIKE %:name%")
List<Usuario> filtrarPorNome(@Param("name") String name);
💡 Essa consulta equivale ao seguinte SQL:

sql
Copiar
Editar
SELECT * FROM usuario WHERE nome LIKE '%valor%';
Isso nos dá mais controle sobre a query sem depender de nomenclaturas fixas nos métodos.

🔥 Conclusão
O Spring Data JPA simplifica o acesso a dados por meio do Repository Pattern, eliminando código boilerplate e melhorando a produtividade.

💡 Dicas finais:
✔️ Prefira Query Methods sempre que possível para maior legibilidade.
✔️ Utilize @Query para consultas complexas.
✔️ Explore a documentação para aprender mais sobre JPQL e os operadores disponíveis.