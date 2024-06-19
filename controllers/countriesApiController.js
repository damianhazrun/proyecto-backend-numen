const axios = require("axios");
const COUNTRY_API_URL = "https://date.nager.at/Api/v2";

/* Obtener el listado de países */
exports.getCountries = async (req, res) => {
  try {
    const response = await axios.get(`${COUNTRY_API_URL}/AvailableCountries`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
/* Obtener información de un país según su código */
exports.getCountryInfo = async (req, res) => {
  try {
    const response = await axios.get(
      `${COUNTRY_API_URL}/countryInfo?countryCode=${req.params.code}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

/* Obtener feriados de un país específico */
exports.getHolidays = async (req, res) => {
  try {
    const response = await axios.get(
      `${COUNTRY_API_URL}/PublicHolidays/${req.params.year}/${req.params.countryCode}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
