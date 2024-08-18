
const imagen = document.getElementById("spinner"); // aca selecciona los elementos del DOM
const gira = document.getElementById("girar");

imagen.src="./spinner.png" // se le asigna la ruta de la imagen

gira.addEventListener('click',()=> {
    if (spinner.style.display === 'none'|| spinner.style.display === ''){ // Aca se verifica si el elemento está oculto o no tiene un estilo de display 
        spinner.style.display = 'block'; // aca lo muestra al elemento 
        spinner.classList.add('spin'); // se inicia la animacion para el spinner
    } 
    else{
        spinner.style.display ='none';// aca si esta visible, lo oculta
        spinner.classList.remove('spin'); // detiene la animacion
    }
});





