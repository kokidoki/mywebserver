const express = require('express');
const app = express();
app.use(express.static('web'));
app.get('/hello', (req, res) => {
  console.log(req);
  res.send('hi ' + new Date());
});
app.listen(8000, () => {
  console.log('Server is ready');
});