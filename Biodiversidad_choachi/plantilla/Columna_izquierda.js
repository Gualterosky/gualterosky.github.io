document.addEventListener('DOMContentLoaded', function() {
    var targetContainer = document.querySelector('.side.side-left');

    if (targetContainer) {
        var divContainer = document.createElement('div');

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
            <a class="category" href="https://colab.research.google.com/drive/1uzu7ibLi-rMQ66h9ZWlBbR8ps1tU5bfs?usp=sharing">
                <img src="https://gualterosky.github.io/Biodiversidad_choachi/img/Ico/Plant.png" alt="Plantas">
                <h3>Plantas</h3>
            </a>
            <a class="category" href="https://">
                <img src="https://gualterosky.github.io/Biodiversidad_choachi/img/Ico/Tree.png" alt="Árboles">
                <h3>Árboles</h3>
            </a>
        `;

        targetContainer.appendChild(divContainer);
    } else {
        console.error("No se encontró el contenedor con la clase '.side.side-left'.");
    }
});
