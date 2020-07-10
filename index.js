const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Success! Your app is listening at http://%s:%s', host, port);
});