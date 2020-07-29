
var clock = document.getElementById("clock");
clock.innerHTML="Heloo";

function moveClock (){
  var now = new Date();
  var hours = now.getHours();
  var mins = now.getMinutes(); 
  clock.innerHTML =`${hours}:${mins}`;
  setTimeout("moveClock()",1000);
}