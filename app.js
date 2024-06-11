const express = require("express");
const path = require("path");
require("dotenv").config();
const logTimeStamp = require("./middlewares/logTimeStamps");

const app = express();
const port = 8080;

//Routers
const alumnosRouter = require("./routes/alumnosRoutes");
const docentesRouter = require("./routes/docentesRoutes");
const dbConnect = require("./database/dbConnect");

//Middlewares
app.use(express.json());
app.use(logTimeStamp);
app.use(express.static('public'));

//Importo pagina inicial de /public/index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//Routers
app.use("/alumnos", alumnosRouter);
app.use("/docentes", docentesRouter)


//Conexión a MongoDB
dbConnect();

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}

          Ingresar a:
          http://localhost:${port}
      `);
});
