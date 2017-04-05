console.log('Loaded!');

var elemnt = document.getElementById('main-text');
elemnt.innerHTML = 'suman shekhar';
//move the image
var img = document.getElementById('abc4');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight, 30);
  };
  
  //submit name
  var nameInput = document.getElementById('name');
  var name = nameInput.value;
  var submit = document.getElementById('submit_btn');
  submit.onclick = function () {
      //make a request to the server and send the name
      //capture a list of names and render it as alist
      var names = ['name1', 'name2','name3','name4','name5'];
      var list = '';
      for (var i=0; i< names.length; i++){
          list +='<li>'+ names[i] + '</li>';
      }
      var ul = document.getElementById('namelist');
      ul.innerHTML = list;
  };