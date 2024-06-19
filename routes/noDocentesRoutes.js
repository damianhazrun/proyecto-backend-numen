const express=require('express');
const router=express.Router();
const noDocentesController=require('../controllers/noDocentesController');

/* Crear no docente */
router.post('/new-nodocente', noDocentesController.create)
/* Crear no docente random */
router.post('/new-nodocente-random', noDocentesController.createRandomNoDocente)
/* Lista de no docentes */
router.get('/', noDocentesController.list)
/* No docente por ID */
router.get('/id/:id', noDocentesController.getById)
/* No docente por DNI */
router.get('/dni/:dni', noDocentesController.getByDni)
/* Actualizar no docente por ID */
router.put('/update-nodocente/id/:id', noDocentesController.update)
/* Cambiar a no docente con licencia por ID */
router.delete('/licencia/id/:id', noDocentesController.changeToLicencia)
/* Eliminar no docente por ID */
router.delete('/delete-nodocente/id/:id', noDocentesController.delete)

module.exports = router;