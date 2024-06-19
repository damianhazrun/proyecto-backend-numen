const app = require("../app");

const port = 8080;

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}
  
            Ingresar a:
            http://localhost:${port}
        `);
  });
  