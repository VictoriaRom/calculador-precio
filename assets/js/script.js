let precioBase = 1000;
const precio = document.querySelector("#precioBase");
precio.innerHTML = precioBase;

// elementos del DOM necesarios
let cantidadElemento = document.querySelector('#cantidad');
let totalPagarElemento = document.querySelector('#totalPagar');
let botonIncremento = document.querySelector('#incremento');
let botonDecremento = document.querySelector('#decremento');

let cantidad = 0; 

botonIncremento.onclick = function() {
    cantidad++; // aumenta el valor
    cantidadElemento.value = cantidad; 
    totalPagarElemento.innerHTML = `$${cantidad * precioBase}`;
};

botonDecremento.onclick = function() {
    if (cantidad > 0) {
        cantidad--; // disminuye el valor
        cantidadElemento.value = cantidad; 
        totalPagarElemento.innerHTML = `$${cantidad * precioBase}`;
    }
};

cantidadElemento.value = cantidad;
totalPagarElemento.innerHTML = `$${cantidad * precioBase}`;

