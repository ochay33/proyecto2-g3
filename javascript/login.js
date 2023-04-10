function login() {

    const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;

	if (email === "leonardodiaz96@hotmail.com" && password === "1234") {
		window.location = "../index.html";
        alert("Bienvenido usuario " + email)
	}
	else if (email === "elochay24@gmail.com" && password === "4321") {
		window.location = "../pages/admin.html";
		aleert("Bienvenido usuario " + email);
	} 
	else {
		alert("Los datos ingresados son incorrectos")
	}
}