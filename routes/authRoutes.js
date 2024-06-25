const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Registrar un nuevo usuario
router.post("/register", authController.register);

// Listado de usuarios
router.get("/users", authController.getUsers);

// Iniciar sesión
router.post("/login", authController.login);

// Cerrar sesión
router.post("/logout", authController.logout);


module.exports = router;
