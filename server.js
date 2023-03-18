const express = require("express");
const app = express();
const cors = require('cors');

const data = [
  { id: 1, name: "John"  ,img: "https://cdn.memes.com/up/34528681649863107/i/1678714888888.jpg"},
  { id: 2, name: "Jane" , img: "https://cdn.memes.com/up/24246901585609535/i/1678899716527.jpg" },
  { id: 3, name: "Bob" , img: "https://cdn.memes.com/up/24246901585609535/i/1678891016634.jpg"},
];
// enable CORS for all routes
app.use(cors());
// Define the endpoint
app.get("/api/test", (req, res) => {
  // Create a sample dataset

  // Send the dataset as a JSON response
  res.json(data);
});

app.get("/api/test/:id", (req, res) => {
    // Create a sample dataset
    const item = data.filter(item => item.id === parseInt(req.params.id));
    res.json(item);
    });

// Start the server
app.listen(5000, () => console.log("Server started on port 5000"));