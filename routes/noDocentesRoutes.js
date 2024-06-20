const express = require("express");
const router = express.Router();
const noDocentesController = require("../controllers/noDocentesController");
const verifyToken = require("../middlewares/verifyToken");
const checkRole = require("../middlewares/checkRole");

// Crear no docente (accesible para no docentes y administrador)
router.post(
  "/new-nodocente",
  verifyToken,
  checkRole(["no-docente", "admin"]),
  noDocentesController.create
);

// Crear no docente random con FAKER
router.post(
  "/new-nodocente-random",
  noDocentesController.createRandomNoDocente
);

// Ver lista de no docentes (accesible para no docentes y administrador)
router.get(
  "/",
  verifyToken,
  checkRole(["no-docente", "admin"]),
  noDocentesController.list
);

// Buscar no docente por ID (accesible para no docentes y administrador)
router.get(
  "/id/:id",
  verifyToken,
  checkRole(["no-docente", "admin"]),
  noDocentesController.getById
);

// Buscar no docente por DNI (accesible para no docentes y administrador)
router.get(
  "/dni/:dni",
  verifyToken,
  checkRole(["no-docente", "admin"]),
  noDocentesController.getByDni
);

// Actualizar datos del no docente por ID (accesible para no docentes y administrador)
router.put(
  '/update-nodocente/id/:id', verifyToken, checkRole(["no-docente", "admin"]),
  noDocentesController.update
);

// Establecer no docente con licencia por ID (accesible para no docentes y administrador)
router.delete(
  "/licencia/id/:id",
  verifyToken,
  checkRole(["no-docente", "admin"]),
  noDocentesController.changeToLicencia
);

// Eliminar no docente por ID (accesible para el administrador)
router.delete(
  "/delete-nodocente/id/:id",
  verifyToken,
  checkRole(["admin"]),
  noDocentesController.delete
);

module.exports = router;
