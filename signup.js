function validateSignupForm() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	if (email == "" || name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
		return false;
	}
	else {
		alert("Successfully signed up");
		return true;
	}
}
