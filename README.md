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


- In HTTP there are two main resources:
    1) HTTP method (GET, POST, PUT, PATCH, DELETE)
        - GET => Fetch a resource from the backend
        - POST => Create a resource in the backend
        - PUT => Update a resource in the backend
        - PATCH => Update specific information of a resource in the backend
        - DELETE => Delete a resource from the backend
    2) URL


- There are two types of applications:
    - Stateful - depends on stored states to function in a certain way, that is, every time the server restarts (when building again, for example), all server information will be lost;
    - Stateless - does not depend on stored states to function in a certain way, that is, it is stored in a database, for example.
    

- Headers (request and response) are Metadata (.setHeader())
    - "Content-type": "application/json" => takes the information as json   

- Responses (request) are the returns from the backend calls (.writeHead). Status code:
    - 100 - 199 => Informational responses
    - 200 - 299 => Successful responses
    - 300 - 399 => Redirection messages
    - 400 - 499 => Client error responses
    - 500 - 599 => Server error responses


- Streams:
    - Read small parts and be able to work on the data even if it is not the entire data (analogy with Netflix, Spotify). Common Streams:
    - *Readable Streams* 
    Data stream that can be read little by little. Example: reading a large file from disk, receiving data from an HTTP request, or reading data from a database.
        - _read() => required method "_read" on Readable. It return the datas of the Stream. It works delivering datas
    - *Writable Streams*
    Data stream that can be written little by little. Example: saving a file to disk, sending an HTTP response, or writing logs.
        - _write() => required method "_write" on Writable. It doesn't return. It's only to process the data
            - params:
                - chunk: what is sent from readable stream to write - it is a buffer, so it must be a string 
                - encoding: is how the data is codify
                - callback: function that the writeble method needs to call after finished to write the data

    - *Transform Streams*
    Data stream that read the data from Readable and write data to Writeble -- it is a communication stream between others Streams
        - _transform() => required method "_transform" on Transform. It has a return and pass it to Writable Stream
            - params:
                - chunk: what is sent from readable stream to write - it is a buffer, so it must be a string 
                - encoding: is how the data is codify
                - callback: function that the writeble method needs to call after finished to write the data. With two params: first param is when it is with error. The second param is the transformed data (must be buffer and string)



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

