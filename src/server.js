import http from "node:http";

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "Laís Escorcio",
      email: "escorcio.lais@gmail.com",
    });

    return res.writeHead(201).end(); // Status code 201 => Created
  }

  return res.writeHead(404).end(); // Status Code error 404 => Not found
});

server.listen(3333);
