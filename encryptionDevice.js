var run = function() {
  var output = document.getElementById("output");
  var front = document.getElementById("front").value;
  output.innerHTML = btoa(front);
}

var run2 = function() {
  var output = document.getElementById("output");
  var front2 = document.getElementById("front2").value;
  output.innerHTML = atob(front2);
}
var encrypt = function() {
  var e = document.getElementById("encrypt");
  var d = document.getElementById("decrypt");
  var front = document.getElementById("front");
  e.style.visibility = "hidden";
  d.style.visibility = "hidden";
  front.style.visibility = "visible";
  document.getElementById("goBack").style.visibility = "visible";
}

var decrypt = function() {
  var e = document.getElementById("encrypt");
  var d = document.getElementById("decrypt");
  var front2 = document.getElementById("front2");
  e.style.visibility = "hidden";
  d.style.visibility = "hidden";
  front2.style.visibility = "visible";
  document.getElementById("goBack").style.visibility = "visible";
}

var goBack = function() {
  document.getElementById("goBack").style.visibility = "hidden";
  document.getElementById("encrypt").style.visibility = "visible";
  document.getElementById("decrypt").style.visibility = "visible";
  document.getElementById("front").style.visibility = "hidden";
  document.getElementById("front2").style.visibility = "hidden";
  document.getElementById("front").value = "";
  document.getElementById("front2").value = "";
  document.getElementById("output").innerHTML = "";
  document.getElementById("output2").innerHTML = "";
}
