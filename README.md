# Instruções de utilização do código de demonstração

## Base de Dados com Docker

- Instalar base de dados PostgreSQL. A base de dados criada tem como url **localhost:5432**, o username é **sd** e a password é **sd**. Poderão usar ferramentas como o [Datagrip](https://www.jetbrains.com/datagrip), [DBeaver](https://dbeaver.io/) ou [pgAdmin](https://www.pgadmin.org/) para aceder diretamente à base de dados.
> docker run --name sd-db -p 5432:5432 -e POSTGRES_PASSWORD=sd -e POSTGRES_USER=sd -e POSTGRES_DB=sd -d postgres

- Para desligar a base de dados
> docker stop sd-db

- Recomeçar a base de dados
> docker start sd-db

- Apagar a base de dados, removendo o container do Docker. **Atenção:** Todos os dados serão apagados.
> docker rm sd-db

## Servidor Node.js com Docker

- Instalar imagem de servidor e/ou atualizar o código
> docker build . -t sd-app-image

- Iniciar o container
> docker run -p 8080:8080 -d --name sd-app sd-app-image

- Parar servidor
> docker stop sd-app

- Recomeçar servidor
> docker start sd-app

- Remover container
> docker rm sd-app

## Servidor Node.js sem Docker

- Instalar nodemon [permite reiniciar automaticamente o Node.js cada vez que fazem modificações no código]
> npm install -g nodemon

- Instalar packages em falta
> npm install

- Correr aplicação
> npm start

- Correr a aplicação em modo watch [fica à escuta de modificações, utilizando o nodemon]
> npm run watch

## Migrações base de dados

- Colocar a base de dados na última versão (assegurar que o npm install já foi executado)
> db-migrate up
- Nota: pode igualmente correr o comando
> npm run migrations

- Adicionar uma nova migração
> db-migrate create <nome_migratação>
- Nota: a migração será criada na pasta migrations

## Documentação Swagger

- Foi disponibilizado uma demonstração de como se pode realizar documentação Swagger. A documentação corre em interface Web e permite realizar testes sobre a api. Para correr o servidor swagger pode executar o comando abaixo:
> npm run documentation
- É também possível correr a documentação em modo _watch_ para com o nodemon
> npm run watchDocumentation