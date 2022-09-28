const mongoose = require('mongoose');
const Product = require('./models/product');

main().catch((err) => console.log(err));

async function main() {
  mongoose.connect('mongodb://localhost:27017/fruitDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connected to MongoDB');
}

// const p = new Product({
//   name: 'Apple',
//   price: 1.99,
//   category: 'fruit',
// });

// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const seedProducts = [
  {
    name: 'Apple',
    price: 1.99,
    category: 'fruit',
  },
  {
    name: 'Orange',
    price: 1.2,
    category: 'fruit',
  },
  {
    name: 'Banana',
    price: 1.99,
    category: 'fruit',
  },
  {
    name: 'Carrot',
    price: 0.6,
    category: 'vegetable',
  },
  {
    name: 'Celery',
    price: 1.0,
    category: 'vegetable',
  },
  {
    name: 'Milk',
    price: 2.99,
    category: 'dairy',
  },
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
