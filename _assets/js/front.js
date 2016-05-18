var el = document.querySelector('.j1');
var jb = document.querySelector('.jb');
var em = ['em-poop', 'em-hundred', 'em-sparkles', 'em-peace'];
var z = [-1, 0, 1];

document.addEventListener('click', function(e){
  if (e.target == jb) {
    var s = Math.round(Math.random() * (70 + 10) + 10),
        n = document.createElement('span'),
        d = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
        ds = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    ds.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "#" + em[Math.floor(Math.random() * em.length)]);

    d.classList.add('emegg');
    d.setAttribute('width', s);
    d.setAttribute('height', s);

    d.appendChild(ds);
    n.appendChild(d);
    n.style.position = "absolute";
    n.style.top = String((Math.random() * 90) + "vh");
    n.style.left = String((Math.random() * 90) + "vw");
    n.style.zIndex = z[Math.floor(Math.random() * z.length)];

    document.body.appendChild(n);
  }
})
