// Productos
const products = [
    { id: 1, name: "Cortadora de cabello", price: "$75.000", description: "Cortadora de pelo eléctrica HIENA,cortadora de acabado de peluquero,cortadora de barba inalambrica recargable por USB, HYN-212 de corte de pelo húmedo y seco.",image: "imagenes/maquina de cortar.jpeg" },
    { id: 2, name: "Hojas de afeitar ultra", price: "$2.000", description: "Hojas Caja 5 unidades a 2000 unidad 500", image: "imagenes/hoja de afeitar.jpeg" },
    { id: 3, name: "Maquina de afeitar inoxidable", price: "$29.000", description: "Maquina de afeitar inoxidable de hojas cambiables con estuche espejo.", image: "imagenes/maquina de afeitar.jpeg" },
    { id: 4, name: "Bomba de aire manual", price: "$55.000", description: "Bomba de aire manual para inflador de neumáticos, bicicletas de montaña, válvula scharader, accesoríos,80 PSI.", image: "imagenes/bomba.jpeg" },
    { id: 5, name: "Y80 ", price: "$50.000", description: "Y80 con luz ambiental digital, WTS Bluetooth 5,deportivos,durabilidad de la carga y almacena carga la cajas.", image: "imagenes/y80.jpeg" },
    { id: 6, name: "Cargador rápido de 120w", price: "$40.000", description: "Cargador rápido de 120w tipo C USB C PD adaptador de cargador USB 3,0 de carga rápida.", image: "imagenes/cargador.jpeg" },
    { id: 7, name: "Cuchillas de afeitar dobles", price: "$35.000", description: "Cuchillas de afeitar dobles, cabezales reemplazables, máquina de afeitar,fina manual 1 marco de cuchilla,20;cabezales.", image: "imagenes/cuchillas.jpeg" },
];

// Renderizar catálogo de productos
const catalog = document.getElementById("productCatalog");
products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
        <img src="${product.image}" alt="Imagen de ${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <div class="price">${product.price}</div>
        <a href="https://wa.me/+573212239526?text=Estoy%20interesado%20en%20${encodeURIComponent(product.name)}" class="contact">Contactar por WhatsApp</a>
    `;

    catalog.appendChild(productElement);
});

// Lógica del botón flotante
const contactBtn = document.getElementById("contactBtn");
const contactMenu = document.querySelector(".contact-menu");

contactBtn.addEventListener("click", () => {
    contactMenu.style.display = contactMenu.style.display === "block" ? "none" : "block";
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener("click", (event) => {
    if (!contactMenu.contains(event.target) && event.target !== contactBtn) {
        contactMenu.style.display = "none";
    }
});

