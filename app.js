const express = require('express');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

app.use(express.json());
app.use('/api/recipes', recipeRoutes);

module.exports = app;
