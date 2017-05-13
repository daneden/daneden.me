'use strict';

let el = document.querySelector('.j1'),
    jb = document.querySelector('.jb'),
    main = document.querySelector('.main'),
    mainImg = document.querySelector('.main-image__image'),
    em = ['em-poop', 'em-hundred', 'em-sparkles', 'em-peace'],
    z = [-1, 0, 1];

document.addEventListener('click', function (e) {
    if (e.target == jb) {
        let s = Math.round(Math.random() * (70 + 10) + 10),
            n = document.createElement('span'),
            d = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
            ds = document.createElementNS('http://www.w3.org/2000/svg', 'use'),
            e = em[Math.floor(Math.random() * em.length)];

        ds.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "#" + e);

        d.classList.add('emegg');
        d.classList.add(e);
        d.setAttribute('width', s);
        d.setAttribute('height', s);

        d.appendChild(ds);
        n.appendChild(d);
        n.style.position = "absolute";
        n.style.top = String(Math.random() * 90 + "vh");
        n.style.left = String(Math.random() * 90 + "vw");
        n.style.zIndex = z[Math.floor(Math.random() * z.length)];

        document.body.appendChild(n);
    }
});

document.addEventListener('mousemove', function (e) {
    let w = getComputedStyle(document.documentElement).width.slice(0, -2),
        h = getComputedStyle(document.documentElement).height.slice(0, -2),
        rx = (h / 2 - e.pageY) / 50,
        ry = (w / 2 - e.pageX) / 100;

    main.style.transform = 'rotateX(' + rx + 'deg) rotateY(' + -ry + 'deg)';
    mainImg.style.transform = `
      translate3d(${ry * 3}px, ${rx * 3}px, 0)
      rotateX(${rx*-2}deg) rotateY(${ry*-2}deg)
    `
});
