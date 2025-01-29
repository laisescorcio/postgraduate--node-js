# postgraduate--node-js

## To init the application
In your terminal:
- Run `npm init -y` -- it will create the package.json
- Run `npm run dev` to build the application -- it will watch all updates in code


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


- HTTP
    - método http
    - URL


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

