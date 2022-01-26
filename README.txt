Instruções de utilização do código

1. Instalar packages do projeto: 
npm i

2. Colocar a base de dados na última versão:
npx db-migrate up
npm run migrate-up

3. Importar dados para a base de dados:
node importCSV (É necessário obter a dataset de Pokémons do Kaggle: kaggle.com/abcsds/pokemon)

4. Correr aplicação:
npm start
npm run watch (Irá reinicializar tanto o servidor, como o Swagger, a cada alteração no código detetado)