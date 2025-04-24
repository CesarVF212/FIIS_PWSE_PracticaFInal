const express = require("express");
const app = express();

// Crear el router para programación
const routerMatematicas = express.Router();

// Registrar el router bajo una ruta base
app.use("/api/cursos/matematicas", routerMatematicas);

// Ruta dentro del router
routerMatematicas.get("/", (req, res) => {
  res.send("Aquí van los cursos de matematicas");
});

// Exportamos el modulo para que se pueda usar desde fuera.
module.exports = routerMatematicas;
