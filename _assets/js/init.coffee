# Init.coffee
# ===========
#
# Basically just adds a class to the body on a settimeout to animate the site logo

bd = document.body

deinit = ->
  bd.classList.remove "js-init"

bd.classList.add "js-init"

setTimeout deinit, 2000
