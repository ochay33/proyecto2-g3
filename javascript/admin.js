let h1 = document.querySelector("h1");
h1.innerText = "Administrador";

let h3 = document.querySelector("h3");
h3.innerText = "Productos";

let button = document.querySelector("button");
button.innerText = "AGREGAR PRODUCTO";

let table = document.querySelector("table");
let tbody = document.querySelector("tbody");

function agregarProducto() {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    let td = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    let button = document.createElement("button");
    td6.appendChild(button);
    button.innerText = "Editar";
    let button2 = document.createElement("button");
    td7.appendChild(button2);
    button2.innerText = "Eliminar";
}