const mongoose = require('mongoose');

const { Schema } = mongoose;

const ActivitySchema = new Schema({
  periodStart: { type: Date, required: true },
  periodEnd: { type: Date, required: true },
  actionType: { type: String, required: true },
  actionDescription: { type: String, required: true },
  target: { type: String, required: true },
  client: { type: Schema.Types.ObjectId, ref: 'Client' },
});

module.exports = mongoose.model('Activity', ActivitySchema);
