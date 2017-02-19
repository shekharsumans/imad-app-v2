var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content = {
    title: 'A1'
    heading: 'Shekhar A1'
    date: 'Apr 27, 1994'
    content: `<p>
             THis is the content for my first article.  
          </p>
       <p>
           I hate to write HTML code.
          </p>
       <p>
            To make a webapp i must have to use HTML so here it is<br>
           my first WEBAPP
          </p>`
};

app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-one',function(req,res){
    res.sendFile(path.join(__dirname, '', 'article-one.html'));
});

app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, '', 'article-two.html'));
});

app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, '', 'article-three.html'));
});

app.get('/ui/madi.png', function (req,res){
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
})

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
