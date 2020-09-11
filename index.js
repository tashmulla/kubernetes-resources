const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`Success! You've reached the latest version (2)!`);
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Your app is listening at http://%s:%s', host, port);
});