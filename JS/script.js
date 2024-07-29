caja.innerHTML+= `<br>Su edad es: ${edad}`


function sumar(){
    num1=parseInt(document.getElementById('num1').value)
    num2=parseInt(document.getElementById('num2').value)
    suma=num1+num2
    console.log(suma)
    res=document.getElementById('resultado')
    res.innerHTML=`El resultado de la suma es: ${suma}`
}

function restar(){
    num1=parseInt(document.getElementById('num1').value)
    num2=parseInt(document.getElementById('num2').value)
    resta=num1-num2
    console.log(resta)
    res=document.getElementById('resultado')
    res.innerHTML=`El resultado de la resta es: ${resta}`
}


function operaciones(){
    
}