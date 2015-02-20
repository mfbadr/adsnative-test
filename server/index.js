'use strict';

var port = process.env.PORT,
    express = require('express'),
    app = express();

console.log('Express is listening on port: ', port);

app.use(express.static(__dirname + '/../public'));

app.get('/', function(req, res){
  res.render('index.html');
});

app.listen(port)

