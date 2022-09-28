const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const port = 3000;

const Product = require('./models/product');

main().catch((err) => console.log(err));

async function main() {
  mongoose.connect('mongodb://localhost:27017/fruitDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connected to MongoDB');
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
  res.send('woof');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
