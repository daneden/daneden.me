// Toggle night theme
var d = document.documentElement,
    t = document.querySelectorAll(".js--toggle-lights")[0],
    m = localStorage.getItem("nightmode");

if(m == "true") {
  d.classList.add("night-mode");
}

t.addEventListener("click", function(){
  if(d.classList.contains("night-mode")) {
    d.classList.remove("night-mode");
    localStorage.setItem("nightmode", "false");
  } else {
    d.classList.add("night-mode");
    localStorage.setItem("nightmode", "true");
  }
});
