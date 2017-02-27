console.log('Loaded!');

var elemnt = document.getElementById('main-text');
elemnt.innerHTML = 'suman shekhar';
//move the image
var img = document.getElementById('abc4');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight, 10);
  };