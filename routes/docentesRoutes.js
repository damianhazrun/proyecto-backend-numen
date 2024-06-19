const express=require('express');
const router=express.Router();
const docentesController=require('../controllers/docentesController');

/* Crear docente */
router.post('/new-docente',docentesController.create)
/* Crear docente random */
router.post('/new-docente-random',docentesController.createRandomDocente)
/* Lista de docentes */
router.get('/',docentesController.list)
/* Docente por ID */
router.get('/id/:id',docentesController.getById)
/* Docente por DNI */
router.get('/dni/:dni',docentesController.getByDni)
/* Actualizar docente por ID */
router.put('/update-docente/id/:id',docentesController.update)
/* Cambiar a docente con licencia por ID */
router.delete('/licencia/id/:id',docentesController.changeToLicencia)
/* Eliminar docente por ID */
router.delete('/delete-docente/id/:id',docentesController.delete)

module.exports = router;