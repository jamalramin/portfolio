function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    gmessage: document.getElementById("gmassage").value,
  };
  emailjs
    .send("service_9caae1v", "template_s87404r", params)
    .then(function (res) {});
}

function increase() {
  var nav = document.querySelector("nav");
  nav.style.width = "100%";
  nav.style.transitionDuration = "0.5s";
}

function dec() {
  var nav = document.querySelector("nav");
  nav.style.width = "0%";
  nav.style.transitionDuration = "0.5s";
}

function clean() {
  document.getElementById("submit").value = "Sending...";
  document.getElementById("name").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("gmassage").value = "";
  document.querySelector(".popup").style.transitionDuration = "0.5s";
  document.querySelector(".popup").style.transform = "scale(1)";
}

function hidePopup() {
  document.querySelector(".popup").style.transform = "scale(0)";
}
