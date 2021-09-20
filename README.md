# CappacitaAPI_TMDB
Criando e consumindo API em JS.
Criando e consumindo API em JS.

Este projeto tem o objetivo de retornar filmes da API https://www.themoviedb.org/ e criar uma api para criar e retornar comentários sobre o site salvando no banco de dados MySQL.

Neste projeto foi usado axios, express, nodemon, fetch, body-parser, cors e knex.

Para rodar em sua máquina, entre na pasta database do projeto e no arquivo knex.js troque para as configurações do seu banco de dados. Em "client" coloque o seu banco, no meu caso estava utilizando o MySQL. Na "connection" coloque seu host e sua porta. (É possível ver seu host e porta dentro do seu banco de dados, mas normalmente é a mesma que a minha). Crie um banco de dados "comentarios" com a tabela "comentario" e suas respectivas colunas necessárias. Em caso de MySQL:

CREATE DATABASE comentarios; USE comentarios;

CREATE TABLE comentario( idComentario int AUTO_INCREMENT, 
nome varchar(30) NOT NULL, 
email varchar(100) NOT NULL, 
comentario varchar(255) NOT NULL,
create_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
PRIMARY KEY (IdComentario) );
Caso queira outro nome de database ou/e tabela, precisará mudar no knexfile.js a database para o nome da sua DATABASE e no database.js alterar onde estiver escrito 'comentario'
pela TABLE que criou. 

Depois de configurado basta utilizar os seguintes comandos no cmd dentro da pasta do projeto: npm i para instalar todas as dependencias e npm start e em paralelo npx lite-server para rodar o servidor e abrir em seu navegador.

Este projeto consome as rotas do themoviedb: discover - Método GET onde retorna uma lista de 20 filmes de diferentes tipos. top rated - Método GET onde retorna uma lista com os 20 melhores filmes do momento. movie_id - Método GET onde retorna o único filme que deseja com o parâmetro de ID do mesmo.

Ele também consome as rotas do banco de dados para salvar um novo comentário com método POST e para trazer para o front end com método GET.



