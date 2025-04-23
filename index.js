const http = require("http");

// Creamos el servidor de http.
const servidor = http.createServer((req, res) => {
  res.end();
});

const port = 3000;
servidor.listen(port, () => {
  console.log("(server.js): Servidor escuchando en el puerto: ", port);
});
