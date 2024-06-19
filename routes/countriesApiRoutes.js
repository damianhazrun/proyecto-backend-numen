const express = require('express');
const router = express.Router();
const countriesApiController = require("../controllers/countriesApiController")

// Obtener el listado de países
router.get('/countries', countriesApiController.getCountries);

// Obtener información de un país según su código
router.get('/countries/code/:code', countriesApiController.getCountryInfo);

// Obtener feriados de un país específico
router.get('/holidays/:countryCode/:year', countriesApiController.getHolidays);

module.exports = router;