# INSTRUCCIONES

1. Se debe crear un archivo _.env_ a partir de _.env.example_
2. Para levantar la base de datos: `docker-compose up -d`
3. Para correr las migraciones: `npx sequelize-cli db:migrate`
4. Para correr los seeds: `npx sequelize-cli db:seed:all`
5. Para correr los requests se cuenta con una colección en _.vscode/thunder/collections/thunder-collection_js-live-assestment.json_ donde ya hay requests predefinidos para cada CRUD.

Para importar la colección se debe hacer con la extensión Thunder Client para VSCode: https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client

## Construído con:

1. NodeJS
2. ExpressJS
3. Sequelize
4. Docker
