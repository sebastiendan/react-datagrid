const express = require('express');
const request = require('request');
const qs = require('querystring');
const app = express();
const port = process.env.PORT || 3001;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/track', (req, res, next) => {
  const search = req.query.search || '',
        index = req.query.index || 0,
        limit = req.query.limit || 40,
        query = qs.stringify({q: search, index: index, limit: limit});

  request({
    url: 'https://api.deezer.com/search?' + query
  }, (err, _res, body) => {
    const _body = JSON.parse(body);

    if (err)
      next(err);
    
    if (_body.error) {
      res.status(_body.error.code).send({message: _body.error.message});
    } else {
      res.send(body);
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));