console.log("******Ejercicio 4*******")

const productos = [
    { nombre: "Televisor", precio: 500, categoria: "Electronica" },
    { nombre: "Silla", precio: 100, categoria: "Muebles" },
    { nombre: "Laptop", precio: 800, categoria: "Electronica" },
    { nombre: "Mesa", precio: 200, categoria: "Muebles" },
    { nombre: "Auriculares", precio: 150, categoria: "Electronica" }
   ];

const filtrado = productos.filter((producto) => producto.categoria == "Electronica")

console.log("Productos electronicos con filter: ")
for(let i = 0; i<filtrado.length; i++){
    console.log("nombre: ", filtrado[i].nombre, " precio: ", filtrado[i].precio, " Categoria: "+filtrado[i].categoria)
}

const nombreFiltrado = filtrado.map((nombre) => nombre.nombre)

console.log("nombre de productos electronicos con map: ")
for(let i = 0; i<nombreFiltrado.length; i++){
    console.log("nombre: ", nombreFiltrado[i])
}


const precioTotal = filtrado.reduce((total, producto) => total + producto.precio, 0);

console.log("precio Total: ",precioTotal)