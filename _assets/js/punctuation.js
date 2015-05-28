var paras = document.querySelectorAll('p');

for(var i = 0; i < paras.length; i++) {
  if(paras[i].textContent.substring(0, 1) == '“') {
    paras[i].classList.add('p--oq');
  }
}
