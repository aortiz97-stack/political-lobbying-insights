const mongoose = require('mongoose');

const { Schema } = mongoose;

const ContributionSchema = new Schema({
  contributionDate: { type: Date, required: true },
  recipient: { type: String, required: true },
  amount: { type: Number, required: true },
  lobbyistId: { type: Schema.Types.ObjectId, required: true },

});

module.exports = mongoose.model(ContributionSchema, 'Contribution');
