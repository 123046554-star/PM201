// cliente.js

const readline = require("node:readline/promises");

const cocina = require("../cocina");
const caja = require("../caja");

const consola = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/// funcion para mostrar productos disponibles
function mostrarProductos() {

    console.log("===== PRODUCTOS =====");

    cocina.productos.forEach(producto => {

        console.log(
            `${producto.id}. ${producto.nombre} - $${producto.precio}`
        );

        console.log(`Promocion: ${producto.promocion}`);

    });

}

// Menu
function mostrarMenu() {

    console.log("\n===== CLIENTE =====");

    console.log("1. Ver productos");
    console.log("2. Crear pedido");
    console.log("3. Ver pedidos");
    console.log("4. Ver total");
    console.log("0. Salir");

}

//funcion para mostrar el estado del pedido 
function estadoPedido(cancelado = false) {

    console.log("Estado: Pedido recibido");

    if (cancelado) {

        setTimeout(() => {

            console.log("Estado: Pedido cancelado");

        }, 2000);

    } else {

        setTimeout(() => {

            console.log("Estado: Preparando pedido...");

        }, 2000);

        setTimeout(() => {

            console.log("Estado: Empacando pedido...");

        }, 4000);

        setTimeout(() => {

            console.log("Estado: Pedido entregado");

        }, 6000);

    }

}

// Inicializa el menu
async function iniciarMenu() {

    let opcion = "";

    while (opcion !== "0") {

        mostrarMenu();

        opcion = await consola.question(
            "Elige una opcion: "
        );

        if (opcion === "1") {

            mostrarProductos();

        } else if (opcion === "2") {

            mostrarProductos();

            let id = Number(
                await consola.question(
                    "ID del producto: "
                )
            );

            caja.agregarPedido(id);

            estadoPedido();

        } else if (opcion === "3") {

            caja.listarPedidos();

        } else if (opcion === "4") {

            caja.calcularCuenta();

        } else if (opcion !== "0") {

            console.log("Opcion no valida.");

        }

    }

    consola.close();

    console.log("Programa terminado.");

}

iniciarMenu();