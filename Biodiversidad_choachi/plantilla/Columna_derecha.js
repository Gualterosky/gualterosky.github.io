document.addEventListener('DOMContentLoaded', function() {
    var targetContainer = document.querySelector('.side.side-right');

    // si el contenedor existe...
    if (targetContainer) {
        // Crea el contenedor del div
        var divContainer = document.createElement('div');

        divContainer.innerHTML = `
            <h2>Ecosistemas</h2><hr>
            <a class="category" href="https://">
                <img src="https://gualterosky.github.io/Biodiversidad_choachi/img/Ico/Frailejon.png" alt="Categoria">
                <h3>Páramo</h3>
            </a>
            <a class="category" href="https://">
                <img src="https://gualterosky.github.io/Biodiversidad_choachi/img/Ico/Mountain.png" alt="Categoria">
                <h3>Montañas</h3>
            </a> 
            <a class="category" href="https://">
                <img src="https://gualterosky.github.io/Biodiversidad_choachi/img/Ico/Forest.png" alt="Categoria">
                <h3>Bosque Andino</h3>
            </a>
            <a class="category" href="https://">
                <img src="https://gualterosky.github.io/Biodiversidad_choachi/img/Ico/Waterfall.png" alt="Categoria">
                <h3>Cuerpos de agua</h3>
            </a>
            <a class="category" href="https://">
                <img src="https://gualterosky.github.io/Biodiversidad_choachi/img/Ico/Path.png" alt="Categoria">
                <h3>Senderos</h3>
            </a>
        `;

        // Añade el contenedor dentro del contenedor objetivo
        targetContainer.appendChild(divContainer);
    } else {
        console.error("No se encontró el contenedor con la clase '.side.side-right'.");
    }
});
