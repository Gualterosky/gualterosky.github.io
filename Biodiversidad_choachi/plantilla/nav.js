document.addEventListener('DOMContentLoaded', function() {
    var navContainer = document.createElement('nav');
    navContainer.innerHTML = `
<nav>
        <ul>
            <li><a href="#"><img src="C:/Users/Kevin%20Gualteros/GitHub%20Repository/gualterosky.github.io/Biodiversidad_choachi/img/Ico/Icon.png" alt="Icono" width="180px"></a></li>
            <li><a href="#s">Animales</a></li>
            <li><a href="#s">Plantas</a></li>
            <li><a href="/">Ecosistemas</a></li>
            <li><a href="/">Mapa</a></li>
        </ul>
</nav>
<style>
nav{/*Menu*/
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px); /* Efecto de desenfoque */
}

nav a{
    color: hsl(0, 0%, 100%);
    font-size: large;
    display: block;
    text-decoration: none;
    padding: 0 2.5em;
    transition: .4s;
}

nav a:hover{ /*casilla al pasar el raton*/
    background: rgba(0, 0, 0, 0.5);
}

nav li{
    line-height: 3rem;
}

nav ul{
    list-style: none;
    padding: 0%;
}
nav > ul{
    background-color: none;
    display: table;
    width: 100%;
}

nav > ul > li{
    float: left;
}
</style>
    `;
    document.body.appendChild(navContainer);
});
