// ---------------------------------- 01 ----------------------------------
const contenedorEjercicio1 = document.getElementById("contenedorEjercicio1");
const botonEjercicio1 = document.getElementById("botonEjercicio1");

let probarEjercicio1 = () => {
    let arreglo = [];
    contenedorEjercicio1.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        arreglo.push(Math.floor(Math.random() * 10));
    }
    arreglo.sort();
    contenedorEjercicio1.innerHTML = `<ul>`;
    for (let i of arreglo) {
        contenedorEjercicio1.innerHTML += `<li>${i}</li>`;
    }
    contenedorEjercicio1.innerHTML += `</ul>`;
}

botonEjercicio1.addEventListener("click", probarEjercicio1);

// ---------------------------------- 02 ----------------------------------
const contenedorEjercicio2 = document.getElementById("contenedorEjercicio2");
const whileEjercicio2 = document.getElementById("whileEjercicio2");
const forEjercicio2 = document.getElementById("forEjercicio2");
const forEachEjercicio2 = document.getElementById("forEachEjercicio2");
const sumandoEjercicio2 = document.getElementById("sumandoEjercicio2");
const copiaEjercicio2 = document.getElementById("copiaEjercicio2");
const promedioEjercicio2 = document.getElementById("promedioEjercicio2");

let arregloEjercicio2 = [1,2,3,4,5,6];

let probarWhileEjercicio2 = () => {
    let i = 0;
    contenedorEjercicio2.innerHTML = "";
    contenedorEjercicio2.innerHTML = `<li>While</li>`;
    while ( i < arregloEjercicio2.length) {
        contenedorEjercicio2.innerHTML += `<li>${arregloEjercicio2[i]}</li>`;
        i++;
    }
}

let probarForEjercicio2 = () => {
    contenedorEjercicio2.innerHTML = "";
    contenedorEjercicio2.innerHTML = `<li>For</li>`;
    for (let i = 0; i < arregloEjercicio2.length; i++) {
        contenedorEjercicio2.innerHTML += `<li>${arregloEjercicio2[i]}</li>`;
    }
}

let probarForEachEjercicio2 = () => {
    let i = 0;
    contenedorEjercicio2.innerHTML = "";
    contenedorEjercicio2.innerHTML = `<li>ForEach</li>`;
    arregloEjercicio2.forEach(function(mostrar) {
        contenedorEjercicio2.innerHTML += `<li>${arregloEjercicio2[i]}</li>`;
        i++;        
    })
}

let probarSumandoEjercicio2 = () => {
    contenedorEjercicio2.innerHTML = "";
    contenedorEjercicio2.innerHTML = `<li>Sumando 1</li>`;
    for (let i = 0; i < arregloEjercicio2.length; i++) {
        contenedorEjercicio2.innerHTML += `<li>${arregloEjercicio2[i] + 1}</li>`;
    }
}

let probarCopiaEjercicio2 = () => {
    let arregloEjercicio2Copia = [];
    contenedorEjercicio2.innerHTML = "";
    contenedorEjercicio2.innerHTML = `<li>Copia + 1</li>`;
    for (let i = 0; i < arregloEjercicio2.length; i++) {
        arregloEjercicio2Copia.push(arregloEjercicio2[i] + 1);
        contenedorEjercicio2.innerHTML += `<li>${arregloEjercicio2Copia[i]}</li>`;
    }
}

let probarPromedioEjercicio2 = () => {
    let promedioArregloEjercicio2 = 0;
    contenedorEjercicio2.innerHTML = "";
    contenedorEjercicio2.innerHTML = `<li>Promedio</li>`;
    for (let i = 0; i < arregloEjercicio2.length; i++) {
        promedioArregloEjercicio2 += arregloEjercicio2[i]
    }
    promedioArregloEjercicio2 /= arregloEjercicio2.length;
    contenedorEjercicio2.innerHTML += `<li>${promedioArregloEjercicio2}</li>`;
}

whileEjercicio2.addEventListener("click", probarWhileEjercicio2);
forEjercicio2.addEventListener("click", probarForEjercicio2);
forEachEjercicio2.addEventListener("click", probarForEachEjercicio2);
sumandoEjercicio2.addEventListener("click", probarSumandoEjercicio2);
copiaEjercicio2.addEventListener("click", probarCopiaEjercicio2);
promedioEjercicio2.addEventListener("click", probarPromedioEjercicio2);

// ---------------------------------- 03 ----------------------------------
const botonEjercicio3 = document.getElementById("botonEjercicio3");
const contenedorEjercicio3_1 = document.getElementById("contenedorEjercicio3_1");
const contenedorEjercicio3_2 = document.getElementById("contenedorEjercicio3_2");

let probarEjercicio3 = () => {
    let originales = [];
    let cuadrados = [];
    contenedorEjercicio3_1.innerHTML = "";
    contenedorEjercicio3_1.innerHTML = `<li>Originales</li>`;
    contenedorEjercicio3_2.innerHTML = "";
    contenedorEjercicio3_2.innerHTML = `<li>Cuadrados</li>`;
    for (let i = 0; i < 5; i++) {
        originales.push(Math.floor(Math.random() * 10));
        cuadrados.push(Math.pow(originales[i], 2));
        contenedorEjercicio3_1.innerHTML += `<li>${originales[i]}</li>`;
        contenedorEjercicio3_2.innerHTML += `<li>${cuadrados[i]}</li>`;
    }
}

botonEjercicio3.addEventListener("click", probarEjercicio3);

// ---------------------------------- 04 ----------------------------------
const botonEjercicio4 = document.getElementById("botonEjercicio4");
const contenedorEjercicio4 = document.getElementById("contenedorEjercicio4");

let arregloEjercicio4 = [1,-4,12,0,-3,29,-150];

let probarEjercicio4 = () => {
    let suma = 0;
    contenedorEjercicio4.innerHTML = "";
    for (let i = 0; i < arregloEjercicio4.length; i++){
        if (arregloEjercicio4[i] > 0){
            suma += arregloEjercicio4[i];
        }
    }
    contenedorEjercicio4.innerHTML += `<li>${suma}</li>`;
}

botonEjercicio4.addEventListener("click", probarEjercicio4);

// ---------------------------------- 05 ----------------------------------
const contenedorEjercicio5 = document.getElementById("contenedorEjercicio5");
const punto1Ejercicio5 = document.getElementById("punto1Ejercicio5");
const punto2Ejercicio5 = document.getElementById("punto2Ejercicio5");
const punto3Ejercicio5 = document.getElementById("punto3Ejercicio5");
const punto4Ejercicio5 = document.getElementById("punto4Ejercicio5");
const punto5Ejercicio5 = document.getElementById("punto5Ejercicio5");
const punto6Ejercicio5 = document.getElementById("punto6Ejercicio5");

let arregloEjercicio5 = ["Florencia","Lucas","Ezequiel","Matias","Bruno","Gustavo","Martin"];

let probarPunto1Ejercicio5 = () => {
    contenedorEjercicio5.innerHTML = "";
    for (let i = 0; i < arregloEjercicio5.length; i++){
        if (arregloEjercicio5[i].length <= 6){
            contenedorEjercicio5.innerHTML += `<li>${arregloEjercicio5[i]}</li>`;
        }
    }
}

let probarPunto2Ejercicio5 = () => {
    contenedorEjercicio5.innerHTML = "";
    for (let i = 0; i < arregloEjercicio5.length; i++){
        if (arregloEjercicio5[i].charAt(0) == "M"){
            contenedorEjercicio5.innerHTML += `<li>${arregloEjercicio5[i]}</li>`;
        }
    }
}

let probarPunto3Ejercicio5 = () => {
    contenedorEjercicio5.innerHTML = "";
    arregloEjercicio5.sort();
    console.log("Resultado ejercicio 5");
    for (let i = 0; i < arregloEjercicio5.length; i++){
        contenedorEjercicio5.innerHTML += `<li>${arregloEjercicio5[i]}</li>`;
        console.log(arregloEjercicio5[i]);
    }
}

let probarPunto4Ejercicio5 = () => {
    let iniciales = [];
    contenedorEjercicio5.innerHTML = "";
    for (let i = 0; i < arregloEjercicio5.length; i++) {
        iniciales.push(arregloEjercicio5[i].charAt(0))
        contenedorEjercicio5.innerHTML += `<li>${iniciales[i]}</li>`;
    }
}

let probarPunto5Ejercicio5 = () => {
    let mayusculas = [];
    contenedorEjercicio5.innerHTML = "";
    for (let i = 0; i < arregloEjercicio5.length; i++) {
        mayusculas.push(arregloEjercicio5[i].toUpperCase())
        contenedorEjercicio5.innerHTML += `<li>${mayusculas[i]}</li>`;
    }
}

let probarPunto6Ejercicio5 = () => {
    let noHayJ = false;
    contenedorEjercicio5.innerHTML = "";
    for (let i = 0; i < arregloEjercicio5.length; i++){
        if (arregloEjercicio5[i].charAt(0) == "J"){
            contenedorEjercicio5.innerHTML += `<li>${arregloEjercicio5[i]}</li>`;
        } else {
            noHayJ = true;
        }
    }
    if (noHayJ){
        contenedorEjercicio5.innerHTML = `<li>Ningun nombre comienza con "J"</li>`;
    }
}

punto1Ejercicio5.addEventListener("click", probarPunto1Ejercicio5);
punto2Ejercicio5.addEventListener("click", probarPunto2Ejercicio5);
punto3Ejercicio5.addEventListener("click", probarPunto3Ejercicio5);
punto4Ejercicio5.addEventListener("click", probarPunto4Ejercicio5);
punto5Ejercicio5.addEventListener("click", probarPunto5Ejercicio5);
punto6Ejercicio5.addEventListener("click", probarPunto6Ejercicio5);

// ---------------------------------- 06 ----------------------------------
const botonEjercicio6 = document.getElementById("botonEjercicio6");
const contenedorEjercicio6 = document.getElementById("contenedorEjercicio6");

let arregloEjercicio6 = ["azul","amarillo","rojo","verde","café","rosa"];

let probarEjercicio6 = () => {
    let usuario = prompt("Ingrese un color para buscar en la base de datos");
    let encontrado = false;
    for (let i = 0; i < arregloEjercicio6.length; i++){
        if (usuario.toLowerCase() === arregloEjercicio6[i]){
            encontrado = true;
        }
    }
    if (encontrado){
        alert(`El color ${usuario} fué encontrado en la base de datos`);
    } else {
        alert(`El color ${usuario} no fué encontrado en la base de datos`);
    }
}

botonEjercicio6.addEventListener("click", probarEjercicio6);

// ---------------------------------- 07 ----------------------------------
const botonEjercicio7 = document.getElementById("botonEjercicio7");
const contenedorEjercicio7_1 = document.getElementById("contenedorEjercicio7_1");
const contenedorEjercicio7_2 = document.getElementById("contenedorEjercicio7_2");

let probarEjercicio7 = () => {
    let originales = [];
    let pares = [];
    let iPar = 0;
    contenedorEjercicio7_1.innerHTML = "";
    contenedorEjercicio7_1.innerHTML = `<li>Originales</li>`;
    contenedorEjercicio7_2.innerHTML = "";
    contenedorEjercicio7_2.innerHTML = `<li>Pares</li>`;
    for (let i = 0; i < 5; i++) {
        originales.push(Math.floor(Math.random() * 10));
        contenedorEjercicio7_1.innerHTML += `<li>${originales[i]}</li>`;
        if (originales[i] % 2 == 0){
            pares.push(originales[i]);
            contenedorEjercicio7_2.innerHTML += `<li>${pares[iPar]}</li>`;
            iPar ++;
        }
    }
}

botonEjercicio7.addEventListener("click", probarEjercicio7);

// ---------------------------------- 08 ----------------------------------
const botonEjercicio8 = document.getElementById("botonEjercicio8");
const contenedorEjercicio8_1 = document.getElementById("contenedorEjercicio8_1");
const contenedorEjercicio8_2 = document.getElementById("contenedorEjercicio8_2");

let arregloEjercicio8 = ["azul","amarillo","rojo","verde","café","rosa"];

let probarEjercicio8 = () => {
    let vocales = [];
    let iVocal = 0;
    contenedorEjercicio8_1.innerHTML = "";
    contenedorEjercicio8_1.innerHTML = `<li>Originales</li>`;
    contenedorEjercicio8_2.innerHTML = "";
    contenedorEjercicio8_2.innerHTML = `<li>Vocales</li>`;
    for (let i = 0; i < arregloEjercicio6.length; i++) {
        contenedorEjercicio8_1.innerHTML += `<li>${arregloEjercicio6[i]}</li>`;
        if (arregloEjercicio6[i].charAt(0) == "a" || arregloEjercicio6[i].charAt(0) == "e" || arregloEjercicio6[i].charAt(0) == "i" || arregloEjercicio6[i].charAt(0) == "o" || arregloEjercicio6[i].charAt(0) == "u"){
            vocales.push(arregloEjercicio6[i]);
            contenedorEjercicio8_2.innerHTML += `<li>${vocales[iVocal]}</li>`;
            iVocal++;
        }
    }
}

botonEjercicio8.addEventListener("click", probarEjercicio8);

// ---------------------------------- 09 ----------------------------------
const botonEjercicio9 = document.getElementById("botonEjercicio9");
const contenedorEjercicio9_1 = document.getElementById("contenedorEjercicio9_1");
const contenedorEjercicio9_2 = document.getElementById("contenedorEjercicio9_2");

let arregloEjercicio9 = [1,2,3,4,5];

let probarEjercicio9 = () => {
    let modificado = arregloEjercicio9[0];
    contenedorEjercicio9_1.innerHTML = "";
    contenedorEjercicio9_1.innerHTML = `<li>Originales</li>`;
    for (let i = 0; i < arregloEjercicio9.length; i++) {
        contenedorEjercicio9_1.innerHTML += `<li>${arregloEjercicio9[i]}</li>`;
    }
    arregloEjercicio9[0] = arregloEjercicio9[3] 
    arregloEjercicio9[3] = modificado
    contenedorEjercicio9_2.innerHTML = "";
    contenedorEjercicio9_2.innerHTML = `<li>Modificado</li>`;
    for (let i = 0; i < arregloEjercicio9.length; i++) {
        contenedorEjercicio9_2.innerHTML += `<li>${arregloEjercicio9[i]}</li>`;
    }
}

botonEjercicio9.addEventListener("click", probarEjercicio9);

// ---------------------------------- 10 ----------------------------------
$("p.ejercicio10:first").click(function(){
    alert("Diste click al parrafo N°1");
});

// ---------------------------------- 11 ----------------------------------
$("td.tdEjercicio11").click(function(){
    $(this).css("background-color", "#d2d2d2");
});

// ---------------------------------- 12 ----------------------------------
$("li.listaEjercicio12").click(function(){
    $(this).hide();
});

// ---------------------------------- 13 ----------------------------------
$("td.tdEjercicio13").click(function(){
    $(this).css("background-color", "#d2d2d2");
});

// ---------------------------------- 14 ----------------------------------
$("button.botonEjercicio14").click(function(){
    $(this).child("h3").css("font-size", "30px");
});

// ---------------------------------- 15 ----------------------------------
$("button.botonEjercicio15").click(function(){
    $("table.tablaEjercicio15 tr td").text("-");
});

// ---------------------------------- 16 ----------------------------------
$("button.googleEjercicio16").click(function(){
    $("a.hipervinculoEjercicio16").text("Google");
    $("a.hipervinculoEjercicio16").attr("href", "https://www.google.com");
});

$("button.instagramEjercicio16").click(function(){
    $("a.hipervinculoEjercicio16").text("Instagram");
    $("a.hipervinculoEjercicio16").attr("href", "https://www.instagram.com");
});

$("button.facebookEjercicio16").click(function(){
    $("a.hipervinculoEjercicio16").text("Facebook");
    $("a.hipervinculoEjercicio16").attr("href", "https://www.facebook.com");
});

// ---------------------------------- 17 ----------------------------------
$("button.botonEjercicio17").click(function(){
    $("p.textoEjercicio17 strong").hide();
});

// ---------------------------------- 18 ----------------------------------
$("td.tdEjercicio18").mouseover(function(){
    $(this).css("background-color", "#d2d2d2");
});

// ---------------------------------- 19 ----------------------------------
$("td.tdEjercicio19").mouseover(function(){
    $(this).css("background-color", "#d2d2d2");
});

$("td.tdEjercicio19").mouseout(function(){
    $(this).css("background-color", "");
});

// ---------------------------------- 20 ----------------------------------
$("div.divEjercicio20").click(function(){
    $(this).css("width", "800");
    $(this).css("height", "70");
});

$("div.divEjercicio20").dblclick(function(){
    $(this).css("width", "250");
    $(this).css("height", "250");
});

// ---------------------------------- 21 ----------------------------------
$("p.pEjercicio21_1").click(function(){
    $(this).hide("slow", function(){
        $("p.pEjercicio21_2").show("slow");
    })
});

$("p.pEjercicio21_2").click(function(){
    $(this).hide("slow", function(){
        $("p.pEjercicio21_1").show("slow");
    })
});

// ---------------------------------- 22 ----------------------------------
$("select.selectEjercicio22").change(function(){
    console.log(`Valor seleccionado en el ejercicio N°22: ${$(this).val()}`);
    $("#consolaEjercicio22").text(`Valor seleccionado en el ejercicio N°22: ${$(this).val()}`);
});

// ---------------------------------- 23 ----------------------------------
$("a.hipervinculoEjercicio23").click(function(e){
    e.preventDefault();
    console.log(`Valor de href: ${$(this).attr("href")}`);
    $("#consolaEjercicio23").text(`Valor de href: ${$(this).attr("href")}`);
});

// ---------------------------------- 24 ----------------------------------
$("#formulario").submit(function(e){
    e.preventDefault();
    $("#formulario").hide();
    $("#formularioEnviado").show();
});
