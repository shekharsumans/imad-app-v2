var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate =`
  <html>
   <head>
    <title> ${title }</title>
    <meta name="viewport" content="width=device-width, initiak-scalev=1" />
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
          ${content}
       </div>
    </div>
    </body>
   </html> 
   `;
   return htmlTemplate;
}
var articles =  {
   articleOne: {
    title: 'A1',
    heading: 'Shekhar A1',
    date: 'Apr 27, 1994',
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
   articleTwo :{
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
   articleThree : {
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
app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-one',function(req,res){
    res.send(createTemplate(articleOne));
});

app.get('/article-two',function(req,res){
    res.send(ctemp(articleTwo));
});

app.get('/article-three',function(req,res){
    res.send(ctemp(articleThree));
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
