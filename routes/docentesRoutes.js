const express = require("express");
const router = express.Router();
const docentesController = require("../controllers/docentesController");
const verifyToken = require("../middlewares/verifyToken");
const checkRole = require("../middlewares/checkRole");

// Crear docente (accesible para no docentes y administrador)
router.post(
  "/new-docente",
  verifyToken,
  checkRole(["no-docente", "admin"]),
  docentesController.create
);

// Crear docente random con FAKER
router.post("/new-docente-random", docentesController.createRandomDocente);

// Ver lista de docentes (accesible para no docentes y administrador)
router.get(
  "/",
  verifyToken,
  checkRole(["no-docente", "admin"]),
  docentesController.list
);

// Buscar docente por ID (accesible para no docentes y administrador)
router.get(
  "/id/:id",
  verifyToken,
  checkRole(["no-docente", "admin"]),
  docentesController.getById
);

// Buscar docente por DNI (accesible para no docentes y administrador)
router.get(
  "/dni/:dni",
  verifyToken,
  checkRole(["no-docente", "admin"]),
  docentesController.getByDni
);

// Actualizar datos del docente por ID (accesible para no docentes y administrador)
router.put(
  "/update-docente/id/:id",
  verifyToken,
  checkRole(["no-docente", "admin"]),
  docentesController.update
);

// Establecer docente con licencia por ID (accesible para no docentes y administrador)
router.delete(
  "/licencia/id/:id",
  verifyToken,
  checkRole(["no-docente", "admin"]),
  docentesController.changeToLicencia
);

// Eliminar docente por ID (accesible para el administrador)
router.delete(
  "/delete-docente/id/:id",
  verifyToken,
  checkRole(["admin"]),
  docentesController.delete
);

module.exports = router;
