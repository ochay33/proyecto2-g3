let arrayUsuarios = JSON.parse(localStorage.getItem("usuarios"));
let form = document.querySelector("form");

form.addEventListener("submit", (event) => {  //realizara un evento en especifico
	event.preventDefault();
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	let user = arrayUsuarios.find(usuario => usuario.emailActual === email && usuario.passwordActual === password);
	if (user) {
		window.location.href = "../index.html";
		alert("Bienvenido " + user.nameActual + "!");
	} else if (email === "elochay24@gmail.com" && password === "4321") {
		window.location.href = "../pages/admin.html";
		alert("Bienvenido administrador");
		localStorage.setItem("logged", true);
	} else {
		alert("Los datos ingresados son incorrectos");
	}
});