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

    res.status(201).send("Usuario registrado con éxito");
  } catch (error) {
    res.status(500).send("Error al registrar el usuario");
  }
};

/* Iniciar sesión */
exports.login = async (req, res) => {
  try {
    const user = await Usuario.findOne({ email: req.body.email });

    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(200).json({ token });
    } else {
      res.status(401).send("Credenciales inválidas");
    }
  } catch (error) {
    res.status(500).send("Error al iniciar sesión");
  }
};
