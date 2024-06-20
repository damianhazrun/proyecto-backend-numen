// Middleware para verificar el rol del usuario
const checkRole = (roles) => (req, res, next) => {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      res.status(403).send('No tienes permiso para realizar esta acción');
    }
  };
  
  module.exports = checkRole;
  