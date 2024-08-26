function encriptarTexto(texto){
    return texto

    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
}

function desencriptarTexto(texto_encriptado) {
    return texto_encriptado
        .replace(/enter/g, 'e')   
        .replace(/imes/g, 'i')    
        .replace(/ai/g, 'a')      
        .replace(/ober/g, 'o')    
        .replace(/ufat/g, 'u');
}

function encriptar() { //tomamos los valores desde el HTML
    const textoIngresado = document.getElementById("texto_ingresado").value;
    const imagenPrincipal = document.querySelector(".imagen_principal");
    const imagenTexto1 = document.querySelector(".imagen_texto_1");
    const imagenTexto2 = document.querySelector(".imagen_texto_2");
    const botonCopiar = document.querySelector(".copiar");

    if (textoIngresado.length === 0) { //validamos que hayan valores para encriptar

        alert("Por favor, ingresa el texto que deseas encriptar.");
        return;
    }

    if (!/^[a-z\s]+$/.test(textoIngresado)) { //validamos que no hayan mayúsuculas, ni carácteres especiales. 

        alert("Solo se permiten letras minúsculas, sin acentos y sin carácteres especiales.");
        return;
    }
    
    const textoEncriptado = encriptarTexto(textoIngresado);

    imagenPrincipal.style.display = "none";
    imagenTexto1.textContent = "Mensaje encriptado:";
    //imagenTexto1.classList.add("rojo"); //añadir nuevas clases al elemento
    imagenTexto2.textContent = textoEncriptado;
    botonCopiar.style.display = "flex";
    botonCopiar.classList.add("copiar_activo");

    botonCopiar.addEventListener('click', function() {
        copiarAlPortapapeles(textoEncriptado);
    });
}

function desencriptar() {
    const ecriptadoDesencriptar = document.getElementById("texto_ingresado").value;
    const imagenPrincipal = document.querySelector(".imagen_principal");
    const imagenTexto1 = document.querySelector(".imagen_texto_1");
    const imagenTexto2 = document.querySelector(".imagen_texto_2");
    const botonCopiar = document.querySelector(".copiar");
    
    const resultado = desencriptarTexto(ecriptadoDesencriptar);

    imagenPrincipal.style.display = "none";
    imagenTexto1.textContent = "Mensaje encriptado:";
    imagenTexto2.textContent = resultado;
    botonCopiar.style.display = "flex";
    botonCopiar.classList.add("copiar_activo");

    botonCopiar.addEventListener('click', function() {
        copiarAlPortapapeles(resultado);
    });
}

function copiarAlPortapapeles(texto) {
    navigator.clipboard.writeText(texto)
    .then(() => {
        console.log('Texto copiado al portapapeles');
    })
    .catch(err => {
        console.error('Error al copiar el texto: ', err);
    });

}