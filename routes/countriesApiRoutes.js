const express = require("express");
const router = express.Router();
const countriesApiController = require("../controllers/countriesApiController");
const verifyToken = require("../middlewares/verifyToken");
const checkRole = require("../middlewares/checkRole");

// Obtener listado de países disponibles con sus códigos (accesible para alumnos, docentes y administrador)
router.get(
  "/countries",
  verifyToken,
  checkRole(["alumno", "docente", "admin"]),
  countriesApiController.getCountries
);

// Obtener información de un país según su código (accesible para alumnos, docentes y administrador)
router.get(
  "/countries/code/:code",
  verifyToken,
  checkRole(["alumno", "docente", "admin"]),
  countriesApiController.getCountryInfo
);

// Obtener feriados de un país según su código y año (accesible para alumnos, docentes y administrador)
router.get(
  "/holidays/:countryCode/:year",
  verifyToken,
  checkRole(["alumno", "docente", "admin"]),
  countriesApiController.getHolidays
);

module.exports = router;
