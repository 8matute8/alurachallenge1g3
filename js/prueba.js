var textoOriginal   = document.getElementById("areaTexto");
var textoencriptado = "";
var btnEncriptar    = document.getElementById("btnEncriptar");
var btnDesencriptar = document.getElementById("btnDesencriptar");
var btnCopy         = document.getElementById("botoncopy");
var munieco        = document.getElementById("munieco");
var munieco_img    = document.getElementById("munieco_img");
var h1             = document.getElementById("h1");
var h5             = document.getElementById("h5");

btnEncriptar.addEventListener("click",encriptar,true);
btnCopy.addEventListener("click",copiar,true);
btnDesencriptar.addEventListener("click",desencriptar,true);




function copiar (){
    navigator.clipboard.writeText(h5.innerHTML);
    alert("Texto encriptado ("+ h5.innerHTML +") copiado en el portapapeles!");
    textoOriginal.value = "";
    
    h1.classList.remove("encriptado");
    h5.classList.remove("encriptado");
    h1.innerHTML = "Ingresa el texto que desees encriptar o desencriptar";
    h5.innerHTML = "Ningún mensaje fue encontrado";
    munieco_img.style.display = "block";
}

function encripted(){
    btnCopy.style.display = "inline";
    munieco_img.style.display = "none";
    h1.classList.add("encriptado");
    h5.classList.add("encriptado");
    h1.innerHTML = "<strong>Su texto resultado es</strong>";
}

function test(){
    var texto = textoOriginal.value
    var regular = /[^a-z^ ]+/gm;
    if (texto.length != 0)
    {
        if (regular.test(texto) !=true)
        {
            return true;
        }
        else {
            alert("El texto no puede contener mayusculas, caracteres especiales o palabras acentuadas");
        }
    }
    else
    {
        alert("El texto no puede estar vacio");
        return false;
    }
}

function encriptar ()
{
    if (test()) 
    {
        var texto = textoOriginal.value
        encripted();
        if (texto.length != 0) {
            for (let index = 0; index < texto.length ; index++) 
            {
                if (texto[index] == "e"){
                    textoencriptado = textoencriptado + "enter";
                }
                else if (texto[index] == "i"){
                    textoencriptado = textoencriptado + "imes";
                }
                else if (texto[index] == "a"){
                    textoencriptado = textoencriptado + "ai";
                }
                else if (texto[index] == "o"){
                    textoencriptado = textoencriptado + "ober";
                }
                else if (texto[index] == "u"){
                    textoencriptado = textoencriptado + "ufat";
                }
                else{
                    textoencriptado = textoencriptado + texto[index];
                }
            }
        }
    
    h5.innerHTML = textoencriptado;
    textoencriptado ="";
    }  
}

function desencriptar ()
{
    if (test()) 
    {
        var texto = textoOriginal.value
        encripted();
        for (let index = 0; index < texto.length ; index++) 
            {
                if (texto[index] == "e"){
                    textoencriptado = textoencriptado + "e";
                    index = index + 4;
                }
                else if (texto[index] == "i"){
                    textoencriptado = textoencriptado + "i";
                    index = index + 3;
                }
                else if (texto[index] == "a"){
                    textoencriptado = textoencriptado + "a";
                    index = index + 1;
                }
                else if (texto[index] == "o"){
                    textoencriptado = textoencriptado + "o";
                    index = index + 3;
                }
                else if (texto[index] == "u"){
                    textoencriptado = textoencriptado + "u";
                    index = index + 3;
                }
                else{
                    textoencriptado = textoencriptado + texto[index];
                }
            }
        
    
    h5.innerHTML = textoencriptado;
    textoencriptado ="";
    }  
}
        
    

