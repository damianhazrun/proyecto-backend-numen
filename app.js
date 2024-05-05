const express = require("express");
require("dotenv").config();
const logTimeStamp = require("./middlewares/logTimeStamps");

const app = express();
const port = 8080;

//Routers

const dbConnect = require("./database/dbConnect");

//middlewares
app.use(express.json());
app.use(logTimeStamp);


//Titulo HOME
app.get("/", (req, res) => {
  res.send("<h3>HOME</h3>");
});

//Conexión a MongoDB
dbConnect();

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}
          Ingresar a:
          http://localhost:${port}
      `);
  });
  