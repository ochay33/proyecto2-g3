function registro() {

    const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;

	if (email === "leonardodiaz96@hotmail.com" && password === "1234") {
		window.location = "../pages/login.html";
        alert("Logueate por favor");
	}
	else if (email === "elochay24@gmail.com" && password === "4321") {
		window.location = "../pages/login.html";
		alert("Logueate por favor");
	} 
	else {
		alert("Los datos ingresados son incorrectos")
	}
}