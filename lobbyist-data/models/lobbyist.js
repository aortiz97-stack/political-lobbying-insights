const mongoose = require('mongoose');

const { Schema } = mongoose;

const LobbyistSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  state: { type: String },
  zipcode: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  employerName: { type: String },
  lobbyingActivities: [{ type: Schema.Types.ObjectId, ref: 'Activity' }],
});

module.exports = mongoose.model('Lobbyist', LobbyistSchema);
