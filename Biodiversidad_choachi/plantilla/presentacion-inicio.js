document.addEventListener('DOMContentLoaded', function() {
    var targetContainer = document.querySelector('#presentacion-inicio');

    if (targetContainer) {
        var divContainer = document.createElement('div');

        divContainer.innerHTML = `
            <ul>
                <li><img src="https://gualterosky.github.io/Biodiversidad_choachi/img/Slides/Slide1.jpg" alt=""></li>
                <li><img src="https://gualterosky.github.io/Biodiversidad_choachi/img/Slides/Slide2.jpg" alt=""></li>
                <li><img src="https://gualterosky.github.io/Biodiversidad_choachi/img/Slides/Slide3.jpg" alt=""></li>
                <li><img src="https://gualterosky.github.io/Biodiversidad_choachi/img/Slides/Slide4.jpg" alt=""></li>
                <li><img src="https://gualterosky.github.io/Biodiversidad_choachi/img/Slides/Slide5.jpg" alt=""></li>
                <li><img src="https://gualterosky.github.io/Biodiversidad_choachi/img/Slides/Slide6.jpg" alt=""></li>
                <!--<li><img src="C:/Users/Kevin Gualteros/GitHub Repository\gualterosky.github.io\Biodiversidad_choachi\img\Slides\Slide7.jpg" alt=""></li>
                <li><img src="C:\Users\Kevin Gualteros\GitHub Repository\gualterosky.github.io\Biodiversidad_choachi\img\Slides\Slide8.jpg" alt=""></li>-->
            </ul>
            <h1>Biodiversidad en Choachí</h1>
            <!--<img src="https://i0.wp.com/masviajemasvida.com/wp-content/uploads/2020/11/Copia-Choachi-16082018-15.jpg?resize=920%2C425&ssl=1" alt="">-->
        `;

        // Añade el contenedor dentro del contenedor objetivo
        targetContainer.appendChild(divContainer);
    } else {
        console.error("No se encontró el contenedor con la clase '.side.side-right'.");
    }
});
