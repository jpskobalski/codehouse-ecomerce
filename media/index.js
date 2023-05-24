// Función para obtener los productos desde el archivo JSON
function obtenerProductos() {
    return fetch('./media/productos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al obtener los productos");
            }
            return response.json();
        })
        .catch(error => {
            console.error('Hubo un problema con la operación fetch: ' + error.message);
        });
}

// Función para mostrar los productos en el HTML
function mostrarProductos(productos) {
    const contenedorProductos = document.querySelector('#productos');
    const primerosProductos = productos.slice(0, 4);
    primerosProductos.forEach(producto => {
        // Creamos la carta del producto
        const card = document.createElement('div');
        card.className = "product-card";

        // Creamos y agregamos la imagen del producto
        const img = document.createElement('img');
        img.src = producto.imagen;
        card.appendChild(img);

        // Creamos y agregamos el nombre del producto
        const nombre = document.createElement('h2');
        nombre.textContent = producto.nombre;
        card.appendChild(nombre);

        // Creamos y agregamos la descripción del producto
        const descripcion = document.createElement('p');
        descripcion.textContent = producto.descripcion;
        card.appendChild(descripcion);

        // Agregamos la carta al contenedor de productos
        contenedorProductos.appendChild(card);
    });
}

// Función principal que obtiene y muestra los productos
function main() {
    obtenerProductos()
        .then(productos => {
            mostrarProductos(productos);
        })
        .catch(error => {
            console.error('Hubo un problema con la operación fetch: ' + error.message);
        });
}

// Ejecutamos la función principal cuando la página se ha cargado completamente
window.onload = main;