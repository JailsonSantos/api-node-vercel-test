const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Success galera 2!!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sever is running in PORT: ${PORT}`));