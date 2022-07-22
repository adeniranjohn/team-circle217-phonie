import startApp from './app.mjs';

//document.addEventListener('DOMContentLoaded', startApp());
//document.getElementById('button_app').onclick = startApp();
document.getElementById("button_app").addEventListener("click", function(event) {
  event.preventDefault();
  startApp();
});
//I'm still working on this.