# API POKEMONS JAZIDA

A API POKEMONS JAZIDA é uma aplicação que permite o gerenciamento de pokemons específicos, bem como a batalha entre eles;

## Tecnologias Utilizadas

A API foi desenvolvida utilizando as seguintes tecnologias:

- Node.js com Express para criação do servidor e definição de rotas;
- Docker para a criação de contêineres do banco de dados PostgreSQL e também rodar a aplicação dentro de um container Node.js;
- Prisma ORM para gerar migrations e conexão com banco de dados;
- Vitest para execução de testes unitários;

## Como Baixar e Rodar o Projeto Localmente?

Siga os passos abaixo para baixar e executar o projeto em seu ambiente local:

1. Clone o repositório do projeto para o seu ambiente local:

```
    git clone https://github.com/leorjr/api_pokemons
```

2. Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis necessárias para o funcionamento do projeto;

3. Verifique se você tem o Docker e o Docker Compose instalados em sua máquina. Se não estiverem instalados, siga as instruções de instalação nos sites oficiais do Docker e Docker Compose.

4. Abra um terminal e inicialize a aplicação com o seguinte comando:

```
    docker-compose up --build
```

Após seguir esses passos, sua aplicação estará rodando em sua máquina local, no endereço ao qual aparece em seu terminal e estará pronta para receber requisições (provavelmente, http://localhost:3000);

## ENDPOINTS

A seguir, são apresentados exemplos de endpoints da API e seus retornos:

### Cadastrar um Pokemon

- **Endpoint:** `/pokemons`
- **Método:** POST
- **Corpo da Requisição (JSON):**

```json
{
  "tipo": "string", // aqui, só poderá ser escolhido charizard, mewtwo ou pikachu
  "treinador": "string" // minimo de 3 caracteres
}
```

- **Status Code: 200**
- **Ex. Resposta (JSON):**

```json
{
  "id": 1,
  "tipo": "charizard",
  "treinador": "leo",
  "nivel": 1
}
```

- **Status Code: 404**
- **Ex. Resposta (JSON):**

```json
//  em caso de ser passado treinador vazio ou com menos de 3 caracteres
{
	"success": false,
	"status": 404,
	"message": "treinador precisa ter, ao menos, 3 caracteres"
}
```

```json
//  em caso de ser passado um pokemon diferente dos tipos pré-estabelecidos "charizard", "mewtwo" ou "pikachu"
{
	"success": false,
	"status": 404,
	"message": "tipo só pode ser charizard | mewtwo | pikachu"
}
```

### Listar todos os Pokemons cadastrados:

- **Endpoint:** `/pokemons`
- **Método:** GET
- **Parâmetros da URL:** Nenhum
- **Corpo da Requisição (JSON):**

```json
    sem corpo
```

- **Status Code: 200**
- **Ex. Resposta (JSON):**

```json
[
  {
    "id": 1,
    "tipo": "charizard",
    "treinador": "leo",
    "nivel": 1
    }
]
```

### Buscar um pokemon pelo id:

- **Endpoint:** `/pokemons/:id`
- **Método:** GET
- **Parâmetros da URL:** id do pokemon
- **Corpo da Requisição (JSON):**

```json
    sem corpo
```

- **Status Code: 200**
- **Ex. Resposta (JSON):**

```json

{
    "id": 1,
    "tipo": "charizard",
    "treinador": "leo",
    "nivel": 1
}

```

- **Status Code: 404**
- **Ex. Resposta (JSON):**

```json
//  em caso de ser passado um pokemon com id não existente no banco de dados    
{
	"success": false,
	"status": 404,
	"message": "pokemon id not found!"
}
```


### Atualizar um Pokemon:

- **Endpoint:** `/pokemons/:id`
- **Método:** PUT
- **Parâmetros da URL:** id do pokemon
- **Corpo da Requisição (JSON):**

```json
{
  "treinador": "novo treinador",
}
```

- **Status Code: 204**
- **Ex. Resposta (JSON):**


```json
sem corpo
```

- **Status Code: 404**
- **Ex. Resposta (JSON):**

```json
//  em caso de ser passado um pokemon com id não existente no banco de dados    
{
	"success": false,
	"status": 404,
	"message": "pokemon id not found!"
}
```
```json
//  em caso de ser passado treinador vazio ou com menos de 3 caracteres
{
	"success": false,
	"status": 404,
	"message": "treinador precisa ter, ao menos, 3 caracteres"
}
```


### Deletar um Pokemon:

- **Endpoint:** `/pokemons/:id`
- **Método:** DELETE
- **Parâmetros da URL:** id do pokemon
- **Corpo da Requisição (JSON):**

```json
sem corpo
```

- **Status Code: 204**
- **Ex. Resposta (JSON):**

```json
sem corpo
```

- **Status Code: 404**
- **Ex. Resposta (JSON):**

```json
//  em caso de ser passado um pokemon com id não existente no banco de dados    
{
	"success": false,
	"status": 404,
	"message": "pokemon id not found!"
}
```

### Realizar batalha entre pokemons

- **Endpoint:** `/pokemons/:idPokemonA/:idPokemonB`
- **Método:** POST
- **Parâmetros da URL:** idPokemonA (id de um pokemon qualquer) | idPokemonB (id de um pokemon qualquer)
- **Corpo da Requisição (JSON):**

```json
sem corpo
```

- **Status Code: 200**
- **Ex. Resposta (JSON):**

```json
{
	"vencedor": {
		"id": 9,
		"tipo": "pikachu",
		"treinador": "ash",
		"nivel": 3
	},
	"perdedor": {
		"id": 10,
		"tipo": "charizard",
		"treinador": "brok",
		"nivel": 0
	}
}
```

- **Status Code: 404**
- **Ex. Resposta (JSON):**

```json
//  em caso de ser passado um pokemon não cadastrado no banco de dados
{
	"success": false,
	"status": 404,
	"message": "pokemon id 9 not found!"
}
```

```json
//  em caso de serem passados dois ids iguais"
{
	"success": false,
	"status": 404,
	"message": "You need to pass two differents ids"
}
```

### Testes

Para os rodar os testes que foram implementados, os mesmos devem ser feitos fora do container docker. Logo, será necessário instalar as dependencias do projeto em sua própria máquina. Siga os passos:

1. Dentro do diretório do projeto, rode o seguinte comando, ao qual instalará todas as dependencias do projeto:

```
  npm i
```

2. Feito isso, você já poderá executar os testes com o seguinte comando:

```
  npm run test
```
