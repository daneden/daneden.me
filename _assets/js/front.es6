let el = document.querySelector('.j1'),
    jb = document.querySelector('.jb'),
    main = document.querySelector('.main')
    em = ['em-poop', 'em-hundred', 'em-sparkles', 'em-peace'],
    z = [-1, 0, 1];

document.addEventListener('click', function(e){
  if (e.target == jb) {
    let s = Math.round(Math.random() * (70 + 10) + 10),
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
});

let c = ['c1', 'c2', 'c3', 'c4', 'c5'];
document.documentElement.classList.add(c[Math.floor(Math.random() * c.length)])

document.addEventListener('mousemove', function(e){
  let mq = window.matchMedia("(min-width: 1000px)"),
      w = getComputedStyle(document.documentElement).width.slice(0,-2),
      h = getComputedStyle(document.documentElement).height.slice(0,-2),
      rx = ((h / 2) - e.pageY) / 50,
      ry = ((w / 2) - e.pageX) / 100;

  if(mq.matches) {
    main.style.transform = `rotateX(${rx}deg) rotateY(${-ry}deg)`
  } else {
    main.style.transform = ""
  }
});
