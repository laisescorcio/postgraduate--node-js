import http from "node:http";

const users = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  const buffers = []; // when you need to wait all chunks to be returned to read to transform or write

  for await (const chunk of req) {
    // to wait each slice of the streams to be returned
    buffers.push(chunk); // insert in the buffer array
  }

  try {
    // create new prop inside req called body
    req.body = JSON.parse(Buffer.concat(buffers).toString());
    // after all chunks are readed
    // JSON.parse() to transform String to JSON
  } catch {
    req.body = null;
  }

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    const { name, email } = req.body;

    users.push({
      id: 1,
      name,
      email,
    });

    return res.writeHead(201).end(); // Status code 201 => Created
  }

  return res.writeHead(404).end(); // Status Code error 404 => Not found
});

server.listen(3333);
