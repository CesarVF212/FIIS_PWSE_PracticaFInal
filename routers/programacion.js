const express = require("express");
const app = express();

//Simulamos una base de datos con el archivo de cursos.js anterior.
const { infoCursos } = require("../simulatedDatabase/cursos");

// Crear el router para programación
const routerProgramacion = express.Router();

// Registrar el router bajo una ruta base
app.use("/api/cursos/programacion", routerProgramacion);

// Ruta dentro del router
routerProgramacion.get("/", (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion));
});

routerProgramacion.get("/", (req, res) => {
  // Obtenemos el lenguaje de la url.
  const lenguaje = req.params.lenguaje;

  // Y filtamos la información, solo cogemos la que coincida con el lenguaje.
  const data = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  );

  // En el caso de no encontrar nada lo indicamos.
  if (data.length === 0) {
    return res.status(404).send("No se encontró " + lenguaje);
  }

  // Lo pasamos a string para enviarlo. Hacemos una vista para que se ordene.
  if (req.query.ordenar === "vistas") {
    res.send(JSON.stringify(data.sort((a, b) => b.vistas - a.vistas)));
  } else {
    res.send(JSON.stringify(data));
  }
});

// Exportamos el modulo para que se pueda usar desde fuera.
module.exports = routerProgramacion;
