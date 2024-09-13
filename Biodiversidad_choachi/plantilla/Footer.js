document.addEventListener('DOMContentLoaded', function() {
    var footerContainer = document.querySelector('.Footer');

    // Si el contenedor de pie de página existe...
    if (footerContainer) {
        // Crea un contenedor de div para el contenido del pie de página
        var footerContent = document.createElement('div');

        footerContent.innerHTML = `
            <h2>Contacto</h2><hr>
            
        `;

        // Añade el contenido al contenedor del pie de página
        footerContainer.appendChild(footerContent);
    } else {
        console.error("No se encontró el contenedor con la clase '.Footer'.");
    }
});
