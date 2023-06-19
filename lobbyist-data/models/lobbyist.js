const mongoose = require('mongoose');

const { Schema } = mongoose;

const LobbyistSchema = new Schema({
  firstName: { type: String, required: true },
  middleInitial: { type: String, maxLength: 2 },
  lastName: { type: String, required: true },
  suffix: { type: String },
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  state: { type: String },
  zipcode: { type: String },
  country: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  employer: { type: Schema.Types.ObjectId, ref: 'Employer' },
  lobbyingActivities: [{ type: Schema.Types.ObjectId, ref: 'Activity' }],
});

module.exports = mongoose.model('Lobbyist', LobbyistSchema);
