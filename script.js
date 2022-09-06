let entrada = document.querySelector("#entrada");    
let salida = document.querySelector("#salida");
let btnCopy = document.querySelector("#boton-copiar");
btnCopy.style.display = "none";
let avisos = document.querySelector(".salida-avisos");

let matrizLlaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];

//funcion para mostrar el mensaje en la zona de salida -----------------------
function imprimirMensaje(mensaje){
    salida.value = mensaje;
    salida.style.background="none";
    entrada.value = "";
    btnCopy.style.display = "block";
    avisos.style.display = "none";
}
//----------------------------------------------------------------------------

//funcion para reemplazar llave por valor o valor por llave -----------------
//a=0, b=1 para cambiar llave por valor y a=1, b=0 para cambiar valor por llave
function reemplazar(cadena, a, b){
    cadena = cadena.toLowerCase();
    
    for(let i=0; i<matrizLlaves.length; i++){
        if(cadena.includes(matrizLlaves[i][a])){
            cadena = cadena.replaceAll(matrizLlaves[i][a],matrizLlaves[i][b]);
        }
    }    
    return cadena;
}
//---------------------------------------------------------------------------

//Funcion para encriptar el mensaje -----------------------------------------
function encriptarMsj(){
    let mensaje = encriptar(entrada.value);
    imprimirMensaje(mensaje);    
}

function encriptar(cadena){
    return reemplazar(cadena, 0, 1);      
}
//------------------------------------------------------------------------

//funcion para desencriptar el mensaje -----------------------------------
function desencriptarMsj(){
    let texto = desencriptar(entrada.value);
    imprimirMensaje(texto);
}

function desencriptar(cadena){
    return reemplazar(cadena, 1, 0);    
}
//-------------------------------------------------------------------------

//funcion para copiar el mensaje escrito en la salida ---------------------
function copiarSalida() {    
    salida.select();
    navigator.clipboard.writeText(salida.value)
    salida.value = "";
}
//-------------------------------------------------------------------------