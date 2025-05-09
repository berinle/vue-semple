const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Endpoint to fetch a random joke
app.get('/api/jokes/random', async (req, res) => {
  try {
    const response = await axios.get('https://v2.jokeapi.dev/joke/Programming?safe-mode');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching joke:', error);
    res.status(500).json({ error: 'Failed to fetch joke' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 