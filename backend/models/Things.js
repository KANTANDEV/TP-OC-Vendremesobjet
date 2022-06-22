// On importe mongoose
const mongoose = require('mongoose');
// On cree nos schemats de donnes
const thingSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});
// on exporte nos schemat de donnees
module.exports = mongoose.model('Thing', thingSchema);