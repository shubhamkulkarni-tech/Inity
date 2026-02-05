import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('THE SERVER IS WORKING FINE....');
});

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
