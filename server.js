// config/db.js
const app = require('./app');
const mongoose = require('mongoose');

// MongoDB URI directly in code (Not using .env)
const MONGO_URI = 'mongodb+srv://Sudha:sudha2903@cluster0.wniakwi.mongodb.net/fsd';

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB');
  
  // Start server after DB connection
  app.listen(3001, '127.0.0.1', () => {
    console.log('🚀 Server is running @ http://127.0.0.1:3001');
  });
})
.catch((err) => {
  console.error('❌ Error connecting to MongoDB:', err.message);
});
