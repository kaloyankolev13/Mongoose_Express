const mongoose = require('mongoose');
const { Schema } = mongoose;

const farmSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Farm must have a name!'],
  },
  city: {
    type: String,
    required: [true, 'Farm must have a city!'],
  },
  email: {
    type: String,
    required: [true, 'Farm must have an email!'],
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

const Farm = mongoose.model('Farm', farmSchema);
module.exports = Farm;
