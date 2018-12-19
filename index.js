require('marko/node-require');

let express = require('express');
let markoExpress = require('marko/express');
let app = express();
let port = 8900;
let bodyParser = require("body-parser");

// __dirname is global variable!
let path = require('path');
let viewsDirectory = path.join(__dirname, '/server/views');
let publicDirectory = path.join(__dirname, '/public');
let wishList = [
  {
    name: 'Bag',
    description: 'Black leather',
    image: 'images/bag.jpg'
  },
  {
    name: 'Shoes',
    description: 'Old school rubber',
    image: 'images/shoes.jpg'
  },
  {
    name: 'Watch',
    description: 'Stainless steel',
    image: 'images/watch.jpg'
  }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicDirectory));
app.use(markoExpress());

app.get('/', function(req, res) {
  let view = require(path.join(viewsDirectory, 'index.marko'));
  let data = {
    title: 'Wish List',
    wishList: wishList
  };
  res.marko(view, data);
});

app.get('/episodes', function(req, res) {
  let view = path.join(viewsDirectory, 'index.html');
  res.type('html');
  res.sendFile(view);
});

app.get('/updates', function(req, res) {
  let view = path.join(viewsDirectory, 'index.html');
  res.type('html');
  res.sendFile(view);
});

app.get('/place', function(req, res) {
  let view = require(path.join(viewsDirectory, 'comment.marko'));
  let data = {};
  res.marko(view, data);
});

app.post('/place', (req, res) => {
  let body = req.body;
  wishList.push({
    name: body.name,
    description: body.description,
    image: body.image
  });
  res.redirect('/');
});

app.listen(port, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening to ' + port);
});