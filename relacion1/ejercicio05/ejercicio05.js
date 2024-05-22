/*********************************************************************************/
/*                     JavaScript para ejercicio05.html                          */
/*                     Autora: Ruyi Xia Ye                                       */
/*                     Version: 1.0                                              */
/*                     Fecha: Mayo 2023                                          */
/*                     Comentarios: ejercicios JS de Lenguajes de Marcas         */
/*********************************************************************************/

document.getElementById("enviarForm").addEventListener("click", palindromo);

function palindromo(event) {

    event.preventDefault();

    
    let palabra = document.getElementById("palabra").value;
    palabra = palabra.toLowerCase();

    let inverso = palabra.split('').reverse().join('');

    if (!isNaN(parseFloat(palabra))) {

        document.getElementById("resultado").innerHTML = "El dato introducido debe ser una cadena de caracteres. ";

    } else {

        if (palabra === inverso) {
            document.getElementById("resultado").innerHTML = palabra + " es un palíndromo.";
    
        } else {
            
            inverso = palabra + inverso ;
            document.getElementById("resultado").innerHTML = palabra + " no es un palíndromo. Su " +
            "palíndromo correspondiente es " + inverso;
    
        }
        
    }

    return false;

}