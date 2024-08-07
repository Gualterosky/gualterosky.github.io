// script.js

document.addEventListener('DOMContentLoaded', function() {
    var navContainer = document.createElement('nav');
    navContainer.innerHTML = `
        <ul>
            <li><a href="https://gualterosky.github.io/"><img src="https://gualterosky.github.io/Images/Gualterosky.png" alt="Gualterosky" width="180px"></a></li>
            <li><a href="#menu">Inicio</a></li>
            <li><a href="#sobre-mi">Sobre mi</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="/">Contacto</a></li>
        </ul>
        <nav>
    <ul>
        <li><a href="https://gualterosky.github.io/"><img src="https://gualterosky.github.io/Images/Gualterosky.png" alt="Gualterosky" width="180px"></a></li>
        <li><a href="#menu">Inicio</a></li>
        <li><a href="#sobre-mi">Sobre mi</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="/">Contacto</a></li>
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
