const express =require('express');
const router = express.Router();
const alumnosController = require('../controllers/alumnosController');

/*Lista de alumnos*/
router.get('/', alumnosController.list);



module.exports = router;