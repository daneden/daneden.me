paras = document.querySelectorAll 'p'

for p in paras
  if p.textContent.substring(0, 1) == "“"
    p.classList.add 'p--oq'
