const {Schema, model} = require('mongoose');

const docenteSchema = new Schema(
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
      curso: {
        type: String,
        enum: ["Matemáticas","Literatura","Inglés","Historia","Geografía","Biología","Música","Arte"],
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

  const Docente = model('Docente', docenteSchema);
  
  module.exports = Docente;