// script.js

document.addEventListener('DOMContentLoaded', function() {
    var navContainer = document.createElement('nav');
    navContainer.innerHTML = `
        <aqui va el codigo html>
<style>
body{
    background-color: rgb(49, 33, 219);
    font-family: "Roboto", sans-serif;
}

.wrap{
    display: flex;
    flex-flow: row wrap;
    text-align: center;
}

.wrap > *{
    padding: 8px;
    margin: 8px;
    flex: 1 100%;
}

header{
    height: 110px;
    background-color: chocolate;
}

.main{
    height: 320px;
    background-color: green;
}

.side-left{
    background-color: red;
}

.side-right{
    background-color: blue;
}

footer{
    height: 100px;
    background: palevioletred;
}

@media all and (min-width:600px){
    .side{
        flex: 1;
    }
}

@media all and (min-width: 800px){
    .main{
        flex: 3;
    }

    .main{
        order: 2;
    }

    .side-left{
        order: 1;

    }

    .side-right{
        order: 2;
    }

    footer{
        order: 4;
    }
}


</style>
    `;
    document.body.appendChild(navContainer);
});