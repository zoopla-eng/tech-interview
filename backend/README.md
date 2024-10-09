# Zoopla Backend Starter

This starter project gives you an express server with a "Hello World" type endpoint, and a simple (optional) database connection.  

It has been tested with Node 20.

Run `npm install` to install all the dependencies.

## Writing and running code
This codebase uses Typescript 5+ and ES Modules.

`npm start` will run the service with `ts-node-esm` in watch mode, with `--inspect` enable and a the `.env` file loaded.

## Writing tests
By default, `npm test` will look for and run tests with `ts-jest`. There's an example test in `app/index.spec.ts`

## Using a database (optional)

To use the built-in database connection, you'll need docker compose.
Run `docker compose up` to start a postgresql database locally on port 5432.
You'll also need to set the environment variable `DB_ENABLED=true` in the provided .env file. 

You can use `getDB` from `app/db/db.ts` to get a database connection from the pool.

The project runs a simple `seed` function on startup, found in `app/db/seed.ts` Here you can create tables, test data and so on if desired.
