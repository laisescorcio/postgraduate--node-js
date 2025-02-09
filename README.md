# postgraduate--node-js

## To init the application
In your terminal:
- Run `npm init -y` -- it will create the package.json
- Run `npm run dev` to build the application -- it will watch all updates in code
- Run `http localhost:3333` to run the request for this localhost 


## Good to know - Node JS Fundamentals
- server.js is the main file of the application;

- There are two ways of modularize and organize code in Node JS:
    1) CommonJS => original module in Node JS 
    In file: `const http = require('http')`
    2) ES Modules (ESM) - ECMAScript 2015 (ES6) => 
    In file: `import http from 'node:http'` -- in this case `node:` is for indicate native importations os Node JS
    In package.json: `"type": "module"`

- `server.listen(333)` listen the updates to the localhost:3333

- params in http.createServer:
    1) `req`: to access all the informations from where is calling the request
    2) `res`: to return a response for where is calling the server


- No HTTP há dois principais recursos:
    1) método HTTP (GET, POST, PUT, PATCH, DELETE)
        - GET => Buscar um recurso do backend
        - POST => Criar um recurso no backend
        - PUT => Atualizar um recurso no backend
        - PATCH => Atualizar uma informação específica de um recurso no backend
        - DELETE => Deletar um recurso do backend
    2) URL


- Há dois tipos de aplicações:
    - Stateful - depende dos estados armazenados para funcionar de determinada forma, ou seja, toda vez que o servidor restartar (ao buildar de novo por exemplo), todas as informações do servidor irão se perder; 
    - Stateless - não depende dos estados armazenados para funcionar de determinada forma, ou seja, é armazenado em banco de dados por exemplo.
    

- Cabeçalhos (requisição e resposta) são Metadados (.setHeader())
    - "Content-type": "application/json" => leva a informação como json

- Responses (requisição) são os retornos das chamadas do backend (.writeHead). Status code:
    - 100 - 199 => Informational responses
    - 200 - 299 => Successful responses
    - 300 - 399 => Redirection messages
    - 400 - 499 => Client error responses
    - 500 - 599 => Server error responses


- Streams:
    - Ler pequenas partes e poder trabalhar sobre os dados mesmo sem ser o dado por completo (analogia com Netflix, Spotify)


## Delving deeper into the subject

### Differences between CommonJS and ES Modules

Use CommonJS if:
- You are working on a legacy project that already uses CommonJS.
- Your project is exclusively backend-based and you need compatibility with older versions of Node.js.
- You need the synchronized loading or caching behavior of CommonJS.

Use ES modules if:
- You are developing a modern application that runs on both the backend and frontend.
- Your code needs to run in browsers without additional build tools.
- You are creating libraries that must be compatible with the future of JavaScript.

