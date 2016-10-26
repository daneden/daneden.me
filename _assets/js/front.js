let img = document.querySelector('.frontpage__shell > img');
let n = Math.ceil(Math.random() * 40);

function pad(str, len) {
  let s = str + '';
  if(s.length === len) return;
  while(s.length < len) {
    s = '0' + s;
  }

  return s;
}

let imageNo = pad(n, 4);
let imageName = img.getAttribute('data-src');
imageName = imageName.replace(/-([0-9]{4})\.png/, `-${imageNo}.png`);
img.setAttribute('data-src', imageName);
