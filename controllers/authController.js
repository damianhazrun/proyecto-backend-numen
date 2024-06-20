const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/Usuario");

/* Registrar un nuevo usuario */
exports.register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new Usuario({
      ...req.body,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: "Usuario registrado con éxito" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al registrar el usuario - " + error.message });
  }
};

/* Lista de usuarios */
exports.getUsers = async (req, res) => {
  try {
    const users = await Usuario.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener  lista de usuarios - " + error.message,
    });
  }
};

/* Iniciar sesión */
exports.login = async (req, res) => {
  try {
    const user = await Usuario.findOne({ email: req.body.email });

    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );

      res.status(200).json({ token });
    } else {
      res
        .status(401)
        .json({ message: "Credenciales inválidas - " + error.message });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al iniciar sesión - " + error.message });
  }
};

/* Cerrar sesion */

exports.logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json("Cierre de sesión exitoso");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al cerrar sesión - " + error.message });
  }
};
