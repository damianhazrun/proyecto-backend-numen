const Alumno = require('../models/Alumno');

//READ
/* Obtener lista de alumnos*/
exports.list = async (req, res) => {
    try {
        const alumnos = await Alumno.find();
        res.json(alumnos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}