var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles =  {
   'article-one': {
    title: 'A1',
    heading: 'Shekhar A1',
    date: 'Apr 27, 1994',
    image: '<img src = "abc.jpg"alt="Mountain View">',
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
    }, 
   'article-two': {
    title: 'A2',
    heading: 'Shekhar A2',
    date: 'Oct 01, 1994',
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
    },
   'article-three': {
    title: 'A3',
    heading: 'Shekhar A3',
    date: 'Dec 04, 1994',
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
    }
};
function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var image = data.image;
    var content = data.content;
    var htmlTemplate =`
    <html>
     <head>
    <title> ${title }</title>
    <meta name="viewport" content="width=device-width" >
      <link href="/ui/style.css" rel="stylesheet" />
    </head>

    <body>
     <div class="container">
      <div>
      <a href= "/">Home</a>
      </div>
     <hr/>
          <h3> ${heading}
          </h3>
          
      <div>
          ${date}
       </div>

       <div>
          ${image}
          </div>
      <div>
          ${content}
       </div>
     </div>
     </body>
     </html> 
     `;
     return htmlTemplate;
}
app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/:articleName',function(req,res){
    //articleName ==article-one
    //articles[articleName] =={} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/abc.jpg', function (req,res){
  res.sendFile(path.join(__dirname, 'ui', 'abc.jpg'));
})

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
