const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    res
      .status(403)
      .json({ message: "Recurso no disponible. Inicie sesión para continuar" });
  } else {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
      if (error) {
        res.status(401).json({
          message: "Acceso denegado. Token no válido o expirado.",
        });
      } else {
        req.payload = decoded;
        next();
      }
    });
  }
};

module.exports = verifyToken;
