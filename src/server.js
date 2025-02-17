import http from "node:http";
import { json } from "./middlewares/json.js";
import { Database } from "./middlewares/database.js";

const database = new Database();

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  if (method === "GET" && url === "/users") {
    const users = database.select("users");

    return res.end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    const { name, email } = req.body;

    const user = {
      id: 1,
      name,
      email,
    };

    database.insert("users", user); // method insert with the name of table (first param) and the data to be inserted

    return res.writeHead(201).end(); // Status code 201 => Created
  }

  return res.writeHead(404).end(); // Status Code error 404 => Not found
});

server.listen(3333);
