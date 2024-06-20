const express = require("express");
const router = express.Router();
const alumnosController = require("../controllers/alumnosController");
const verifyToken = require("../middlewares/verifyToken");
const checkRole = require("../middlewares/checkRole");

// Crear alumno (accesible para no docentes y administrador)
router.post(
  "/new-alumno",
  verifyToken,
  checkRole(["no-docente", "admin"]),
  alumnosController.create
);

// Crear alumno random con FAKER
router.post("/new-alumno-random", alumnosController.createRandomAlumno);

// Ver lista de alumnos (accesible para docentes, no docentes y administrador)
router.get(
  "/",
  verifyToken,
  checkRole(["docente", "no-docente", "admin"]),
  alumnosController.list
);

// Buscar alumno por ID (accesible para no docentes y administrador)
router.get(
  "/id/:id",
  verifyToken,
  checkRole(["no-docente", "admin"]),
  alumnosController.getById
);

// Buscar alumno por DNI (accesible para docentes, no docentes y administrador)
router.get(
  "/dni/:dni",
  verifyToken,
  checkRole(["docente", "no-docente", "admin"]),
  alumnosController.getByDni
);

// Actualizar datos de alumno por ID (accesible para no docentes y administrador)
router.put(
  "/update-alumno/id/:id",
  verifyToken,
  checkRole(["no-docente", "admin"]),
  alumnosController.update
);

// Cambiar a irregular (accesible para no docentes y administrador)
router.delete(
  "/irregular/id/:id",
  verifyToken,
  checkRole(["no-docente", "admin"]),
  alumnosController.irregular
);

// Eliminar alumno por ID (accesible solo para el administrador)
router.delete(
  "/delete-alumno/id/:id",
  verifyToken,
  checkRole(["admin"]),
  alumnosController.delete
);

module.exports = router;
