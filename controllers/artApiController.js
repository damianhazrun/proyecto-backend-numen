const axios = require("axios");
const ARTWORK_API_URL = "https://api.artic.edu/api/v1/artworks";
const ARTISTS_API_URL = "https://api.artic.edu/api/v1/artists";

/* Obtener todas las obras de arte */
exports.getArtworks = async (_, res) => {
  try {
    const response = await axios.get(ARTWORK_API_URL);
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error al obtener listado de obras de arte - " + error.message,
      });
  }
};
/* Obtener obra de arte por ID */
exports.getArtworkById = async (req, res) => {
  try {
    const response = await axios.get(`${ARTWORK_API_URL}/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error al obtener obra de arte por ID - " + error.message,
      });
  }
};

/* Buscar obras de arte por término */
exports.searchArtworks = async (req, res) => {
  try {
    const response = await axios.get(
      `${ARTWORK_API_URL}/search?q=${req.params.query}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error - " + error.message });
  }
};

/* Obtener la lista de artistas */
exports.getArtists = async (req, res) => {
  try {
    const response = await axios.get(ARTISTS_API_URL);
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error al obtener listado de artistas - " + error.message,
      });
  }
};

/* Obtener artista por ID */
exports.getArtistById = async (req, res) => {
  try {
    const response = await axios.get(`${ARTISTS_API_URL}/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al buscar artista por ID - " + error.message });
  }
};

/* Buscar artistas por término */
exports.searchArtists = async (req, res) => {
  try {
    const response = await axios.get(
      `${ARTISTS_API_URL}/search?q=${req.params.query}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error - " + error.message });
  }
};
