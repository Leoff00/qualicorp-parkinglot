# Car flow - Backend - Node + Express + TypeScript + Neo4J

Projeto desenvolvido para o desafio da QualiCorp com as devidas e respectivas demandas

### Screenshot: 
#
### Tecnologias: 
- [Typescript](https://www.typescriptlang.org)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Neo4J](https://neo4j.com)
#

Este é um projeto usando SPA (Single Page Application) em Vue + Vuetify + Vite.

### Inicializando o projeto
Para executar o projeto em ambiente de desenvolvimento digite:

```js
npm run dev
```
para buildar para produção:
```js
npm run build
```
para usar o linter configurado
```js
npm run lint
```
#

### Endpoints: 

```
/find
```
Este endpoint retorna todos os usuários/carros salvos no banco de dados.

```
/save
```
Este endpoint salva todos os usuários/carros no banco de dados.

```
/update/:user_id
```
Este endpoint atualiza os 3 campos (nome, sobrenome e horário de saída) do usário com o id do usuário como parâmetro.

```
/delete/:user_id
```
Este endpoint delete completamente os dados de um usuário/carro.

#

### Feedbacks de implementação:

Por ja estar habituado com o desenvolvimento de aplicações back-end meu maior desafio foi entender o Neo4J Aura DB, o banco de dados em grafo. Eu nunca tinha visto algo relacionado então tive um pouco de dificuldade para entender seus casos de uso para poder implementar na minha aplicação.

Depois de algumas horas lendo documentação e videos consegui implementar minhas query's pela CYPHER LANGUAGE, linguagem que é utilizada para fazer queries a esse banco de dados especificamente. Apesar dele ter uma latência maior com escritas, consegui implementar da forma que queria a aplicação.
#

### Disclaimers: 

- As queries estão em uma variavel de ambiente a parte para evitar **SQL Injection**.

- Tive algumas duvidas na hora de implementar a conexão com o banco de dados então separei os arquivos de uma forma que fique organizada.
#

### Variaveis de ambiente:
- DB_USER= nome do usuario para conexão com o banco.
- DB_PWD= senha do usuário para a conexão com o banco.
- DB_URL= URL da instância do banco.
- QUERY_FIND_CARS= Query de leitura dos nodes criados.
- QUERY_SAVE_CARS= Query de escrita para nodes criados.
- QUERY_UPDATE_CARS= Query de atualização para nodes existentes.
- QUERY_DELETE_CARS= Query para deletar nodes existentes.
#

### <center>Desenvolvido por Leonardo Ferreira - Desafio QualiCorp - 2022</center>

