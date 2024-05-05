const { Schema, model } = require("mongoose");

const alumnoSchema = new Schema(
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
    regular: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Alumno = model("Alumno", alumnoSchema);

module.exports = Alumno;