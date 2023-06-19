const mongoose = require('mongoose');

const { Schema } = mongoose;

const ClientSchema = new Schema({
  name: { type: String, required: true },
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  state: { type: String },
  zipcode: { type: String },
  country: { type: String },
  active: { type: String, required: true },
});


