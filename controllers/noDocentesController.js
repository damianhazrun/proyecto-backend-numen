const faker = require("faker");
const NoDocente = require("../models/NoDocente");

//CREATE
/* Crear nuevo no docente */
exports.create = async (req, res) => {
  const newNoDocente = { ...req.body };

  const birthDate = new Date(newNoDocente.fecha_nacimiento);
  const age = new Date().getFullYear() - birthDate.getFullYear();
  if (age < 18) {
    return res
      .status(400)
      .json({ message: "El no docente debe ser mayor de 18 años." });
  }

  try {
    const noDocente = await NoDocente.create(newNoDocente);
    res
      .status(201)
      .json({ message: "Nuevo no docente creado con éxito", data: noDocente });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al crear el no docente - " + error.message });
  }
};

/*Crear un nuevo no docente con datos aleatorios*/
exports.createRandomNoDocente = async (req, res) => {
  
  const fechaMaxima = new Date();
  fechaMaxima.setFullYear(fechaMaxima.getFullYear() - 18);
  const fechaMinima = new Date();
  fechaMinima.setFullYear(fechaMinima.getFullYear() - 100);

  const newRandomNoDocente = {
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    dni: faker.random.number({ min: 10000000, max: 99999999 }).toString(),
    fecha_nacimiento: faker.date.between(fechaMinima, fechaMaxima),
    email: faker.internet.email(),
    telefono: faker.phone.phoneNumber(),
    direccion: faker.address.streetAddress(),
    foto: "https://www.w3schools.com/howto/img_avatar.png",
    licencia: faker.random.boolean(),
  };

  try {
    const noDocente = await NoDocente.create(newRandomNoDocente);
    res.status(201).json({
      message: "Nuevo no docente random creado con éxito",
      data: noDocente,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al crear no docente random - " + error.message });
  }
};

//READ
/* Obtener lista de no docentes*/
exports.list = async (req, res) => {
  try {
    const noDocentes = await NoDocente.find();
    res.json(noDocentes);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener lista de no docentes - " + error.message,
    });
  }
};

/* Obtener un no docente por id */
exports.getById = async (req, res) => {
  try {
    const noDocente = await NoDocente.findById(req.params.id);
    res.json(noDocente);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Error al obtener no docente - " + error.message });
  }
};

/* Obtener un no docente por dni */
exports.getByDni = async (req, res) => {
  try {
    const noDocente = await NoDocente.findOne({ dni: req.params.dni });
    res.json(noDocente);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Error al obtener no docente - " + error.message });
  }
};

//PUT
/* Actualizar un no docente por id */
exports.update = async (req, res) => {
  try {
    const updatedNoDocente = await NoDocente.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({
      message: "Datos actualizados correctamente",
      data: updatedNoDocente,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al actualizar no docente - " + error.message });
  }
};

//DELETE
/* Cambiar a Con licencia por id*/
exports.changeToLicencia = async (req, res) => {
  try {
    const noDocenteConLicencia = await NoDocente.findByIdAndUpdate(
      req.params.id,
      {
        licencia: true,
      }
    );
    res.status(200).json({
      message: "No docente marcado como con licencia",
      data: noDocenteConLicencia,
    });
  } catch (error) {
    res.status(400).json({
      message:
        "Error al marcar no docente como con licencia - " + error.message,
    });
  }
};

/*Eliminar no docente de la base de datos*/
exports.delete = async (req, res) => {
  try {
    const deletedNoDocente = await NoDocente.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "No docente eliminado correctamente",
      data: deletedNoDocente,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al eliminar no docente - " + error.message });
  }
};
