const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  // Obtenemos la uri de la base de datos.
  const db_uri = process.env.DB_URI;

  // Desactivamos strictQuery para evitar problemas con las consultas.
  mongoose.set("strictQuery", false);

  // Intentamos conectarnos y su no podemos lo indicamos por consola.
  try {
    mongoose.connect(db_uri);
  } catch (error) {
    console.err("ERROR (config/mongo.js): ", error);
  }

  // Escuchamos los eventos que vayan llegando.
  mongoose.connection.on("connected", () => console.log("Conectado a la BD"));
};

module.exports = dbConnect;
