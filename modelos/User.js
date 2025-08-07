const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nome: String,
  serie: String,
  senha: String
});

module.exports = mongoose.model('User', UserSchema);
