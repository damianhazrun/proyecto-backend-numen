const logTimeStamp = (req, res, next) => {
    const timeStamp = new Date().toLocaleTimeString();
    console.log(
      `[${timeStamp}] Solicitud entrante: ${req.method} - Endpoint: ${req.url}`
    );
    next();
  };
  
  module.exports = logTimeStamp;