let list = JSON.parse(localStorage.getItem("lista")) || [];
let h1 = document.querySelector("h1");
h1.innerText = "Administrador";

// if (localStorage.getItem("logged", false)) { 
//     window.location = "../pages/login.html";
// }

let h3 = document.querySelector("h3");
h3.innerText = "Productos";

let button = document.querySelector("button");
button.innerText = "AGREGAR PRODUCTO";

let table = document.querySelector("table");
let tbody = document.querySelector("tbody");

const agregarProducto = () => {
    button.addEventListener("click", (event) => { 
        event.preventDefault();})
    let id = document.querySelector("#id")
    let codigo = document.querySelector("#codigo")
    let nombre = document.querySelector("#nombre")
    let precio = document.querySelector("#precio")
    let stock = document.querySelector("#stock")
    list.push({id: id.value, codigo: codigo.value, nombre: nombre.value, precio: precio.value, stock: stock.value})
    let listaMapeada = list.map(fila => `<tr><td>${fila.id}</td><td>${fila.codigo}</td><td>${fila.nombre}</td><td>${fila.precio}</td><td>${fila.stock}</td><td><button onclick="editarFila()">Editar</button></td><td><button onclick="eliminarFila(${list.indexOf(fila)})">Eliminar</button></td></tr>`);
    tbody.innerHTML = listaMapeada.join().replaceAll(",", "")
    localStorage.setItem("lista", JSON.stringify(list));
    id.value = "";
    codigo.value = "";
    nombre.value = "";
    precio.value = "";
    stock.value = "";
}   
const editarFila = () => {    
    let listaMapeada = list.map(fila => `<tr><td contenteditable>${fila.id}</td><td contenteditable>${fila.codigo}</td><td contenteditable>${fila.nombre}</td><td contenteditable>${fila.precio}</td><td contenteditable>${fila.stock}</td><td><button onclick="editarFila()">Editar</button></td><td><button onclick="eliminarFila()">Eliminar</button></td></tr>`);
    tbody.innerHTML = listaMapeada.join().replaceAll(",", "")
}


const eliminarFila = (indice) => {
    let newList = [...list];
    newList.splice(indice, 1);
    list = newList;
    let listaMapeada = list.map(fila => `<tr><td>${fila.id}</td><td>${fila.codigo}</td><td>${fila.nombre}</td><td>${fila.precio}</td><td>${fila.stock}</td><td>${editando ? '' : '<button onclick="editarFila()">Editar</button>'}</td><td>${editando ? '' : `<button onclick="eliminarFila(${list.indexOf(fila)})">Eliminar</button>`}</td></tr>`);
    tbody.innerHTML = listaMapeada.join().replaceAll(",", "");
  }
