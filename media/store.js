// Función para obtener los productos desde el archivo JSON
function obtenerProductos() {
    return fetch('../media/productos.json')
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
    productos.forEach(producto => {
        // Creamos la carta del producto
        const card = document.createElement('div');
        card.className = "product-card";

        // Creamos y agregamos la imagen del producto
        const img = document.createElement('img');
        img.src = "."+producto.imagen;
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
}// This function filters the products based on the search query and then displays them
function searchProducts(query) {
    obtenerProductos()
        .then(productos => {
            // Filter the products based on the search query
            const filteredProducts = productos.filter(producto => 
                producto.nombre.toLowerCase().includes(query.toLowerCase()) ||
                producto.descripcion.toLowerCase().includes(query.toLowerCase())
            );
            
            // Clear the current displayed products
            const contenedorProductos = document.querySelector('#productos');
            contenedorProductos.innerHTML = '';
            
            // Display the filtered products
            mostrarProductos(filteredProducts);
        })
        .catch(error => {
            console.error('Hubo un problema con la operación fetch: ' + error.message);
        });
}

// This function sets up the search functionality
function setupSearch() {
    const searchInput = document.querySelector('#product-search');
    
    // Run the search function whenever the user types in the search bar
    searchInput.addEventListener('input', (event) => {
        searchProducts(event.target.value);
    });
}

// Update the main function to also set up the search functionality
function main() {
    obtenerProductos()
        .then(productos => {
            mostrarProductos(productos);
            setupSearch();
        })
        .catch(error => {
            console.error('Hubo un problema con la operación fetch: ' + error.message);
        });
}

// Ejecutamos la función principal cuando la página se ha cargado completamente
window.onload = main;