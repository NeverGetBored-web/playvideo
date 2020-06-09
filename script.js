function background() {
  var body = document.getElementsByTagName("body")[0];
  var button = document.getElementById("modebtn");
  if (body.className == "black") {
    body.className = "white";
    button.style.color = "white";
    button.className = "nav-link btn btn-dark";
    button.innerHTML = "Dark Mode";
  } else {
    body.className = "black";
    button.style.color = "black";
    button.className = "nav-link btn btn-light";
    button.innerHTML = "Light Mode";
  }
}
