const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 3001;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/track', (req, res, next) => {
  const search = req.query.search || '';

  request({
    url: 'https://api.deezer.com/search?&q=' + search
  }, (err, _res, body) => {
    if (err)
      next(err);

    res.send(body);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));