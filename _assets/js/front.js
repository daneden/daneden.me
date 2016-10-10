(function() {
  var width = document.documentElement.clientWidth;
  var height = document.documentElement.clientHeight;

  var canvas = document.createElement('canvas');
  canvas.style.position = 'absolute';
  canvas.style.top = '0px';
  canvas.style.left = '0px';
  canvas.style.zIndex = '-1';
  canvas.width = width;
  canvas.height = height;
  var c = canvas.getContext('2d');
  c.fillStyle = 'rgba(239, 84, 13, 1)';
  document.body.appendChild(canvas);

  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

  var noOfPoints = 3;
  var points = [];

  function initPoints(n) {
    points = [];
    for(var i = 0; i < n; i++) {
      points.push(getRandomPoint(width, height));
    }
  }

  initPoints(noOfPoints);

  function getRandomPoint(w, h) {
    return [Math.random() * w, Math.random() * h];
  }

  function drawPoints(p) {
    c.clearRect(0, 0, width, height);
    c.beginPath();
    c.moveTo(p[0][0], p[0][1]);
    for(var i = 1; i < p.length; i++) {
      c.lineTo(p[i][0], p[i][1]);
    }
    c.closePath();
    c.fill();
  }

  (function animloop(){
    requestAnimFrame(animloop);
    jitter(points);
  })();

  function jitter(p) {
    for(var j = 0; j < p.length; j++) {
      (function(i) {
        p[i][0] += (Math.random() * 2) - 1;
        p[i][1] += (Math.random() * 2) - 1;
      })(j);
    }

    drawPoints(p);
  }

  drawPoints(points);

  document.addEventListener('click', function() {
    noOfPoints++;
    if(noOfPoints == 10) {
      noOfPoints = 3;
    }
    initPoints(noOfPoints)
  });
})();
