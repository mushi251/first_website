document.body.onkeyup = function(event) {
  console.log(event.keyCode);
  if (event.keyCode == 68)
  // change the class of body 
  document.body.classList.toggle("dark");
}