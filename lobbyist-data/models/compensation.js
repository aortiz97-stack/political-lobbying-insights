const mongoose = require('mongoose');

const { Schema } = mongoose;

const CompensationSchema = new Schema({
  lobbyist: { type: Schema.Types.ObjectId, required: true },
  amount: { type: Number, required: true },
  client: { type: Schema.Types.ObjectId, required: true },
});

module.exports = mongoose.model(CompensationSchema, 'Compensation');
