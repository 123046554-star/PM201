// Inserts de productos disponibles
let productos = [
    {
        id: 1,
        nombre: "Cafe Latte",
        precio: 65,
        categoria: "Bebida",
        promocion: "2x1"
    },
    {
        id: 2,
        nombre: "Cheesecake",
        precio: 75,
        categoria: "Postre",
        promocion: "10% de descuento"
    },
    {
        id: 3,
        nombre: "Capuccino",
        precio: 70,
        categoria: "Bebida",
        promocion: "Sin promociones disponibles"
    }
];


// Declaramos la variable para que se almacenen los pedidos
let pedidos = [];


// Variable para el total acumulado
let totalAcumulado = 0;


// Funcion para mostrar productos
function consultarProductos() {

    console.log("===== MENU =====");

    productos.forEach(function(producto) {

        console.log(
            producto.id + ". " +
            producto.nombre + " - $" +
            producto.precio + " - " +
            producto.categoria + " - " +
            producto.promocion
        );

    });

}


// Funcion para filtrar productos
function filtrarProductos(categoria) {

    console.log("===== FILTRO =====");

    let productosFiltrados = productos.filter(function(producto) {

        return producto.categoria.toLowerCase() === categoria.toLowerCase();

    });


    if (productosFiltrados.length === 0) {

        console.log("No hay productos disponibles.");
        return;

    }


    productosFiltrados.forEach(function(producto) {

        console.log(
            producto.id + ". " +
            producto.nombre + " - $" +
            producto.precio + " - " +
            producto.promocion
        );

    });
}


//Funcion para buscar productos por medio del ID
function buscarProducto(id) {

    return productos.find(function(producto) {

        return producto.id === id;

    });

}


// Funcion para crear el pedido 
function crearPedidoCliente(idProducto) {

    let producto = buscarProducto(idProducto);

    if (!producto) {

        console.log("Producto no encontrado.");
        return;

    }

    pedidos.push(producto);

    totalAcumulado += producto.precio;

    console.log("Pedido agregado:");

    console.log(
        producto.nombre + " - $" + producto.precio
    );

}


// funcion para mostrar los pedidos que el cliente realizó
function listarPedidosCliente() {

    console.log("===== PEDIDOS =====");

    if (pedidos.length === 0) {

        console.log("No hay pedidos.");

    }

    pedidos.forEach(function(pedido, index) {

        console.log(
            (index + 1) + ". " +
            pedido.nombre + " - $" +
            pedido.precio
        );

    });

    console.log("TOTAL: $" + totalAcumulado);

}



// MENU INTERACTIVO
const readline = require("node:readline/promises");

const consola = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// MOSTRAR OPCIONES
function mostrarOpciones() {

    console.log("\n===== CLIENTE =====");

    console.log("1. Ver productos");
    console.log("2. Filtrar productos");
    console.log("3. Crear pedido");
    console.log("4. Ver pedidos");
    console.log("0. Salir");

}


// INICIAR MENU
async function iniciarMenu() {

    let opcion = "";

    while (opcion !== "0") {

        mostrarOpciones();

        opcion = await consola.question(
            "Elige una opcion: "
        );


        if (opcion === "1") {

            consultarProductos();

        } else if (opcion === "2") {

            let categoria = await consola.question(
                "Categoria (Bebida/Postre): "
            );

            filtrarProductos(categoria);

        } else if (opcion === "3") {

            consultarProductos();

            let idProducto = Number(
                await consola.question(
                    "ID del producto: "
                )
            );

            crearPedidoCliente(idProducto);

        } else if (opcion === "4") {

            listarPedidosCliente();

        } else if (opcion !== "0") {

            console.log("Opcion no valida.");

        }

    }

    consola.close();

    console.log("Programa terminado.");

}


iniciarMenu();