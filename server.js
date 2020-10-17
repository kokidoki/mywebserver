const express = require('express');
const app = express();
app.use(express.static('web'));
app.listen(8000, () => {
  console.log('Server is ready');
});