import { Database } from "./database.js";
import { randomUUID } from "node:crypto";
const database = new Database();

export const routes = [
  {
    method: "GET",
    path: "/users",
    handler: (req, res) => {
      const users = database.select("users");

      return res.end(JSON.stringify(users));
    },
  },
  {
    method: "POST",
    path: "/users",
    handler: (req, res) => {
      const { name, email } = req.body;

      const user = {
        id: randomUUID(),
        name,
        email,
      };

      database.insert("users", user); // method insert with the name of table (first param) and the data to be inserted

      return res.writeHead(201).end(); // Status code 201 => Created
    },
  },
];
