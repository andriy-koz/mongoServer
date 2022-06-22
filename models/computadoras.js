const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
  marca: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  numSerie: {
    type: String,
    unique: true,
    required: true
  },
  procesador: {
    type: String,
    required: true
  },
  so: {
    type: String,
  },
  unidadAlmacenamiento: {
    type: String,
    required: true,
  },
  ram: {
    type: String,
    require: true,
  },
});

const Computer = mongoose.model('Computer', storeSchema);

module.exports = { Computer };
