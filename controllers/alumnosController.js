const Alumno = require("../models/Alumno");

//CREATE
/* Crear un nuevo alumno */
exports.create = async (req, res) => {
  const newAlumno = { ...req.body };
  try {
    const alumno = await Alumno.create(newAlumno);
    res.status(201).json({ message: "Nuevo alumno creado con éxito", data: alumno });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al crear alumno - " + error.message });
  }
};

//READ
/* Obtener lista de alumnos*/
exports.list = async (req, res) => {
  try {
    const alumnos = await Alumno.find();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener  lista de alumnos - " + error.message,
    });
  }
};

/* Obtener un alumno por id */
exports.getById = async (req, res) => {
  try {
    const alumno = await Alumno.findById(req.params.id);
    res.json(alumno);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Error al obtener alumno - " + error.message });
  }
};

/* Obtener un alumno por dni */
exports.getByDni = async (req, res) => {
  try {
    const alumno = await Alumno.findOne({ dni: req.params.dni });
    res.json(alumno);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Error al obtener alumno - " + error.message });
  }
};

//PUT
/* Actualizar un alumno por id */
exports.update = async (req, res) => {
  try {
    const updatedAlumno = await Alumno.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({
      message: "Datos actualizados correctamente",
      data: updatedAlumno,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al actualizar alumno - " + error.message });
  }
};

//DELETE
/* Cambiar regularidad por id*/
exports.irregular = async (req, res) => {
  try {
    const irregularAlumno = await Alumno.findByIdAndUpdate(req.params.id, {
      regular: false,
    });
    res.status(200).json({
      message: "Alumno marcado como irregular",
      data: irregularAlumno,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al marcar alumno como irregular - " + error.message,
    });
  }
};

/*Eliminar alumno de base da datos*/
exports.delete = async (req, res) => {
  try {
    const deletedAlumno = await Alumno.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Alumno eliminado correctamente",
      data: deletedAlumno,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al eliminar alumno - " + error.message });
  }
};
