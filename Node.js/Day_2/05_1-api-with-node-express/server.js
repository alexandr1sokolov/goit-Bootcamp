let express = require('express');

let app = express();

let artists = [
  {
    id: 1,
    name: 'Metallica',
  },
  {
    id: 2,
    name: 'Iron Maiden'
  },
  {
    id: 3,
    name: 'Deep Purple'
  }
];

app.get('/', function (req, res) {
  res.send('Hello API');
})

app.get('/artists', function (req, res) {
  res.send(artists);
})
app.get('/artists/:id', function (req, res) {
  console.log(req.params);
  let artist = artists.find(function (artist) {
    return artist.id === Number(req.params.id)
  });
  res.send(artist);
})
app.get('/artists/name/:name', function (req, res) {
  console.log(req.params);
  var artist = artists.find(function (artist) {
    return artist.name === req.params.name
  });
  res.send(artist);
})
app.listen(3012, function () {
  console.log('API app started');
})
//http://localhost:3012/artists/name/Metallica