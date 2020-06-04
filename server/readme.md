**Rota**: Endereço completo da requisição
**Recurso**: Qual entidade estamos acessando do sistema

**GET**: Buscar um ou mais informações do back-end
**POST**: Criar uma nova informação no back-end
**PUT**: Atualizar uma informação existente no back-end
**DELETE**: Remover uma informação do back-end

**POST** http://localhost:3333/users -> Cria um usuário
**GET** http://localhost:3333/users -> Listar usuários
**GET** http://localhost:3333/users/5 -> Buscar dados de usuário com ID 5

**Request param**: Parãmetros que vem da própria rota que identifica um recurso
**Query param**: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
**request Body**: Corpo com os dados para atualização e ou criação.

Select * From users Where name = 'Ricardo' ;
knex("users").where("name", "Diego").select("*") ;
