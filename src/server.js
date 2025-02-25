import http from "node:http";

import { json } from "./middlewares/json.js";
import { routes } from "./middlewares/routes.js";

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  // to verify the method to call the route
  const route = routes.find((route) => {
    return route.method === method && route.path === url;
  });

  if (route) {
    return route.handler(req, res);
  }

  return res.writeHead(404).end(); // Status Code error 404 => Not found
});

server.listen(3333);
