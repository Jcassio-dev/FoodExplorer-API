<p align="center">
 <a href="#Description">Descrição</a> •
 <a href="#Features">características</a> • 
 <a href="#Technologies">Tecnologias</a> •
 <a href="#How to use">Como usar</a> •
 <a href="#Software">Software</a> 
</p>

 # API -  FoodExplorer

#### Response Format:
```bash
JSON
```
#### Database:
```bash
SQLite
```

## Methods:


#### Users
```bash
PUT - EndPoint/users/:id - Atualiza as informações de um usuário
```
```bash
POST - EndPoint/users - Cria um usuário
```

#### Foods
```bash
GET - EndPoint/foods/:id - Retorna uma comida específica da tabela foods
```
```bash
GET - EndPoint/foods- Retorna todas as comidas da tabela
```
```bash
POST - EndPoint/foods - Cria uma comida na tabela
```
```bash
PUT - EndPoint/foods/:id - Atualiza informações da comida
```
```bash
PATCH - EndPoint/foods/avatar/:id - Atualiza a imagem da comida
```
```bash
DELETE - EndPoint/foods/:id - Deleta a comida da tabela
```

#### Ingredients
```bash
GET - EndPoint/ingredients/ - Mostra os ingredientes que existem.
```



<div id="Description">

## Descrição

API desenvolvida para o aplicativo FoodExplorer, aplicativo de e-commerce para restaurantes.

</div> 

<div id="Characteristics">

## Caracteristicas:
- NodeJS;
- Database Manipulation;
- HTTP (Routes and Methods);
- Routes & request params;


</div>
<div id="Technologies">

## Tecnologias:

- Languages: `javascript`
- Libraries: `node` `express` `express-async-errors` `knex` `pm2` `sqlite` `sqlite3` `path` `cors`
- Version control: `Git & Github`

</div>
<div id="How to use">

## Como usar localmente:

#### Clone esse repositório

```bash
$ git clone https://github.com/Jcassio-dev/FoodExplorer-API.git
```

#### Acesse a pasta do projeto no terminal/cmd

```bash
$ cd /FoodExplorer-API
```

#### Instale as dependências

```bash
$ npm install
```

#### Execute a aplicação no modo de desenvolvimento

```bash
$ npm run dev
```
#### O server será iniciado - Vá até a porta informada
```bash
localhost:port
```
</div>
<div id="Software">

## Software

VSCode
</div>
