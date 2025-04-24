const express = require("express");
const app = express();

// Cargamos las varaibles de entorno del .env.
require("dotenv").config();

// Ahora, al hacer un get, obtenemos hello world.
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Obtenemos los routers y los usamos.
const routerProgramacion = require("./routers/programacion");
const routerMatematicas = require("./routers/matematicas");

app.use("/api/cursos/programacion", routerProgramacion);
app.use("/api/cursos/matematicas", routerMatematicas);

// E iniciamos la configuración para manejar el servidor.
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Servidor iniciado en el puerto", port);
});
