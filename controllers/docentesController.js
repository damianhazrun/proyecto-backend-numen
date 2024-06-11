const faker = require("faker");
const Docente = require("../models/Docente");

//CREATE
/* Crear nuevo docente */
exports.create = async (req, res) => {
  const newDocente = { ...req.body };

  // Calcula la edad basándose en la fecha de nacimiento
  const birthDate = new Date(newDocente.fecha_nacimiento);
  const ageDiffMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDiffMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  // Verifica si el docente es menor de 18 años
  if (age < 18) {
    return res.status(400).json({ message: "El docente debe ser mayor de 18 años." });
  }

  try {
    const docente = await Docente.create(newDocente);
    res
      .status(201)
      .json({ message: "Nuevo docente creado con éxito", data: docente });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al crear el docente - "+ error.message });
  }
};

/*Crear un nuevo docente con datos aleatorios*/
exports.createRandomDocente = async (req, res) => {
  const cursos = ["Matemáticas","Literatura","Inglés","Historia","Geografía","Biología","Música","Arte"];
  
  // Calcula las fechas para una persona de 18 a 100 años
  const fechaMaxima = new Date();
  fechaMaxima.setFullYear(fechaMaxima.getFullYear() - 18);
  const fechaMinima = new Date();
  fechaMinima.setFullYear(fechaMinima.getFullYear() - 100);

  const newRandomDocente = {
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    dni: faker.random.number({min:10000000, max:99999999}).toString(),
    fecha_nacimiento: faker.date.between(fechaMinima, fechaMaxima),
    curso: faker.random.arrayElement(cursos),
    email: faker.internet.email(),
    telefono: faker.phone.phoneNumber(),
    direccion: faker.address.streetAddress(),
    foto: "https://www.w3schools.com/howto/img_avatar.png",
    regular: faker.random.boolean(),
  };
  try {
    const docente = await Docente.create(newRandomDocente);
    res
      .status(201)
      .json({ message: "Nuevo docente random creado con éxito", data: docente });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al crear docente random - " + error.message });
  }
};
 
  
  //READ
  /* Obtener lista de docentes*/
  exports.list = async (req, res) => {
    try {
      const docentes = await Docente.find();
      res.json(docentes);
    } catch (error) {
      res.status(500).json({
        message: "Error al obtener  lista de docentes - " + error.message,
      });
    }
  };
  
  /* Obtener un docente por id */
  exports.getById = async (req, res) => {
    try {
      const docente = await Docente.findById(req.params.id);
      res.json(docente);
    } catch (error) {
      res
        .status(404)
        .json({ message: "Error al obtener docente - " + error.message });
    }
  };
  
  /* Obtener un docente por dni */
  exports.getByDni = async (req, res) => {
    try {
      const docente = await Docente.findOne({ dni: req.params.dni });
      res.json(docente);
    } catch (error) {
      res
        .status(404)
        .json({ message: "Error al obtener docente - " + error.message });
    }
  };
  
  
  //PUT
  /* Actualizar un docente por id */
  exports.update = async (req, res) => {
    try {
      const updatedDocente = await Docente.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(200).json({
        message: "Datos actualizados correctamente",
        data: updatedDocente,
      });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error al actualizar docente - " + error.message });
    }
  };
  
  
  //DELETE
  /* Cambiar a Con licencia por id*/
  exports.changeToLicencia = async (req, res) => {
    try {
      const docenteConLicencia = await Docente.findByIdAndUpdate(req.params.id, {
        licencia: true,
      });
      res.status(200).json({
        message: "Docente marcado como con licencia",
        data: docenteConLicencia,
      });
    } catch (error) {
      res.status(400).json({
        message: "Error al marcar docente como con licencia - " + error.message,
      });
    }
  };
  
  /*Eliminar docente de la base de datos*/
  exports.delete = async (req, res) => {
    try {
      const deletedDocente = await Docente.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "Docente eliminado correctamente",
        data: deletedDocente,
      });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error al eliminar docente - " + error.message });
    }
  };