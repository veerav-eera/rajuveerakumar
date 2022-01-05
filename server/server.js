const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// server/index.js
const path = require('path');

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../nft-game-website/public')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../nft-game-website/public', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});