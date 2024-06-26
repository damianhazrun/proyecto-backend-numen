const checkRole = (roles) => (req, res, next) => {
  if (roles.includes(req.session.role)) {
    next();
  } else {
    res.status(403).json({message: "No tienes permiso para realizar esta acción"});
  }
};

module.exports = checkRole;
