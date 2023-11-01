//-------------
//EJERCICIO 01
//-------------
function ejercicio01(){
    let colores = ["Rojo","Verde","Azul","Amarillo","Magenta"];
    console.log(colores);
}

//-------------
//EJERCICIO 02
//-------------
function ejercicio02(){
    let colores = ["Rojo","Verde","Azul","Amarillo","Magenta"];
    let tercerColor = colores[2];
    console.log(tercerColor);
}

//-------------
//EJERCICIO 03
//-------------
function ejercicio03(){
    let colores = ["Rojo","Verde","Azul","Amarillo","Magenta"];
    console.log(colores[0].charAt(0));
}

//-------------
//EJERCICIO 04
//-------------
function ejercicio04(){
    let numeroAleatorio = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
    console.log("El numero es " + numeroAleatorio);
}

//-------------
//EJERCICIO 05
//-------------
function ejercicio05(){
    let arreglo = [];
    console.log("Arreglo vacio" + arreglo)
    for (let i = 0; i < 10; i++){
        arreglo.push(i+1);
    };
    console.log("Arreglo lleno: " + arreglo)
}

//-------------
//EJERCICIO 06
//-------------
function ejercicio06(){
    let arreglo = [];
    console.log("Arreglo vacio" + arreglo)
    for (let i = 0; i < 10; i++){
        arreglo.push(Math.floor(Math.random() * (99 - 1 + 1)) + 1);
    };
    console.log("Arreglo lleno: " + arreglo)

    return arreglo;
}

//-------------
//EJERCICIO 07
//-------------
function ejercicio07(){
    arreglo1 = ejercicio06();
    arreglo2 = arreglo1;
    console.log("Copia del arreglo: " + arreglo2);    
    console.log("-------------------------------------------------");
    for(let i = 0; i < arreglo2.length; i++){
        console.log("En la posición " + i + " del arreglo 1 está el número " + arreglo1[i]);
        console.log("En la posición " + i + " del arreglo 2 está el número " + arreglo2[i]);
        console.log("-------------------------------------------------");
    };
}

//-------------
//EJERCICIO 08
//-------------
function ejercicio08Variable(){
    let palabraClave = "";
    let palabrasString = "";
    while(palabraClave !== "cancelar"){
        palabraClave = prompt("Escriba una palabra. Utilice `cancelar` para salir.").toLowerCase();
        palabrasString = palabrasString + "-" + palabraClave;
    };
    console.log(palabrasString);
}

function ejercicio08Arreglo(){
    let palabraClave = "";
    let arregloDePalabras = [];
    let palabrasDelArreglo = "";
    while(palabraClave !== "cancelar"){
        palabraClave = prompt("Escriba una palabra. Utilice `cancelar` para salir.").toLowerCase();
        arregloDePalabras.push(palabraClave);
    };
    for (let i = 0; i < arregloDePalabras.length; i++){
        palabrasDelArreglo = palabrasDelArreglo + "-" + arregloDePalabras[i];
    };
    console.log(palabrasDelArreglo);
}

//-------------
//EJERCICIO 09
//-------------
function ejercicio09(){
    let dolares = document.getElementById(`dolaresEjercicio09`).value;
    if (dolares !== "" && dolares > 0){
        dolares *= 300;
        document.getElementById(`pesosEjercicio09`).value = dolares;
    }
}

//-------------
//EJERCICIO 10
//-------------
function ejercicio10(){
    let pesos = document.getElementById(`pesosEjercicio10`).value;
    if (pesos !== "" && pesos > 0){
        pesos /= 300;
        document.getElementById(`dolaresEjercicio10`).value = pesos;
    }
}

//-------------
//EJERCICIO 11
//-------------
function ejercicio11(){
    let celsius = document.getElementById(`celsius`).value;
    if (celsius !== ""){
        celsius = celsius * 9/5 + 32;
        document.getElementById(`fahrenheit`).value = celsius;
    }
}

//-------------
//EJERCICIO 12
//-------------
function ejercicio12(){
    let nombre = document.getElementById(`campoNombre`).value;
    let material = document.getElementById(`campoMaterial`).value.toLowerCase();
    let dimensiones = document.querySelector('input[name="dimensiones"]:checked').value;
    let comentario = document.getElementById(`campoComentario`).value;
    let mensaje = nombre + " pidió una caja de " + material + " " + dimensiones + ". " + comentario;
    document.getElementById(`campoMensaje`).value = mensaje;
    document.getElementById(`campoNombre`).value = "";
    document.getElementById(`campoComentario`).value = "";
}

function verEjercicio12(){
    document.getElementById(`botonVerEjercicio12`).style.display ="none";
    document.getElementById(`imagenEjercicio12`).style.display ="none";
    document.getElementById(`botonOcultarEjercicio12`).style.display ="inline";
    document.getElementById(`formularioEjercicio12`).style.display ="inline";
}

function ocultarEjercicio12(){
    document.getElementById(`botonVerEjercicio12`).style.display ="inline";
    document.getElementById(`imagenEjercicio12`).style.display ="inline";
    document.getElementById(`botonOcultarEjercicio12`).style.display ="none";
    document.getElementById(`formularioEjercicio12`).style.display ="none";
}

//-------------
//EJERCICIO 13
//-------------
let numeroDeLaSuerte = Math.floor(Math.random() * (5 - 0 + 1) + 0);
let intentos = 0;

function ejercicio13(){
    let numeroIngresado = document.getElementById(`inputSuerte`).value;
    if (numeroIngresado !== "" && numeroIngresado <= 5 && numeroIngresado >= 0){
        intentos++;
        document.getElementById(`ejercicio13Reiniciar`).style.display ="inline";
        document.getElementById(`inputSuerte`).value = "";
        if (numeroIngresado == numeroDeLaSuerte){
            document.getElementById(`avisos`).innerHTML = "Felicidades! " + numeroIngresado + " es el numero de la suerte.";
            document.getElementById(`ejercicio13Suerte`).style.display ="none";
        }else if (intentos >= 3 && numeroIngresado !== numeroDeLaSuerte){
            document.getElementById(`avisos`).innerHTML = "Mejor suerte la proxima, el numero de la suerte era " + numeroDeLaSuerte + ".";
            document.getElementById(`ejercicio13Suerte`).style.display ="none";
        } else {
            document.getElementById(`avisos`).innerHTML = "Restan " + (3 - intentos) + " intentos.";
        }
    } else {
        document.getElementById(`avisos`).innerHTML = "Ingrese un número entre 0 y 5. Restan " + (3 - intentos) + " intentos.";
        document.getElementById(`inputSuerte`).value = "";
    }
}

function ejercicio13Reiniciar(){
    document.getElementById(`inputSuerte`).value = "";
    document.getElementById(`inputSuerte`).ariaPlaceholder = "Adivine el numero entre 0 y 5";
    document.getElementById(`avisos`).innerHTML = "Tiene 3 intentos.";
    numeroDeLaSuerte = Math.floor(Math.random() * (5 - 1 + 1));
    intentos = 0;
    console.log("El numero de la suerte es: " + numeroDeLaSuerte);
    document.getElementById(`ejercicio13Reiniciar`).style.display ="none";
    document.getElementById(`ejercicio13Suerte`).style.display ="inline";
}

function ejercicio13VerNumero(){
    console.log("El numero de la suerte es: " + numeroDeLaSuerte);
}

//-------------
//EJERCICIO 14
//-------------
function ejercicio14Agregar(){
    let nombre = document.getElementById(`inputNombres`).value;
    if (nombre !== ""){
        document.getElementById(`listaDeNombres`).innerHTML += '<li class="listaDeNombres">' + nombre + '</li>';
        document.getElementById(`inputNombres`).value = "";
        document.getElementById(`inputNombres`).ariaPlaceholder = "Nombre y apellido";
        document.getElementById(`botonEliminarNombres`).style.display ="inline";
    }
}

function ejercicio14Reiniciar(){
    document.getElementById(`listaDeNombres`).innerHTML = '';
    document.getElementById(`inputNombres`).value = "";
    document.getElementById(`inputNombres`).ariaPlaceholder = "Nombre y apellido";
    document.getElementById(`botonEliminarNombres`).style.display ="none";
}

