const express = require("express");
const path = require("path");
require("dotenv").config();
const logTimeStamp = require("./middlewares/logTimeStamps");
const session=require("express-session")
const cookieParser=require("cookie-parser")
const MongoDBStore = require("connect-mongodb-session")(session);
const app = express();
const store = new MongoDBStore({
     uri: process.env.MONGO_URL,
     collection: "sessions"
})

//Routers
const alumnosRouter = require("./routes/alumnosRoutes");
const docentesRouter = require("./routes/docentesRoutes");
const noDocentesRouter = require("./routes/noDocentesRoutes")
const dbConnect = require("./database/dbConnect");

//Middlewares
app.use(express.json());
app.use(logTimeStamp);
app.use(express.static('public'));
app.use(cookieParser())
app.use(session({
     secret: process.env.SESSION_SECRET,
     resave: false,
     saveUninitialized: true,
     store: store
}))

//Importo pagina inicial de /public/index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//Routers
app.use("/alumnos", alumnosRouter);
app.use("/docentes", docentesRouter);
app.use("/no-docentes", noDocentesRouter)


//Conexión a MongoDB
dbConnect();

module.exports =app;