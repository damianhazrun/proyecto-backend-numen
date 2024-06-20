const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['alumno', 'docente', 'no-docente', 'admin'],
    required: true
  }
});


const Usuario = mongoose.model('Usuario', userSchema);

module.exports = Usuario;
