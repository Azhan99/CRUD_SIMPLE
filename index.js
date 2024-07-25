const express = require('express');
const productroute=require('./routes/productroutes')
const app = express();
const mongoose = require('mongoose');

// Middleware to parse JSON
app.use(express.json());
//Middleware to use forms
app.use(express.urlencoded({extended:false}))

//To find each entry from the table
app.use('/api/product',productroute)

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://admin:admin@cluster0.iiyewty.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB!');

    // Define a route to handle GET requests to the root URL after the database connection is successful
    app.get('/', (req, res) => {
      res.send('Hello from Server with nodemon');
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

// Start the server and listen on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});