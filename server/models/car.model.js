const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  transmission:{ type: String, required: true },
  mileage:{ type: Number, required: true },
  engine: {type:String, required:true}
});

// create index for rapid search
carSchema.index({ make: 1 });
carSchema.index({ model: 1 });
carSchema.index({ year: 1 });
carSchema.index({ make: 1, model: 1, year: 1 });

module.exports = mongoose.model('Car', carSchema);
