const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Conexión a MongoDB establecida");
  } catch (error) {
    console.log("Error en la conexión a la base de datos -" + error.message);
  }
};

module.exports = dbConnect;
