const express = require('express');
const router = express.Router();
const artController = require('../controllers/artApiController');

// Obtener obras de arte
router.get('/artworks', artController.getArtworks);

// Obtener obra de arte por ID
router.get('/artworks/id/:id', artController.getArtworkById);

// Buscar obras de arte por término
router.get('/artworks/search/:query', artController.searchArtworks);


// Obtener la lista de artistas
router.get('/artists', artController.getArtists);

// Obtener un artista específico por ID
router.get('/artists/id/:id', artController.getArtistById);

// Buscar artistas por término
router.get('/artists/search/:query', artController.searchArtists);


module.exports = router;