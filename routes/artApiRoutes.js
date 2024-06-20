const express = require("express");
const router = express.Router();
const artController = require("../controllers/artApiController");
const verifyToken = require("../middlewares/verifyToken");
const checkRole = require("../middlewares/checkRole");

// Obtener listado de obras de arte
router.get(
  "/artworks",
  verifyToken,
  checkRole(["alumno", "docente", "admin"]),
  artController.getArtworks
);

// Obtener una obra de arte por ID
router.get(
  "/artworks/id/:id",
  verifyToken,
  checkRole(["alumno", "docente", "admin"]),
  artController.getArtworkById
);

// Buscar obras de arte por término
router.get(
  "/artworks/search/:query",
  verifyToken,
  checkRole(["alumno", "docente", "admin"]),
  artController.searchArtworks
);

// Obtener listado de artistas
router.get(
  "/artists",
  verifyToken,
  checkRole(["alumno", "docente", "admin"]),
  artController.getArtists
);

// Obtener un artista específico por ID
router.get(
  "/artists/id/:id",
  verifyToken,
  checkRole(["alumno", "docente", "admin"]),
  artController.getArtistById
);

// Buscar artistas por término
router.get(
  "/artists/search/:query",
  verifyToken,
  checkRole(["alumno", "docente", "admin"]),
  artController.searchArtists
);

module.exports = router;
