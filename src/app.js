const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Success galera 3!!' });
});

module.exports = app;