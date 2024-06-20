const express = require("express");
const router = express.Router();
const countriesApiController = require("../controllers/countriesApiController");
const verifyToken = require("../middlewares/verifyToken");
const checkRole = require("../middlewares/checkRole");

// Obtener listado de países disponibles con sus códigos
router.get(
  "/countries",
  verifyToken,
  checkRole(["alumno", "docente", "admin"]),
  countriesApiController.getCountries
);

// Obtener información de un país según su código
router.get(
  "/countries/code/:code",
  verifyToken,
  checkRole(["alumno", "docente", "admin"]),
  countriesApiController.getCountryInfo
);

// Obtener feriados de un país según su código y año
router.get(
  "/holidays/:countryCode/:year",
  verifyToken,
  checkRole(["alumno", "docente", "admin"]),
  countriesApiController.getHolidays
);

module.exports = router;
