const express = require("express");
const path = require("path");
require("dotenv").config();
const logTimeStamp = require("./middlewares/logTimeStamps");
const session=require("express-session")
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
const artApiRouter = require("./routes/artApiRoutes")
const countriesApiRouter = require("./routes/countriesApiRoutes")
const authRouter = require("./routes/authRoutes")
const dbConnect = require("./database/dbConnect");

//Middlewares
app.use(express.json());
app.use(logTimeStamp);
app.use(express.static('public'));
app.use(session({
     secret: process.env.SESSION_SECRET,
     resave: false,
     saveUninitialized: true,
     store: store
}))

//Pagina inicial de /public/index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


//Routers
app.use("/alumnos", alumnosRouter);
app.use("/docentes", docentesRouter);
app.use("/no-docentes", noDocentesRouter);
app.use("/art-api", artApiRouter);
app.use("/countries-api", countriesApiRouter);
app.use("/auth", authRouter)



//Conexión a MongoDB
dbConnect();

module.exports =app;