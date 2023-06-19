const mongoose = require('mongoose');

const { Schema } = mongoose;

const EmployerSchema = new Schema({
  name: { type: String, required: true },
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  state: { type: String },
  zipcode: { type: String },
  country: { type: String },
  phone: { type: String },
  active: { type: String, required: true },

});

module.exports = mongoose.model('Employer', EmployerSchema);
