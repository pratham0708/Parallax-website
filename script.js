var loader = document.getElementById("preloader");
window.addEventListener("load", () => {
  setInterval(() => {
  
      loader.style.display = "none";
    
  }, 500); })

let text = document.getElementById('text');
let moon = document.getElementById('moon');
let stars = document.getElementById('stars');
let mountain_behind = document.getElementById('mountains_behind'); 
let btn = document.getElementById('btn');

let mountain_front = document.getElementById('mountains_front');
let header = document.getElementById('header');

  
window.addEventListener('scroll', function(){

let value = window.scrollY;
    
text.style.marginRight =  value * 4 + 'px';
text.style.marginTop =  value * 1.4  + 'px';
btn.style.marginTop =  value * 1.4  + 'px';
stars.style.left =  value * 0.25 + 'px';
moon.style.top = value * 1.05 + 'px';
mountain_behind.style.top = value * 0.5 + 'px';
mountain_front.style.bottom = value * 0.2 + 'px';
header .style.bottom = value * 0.5 + 'px';

})