const mongoose = require('mongoose');
const Product = require('./product');
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

farmSchema.post('findOneAndDelete', async function (farm) {
  if (farm.products.length) {
    const res = await Product.deleteMany({ _id: { $in: farm.products } });
    console.log(res);
  }
});

const Farm = mongoose.model('Farm', farmSchema);
module.exports = Farm;
