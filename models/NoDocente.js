const {Schema, model} = require('mongoose');

const noDocenteSchema = new Schema(
    {
      nombre: {
        type: String,
        required: true,
      },
      apellido: {
        type: String,
        required: true,
      },
      dni: {
        type: String,
        required: true,
      },
      fecha_nacimiento: {
        type: Date,
        required: true,
      },
      email: {
        type: String,
      },
      telefono: {
        type: String,
      },
      direccion: {
        type: String,
      },
      foto: {
        type: String,
        default: "https://www.w3schools.com/howto/img_avatar.png",
      },
      licencia: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  );

  const NoDocente = model('NoDocente', noDocenteSchema);
  
  module.exports = NoDocente;