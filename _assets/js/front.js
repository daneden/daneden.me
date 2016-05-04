var el = document.querySelector('.j1');
var ja = document.querySelector('.ja');
var jb = document.querySelector('.jb');
var em = ['\uD83D\uDCAF', '\uD83D\uDCA9', '\u270C\uFE0E', '\u2728'];
var z = [-1, 0, 1];
var i = 0;

document.addEventListener('click', function(e){
  if(e.target == ja) {
    el.textContent = el.textContent.substr(0, i) + em[Math.floor(Math.random() * em.length)] + el.textContent.substr(i + 1);
    i++;
  } else if (e.target == jb) {
    var n = document.createElement('span');
    n.textContent = em[Math.floor(Math.random() * em.length)];
    n.style.position = "absolute";
    n.style.fontSize = String((Math.random() * (4 + .875) + .875) + "rem");
    n.style.top = String((Math.random() * 90) + "vh");
    n.style.left = String((Math.random() * 90) + "vw");
    n.style.zIndex = z[Math.floor(Math.random() * z.length)];

    document.body.appendChild(n);
  }
})
