'use strict';

var port = process.env.PORT || 8080,
    express = require('express'),
    app = express();


app.use(express.static(__dirname + '/../public'));

app.get('/', function(req, res){
  res.render('index.html');
});

app.listen(port, function(){
  console.log('Express is listening on port: ', port);
});

