const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Recipe = require('./models/Recipe.js'); // Correct import

const app = express();
app.use(cors());
app.use(express.json());

const connectWithRetry = () => {
  mongoose.connect('mongodb+srv://test1234:test1234@cluster0.4duo0ts.mongodb.net/flavor_factory', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err.message);
      setTimeout(connectWithRetry, 1000); // Retry after 5 seconds
    });
};

connectWithRetry();

app.get('/getRecipes', (req, res) => {
  Recipe.find() // Correct model reference
    .then(recipes => res.json(recipes))
    .catch(error => res.json(error));
});

app.listen(4000, () => {
  console.log("Server is running");
});

