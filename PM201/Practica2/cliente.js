//Arreglo donde se guardan los productos 

const productos = [

    {
        nombre: "Hamburguesa",
        precio: 80
    },

    {
        nombre: "Pizza",
        precio: 120
    },

    {
        nombre: "Tacos",
        precio: 60
    }

];


// arreglo que guarda los productos
let pedidos = [];


// funcion para mostrar el menú
function mostrarMenu() {

    console.log(`
    ===== MENÚ =====

    1. Consultar productos
    2. Crear pedido
    3. Listar pedidos

    `);

    consultarProductos();

}


// funcion par consultar los productos
function consultarProductos() {

    console.log("===== PRODUCTOS =====");

    productos.forEach((producto, index) => {

        console.log(`
        ${index + 1}. ${producto.nombre} - $${producto.precio}
        `);

    });

}


// Función para crear el producto 
function crearPedido(indiceProducto) {

    let producto = productos[indiceProducto];

    pedidos.push(producto);

    console.log(`
    Pedido agregado:
    ${producto.nombre}
    `);

}


// LISTAR PEDIDOS
function listarPedidos() {

    console.log("===== pedidos =====");

    pedidos.forEach((pedido, index) => {

        console.log(`
        ${index + 1}. ${pedido.nombre} - $${pedido.precio}
        `);

    });

}



// PRUEBAS
crearPedido(0);
crearPedido(2);

listarPedidos();