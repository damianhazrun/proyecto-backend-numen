const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/Usuario");

/* Registrar usuario */
exports.register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new Usuario({ ...req.body, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "Usuario registrado con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar el usuario" });
  }
};

/* Obtener lista de usuarios */
exports.getUsers = async (req, res) => {
  try {
    const users = await Usuario.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la lista de usuarios" });
  }
};

/* Iniciar sesión */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Usuario.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Usuario no encontrado/Credenciales inválidas" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Usuario no encontrado/Credenciales inválidas" });
    }

    if (req.session.userId) {
      req.session.destroy();
    }

    req.session.userId = user._id;
    req.session.role = user.role;

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
};

/* Cerrar sesión */
exports.logout = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({ message: "Error al cerrar sesión" });
      } else {
        res.clearCookie("token");
        res.status(200).json("Cierre de sesión exitoso");
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Error al cerrar sesión" });
  }
};


