const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    res
      .status(403)
      .json({ message: "Recurso no disponible. Inicie sesión para continuar" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).send("Token inválido o expirado");
  }
};

module.exports = verifyToken;
