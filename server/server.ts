const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("server/db.json");
const middlewares = jsonServer.defaults();
const db = require("./db.json");
const fs = require("fs");

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/products", (req, res, next) => {
  const products = readProducts();

  if (products) {
    res.send({ ...products });
  } else {
    res.status(401).send("products not available");
  }
});

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

function readProducts() {
  const dbRaw = fs.readFileSync("./server/db.json");
  const products = JSON.parse(dbRaw).products;
  return products;
}
