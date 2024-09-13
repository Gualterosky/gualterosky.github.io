document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el contenedor con la clase 'side side-left'
    var targetContainer = document.querySelector('.side.side-left');

    // Asegúrate de que el contenedor existe antes de agregar contenido
    if (targetContainer) {
        // Crea el contenedor del div
        var divContainer = document.createElement('div');

        // Agrega el contenido HTML del div
        divContainer.innerHTML = `
            <h2>Animales y Plantas</h2><hr>
            <a class="category" href="https://">
                <img src="https://gualterosky.github.io/Biodiversidad_choachi/img/Ico/Bird.png" alt="Aves">
                <h3>Aves</h3>
            </a>
            <a class="category" href="https://ejemplo.com/senderismo">
                <img src="https://gualterosky.github.io/Biodiversidad_choachi/img/Ico/Bear.png" alt="Mamíferos">
                <h3>Mamíferos</h3>
            </a>
            <a class="category" href="https://">
                <img src="https://gualterosky.github.io/Biodiversidad_choachi/img/Ico/Frog.png" alt="Anfibios y Reptiles">
                <h3>Anfibios y reptiles</h3>
            </a>
            <a class="category" href="https://">
                <img src="https://gualterosky.github.io/Biodiversidad_choachi/img/Ico/Plant.png" alt="Plantas">
                <h3>Plantas</h3>
            </a>
            <a class="category" href="https://">
                <img src="https://gualterosky.github.io/Biodiversidad_choachi/img/Ico/Tree.png" alt="Árboles">
                <h3>Árboles</h3>
            </a>
        `;

        // Añade el contenedor dentro del contenedor objetivo
        targetContainer.appendChild(divContainer);
    } else {
        console.error("No se encontró el contenedor con la clase '.side.side-left'.");
    }
});
