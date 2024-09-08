function sendMail() {
	var fname = document.getElementById("name").value;
	var lname = document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var gmassage = document.getElementById("gmassage").value;

	// Check if any of the required fields are empty
	if (fname === "" || fname.length > 10 || fname.length < 3) {
		alert("Your name is invalid !");
		return false;
	} else if (lname === "" || lname.length > 10 || lname.length < 3) {
		alert("Your last name is invalid !");
		return false;
	} else if (!email.includes("@")) {
		alert("Your Email is not correct !");
		return false;
	} else if (gmassage === "") {
		alert("Message part can't be empty !");
		return false;
	}

	document.getElementById("submit").value = "Sending...";
	document.querySelector(".popup").style.transitionDuration = "0.5s";
	document.querySelector(".popup").style.transform = "scale(1)";

	var params = {
		name: document.getElementById("name").value,
		lname: document.getElementById("lname").value,
		email: document.getElementById("email").value,
		gmassage: document.getElementById("gmassage").value,
	};

	document.getElementById("name").value = "";
	document.getElementById("lname").value = "";
	document.getElementById("email").value = "";
	document.getElementById("gmassage").value = "";

	
	emailjs
		.send("service_9caae1v", "template_s87404r", params)
		.then(function (res) {});
	return true;
}

function sendGmessage() {
	var x = document.getElementById("gmessage").value;

	if (x === "") {
		alert("The message can't be empty !");
		return false;
	}
	var params = {
		gmessage: document.getElementById("gmessage").value,
	};

	emailjs
		.send("service_9caae1v", "template_s87404r", params)
		.then(function (res) {});

	document.getElementById("gmessage").value = "";

	return true;
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

function hidePopup() {
	document.querySelector(".popup").style.transform = "scale(0)";
	document.getElementById("submit").value = "Send";
}
