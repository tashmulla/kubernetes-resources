const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Success! Your app is working.');
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Your app is listening at http://%s:%s', host, port);
});