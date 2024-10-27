const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000; // You can choose any port that suits you

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // For parsing application/json

// Sample data to be sent in response
const sampleData = [
  { id: 1, name: 'Item 1', description: 'This is the first item.' },
  { id: 2, name: 'Item 2', description: 'This is the second item.' },
  { id: 3, name: 'Item 3', description: 'This is the third item.' },
];
//question 2
// Define a root route
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Define the API endpoint
app.get('/api/data', (req, res) => {
  res.json(sampleData); // Send the sample data as JSON
});


//question 3
// Sample data
const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
  { id: 4, name: 'Date' },
  { id: 5, name: 'Elderberry' },
];

// Route to get items
app.get('/api/items', (req, res) => {
  res.json(items);
});





// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
