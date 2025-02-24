import { Database } from "./database.js";
import { randomUUID } from "node:crypto";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/users"),
    handler: (req, res) => {
      const users = database.select("users");

      return res.end(JSON.stringify(users));
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/users"),
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
  {
    method: "DELETE",
    path: buildRoutePath("/users/:id/groups/:groupId"),
    handler: (req, res) => {
      //   const { id } = req.params;

      //   database.delete("users", id);

      //   return res.writeHead(204).end();
      return res.end();
    },
  },
];
