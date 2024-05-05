const express =require('express');
const router = express.Router();
const alumnosController = require('../controllers/alumnosController');

/*Crear alumno*/
router.post('/new-alumno', alumnosController.create);
/*Lista de alumnos*/
router.get('/', alumnosController.list);
/*Alumno por ID*/
router.get('/id/:id', alumnosController.getById);
/*Alumno por DNI*/
router.get('/dni/:dni', alumnosController.getByDni);
/*Actualizar alumno por ID*/
router.put('/update-alumno/id/:id', alumnosController.update);
/*Cambiar a irregular*/
router.delete('/irregular/id/:id', alumnosController.irregular);
/*Eliminar alumno por ID*/
router.delete('/delete-alumno/id/:id', alumnosController.delete);


module.exports = router;