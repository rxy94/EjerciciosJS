/*********************************************************************************/
/*                     JavaScript para ejercicio07.html                          */
/*                     Autora: Ruyi Xia Ye                                       */
/*                     Version: 1.0                                              */
/*                     Fecha: Mayo 2023                                          */
/*                     Comentarios: ejercicios JS de Lenguajes de Marcas         */
/*********************************************************************************/

document.getElementById("enviarForm").addEventListener("click", calcularMcd);

function calcularMcd(event) {

    event.preventDefault();
    
    let dividendo = parseInt(document.getElementById("dividendo").value);
    let divisor = parseInt(document.getElementById("divisor").value);
    let temp;
    let mcd;

    if (isNaN(dividendo) || isNaN(divisor)) {

        document.getElementById("resultado").innerHTML = "Los valores introducidos no son válidos. Introduzca números enteros.";

    } else {

        while (divisor !== 0) {
            temp = divisor;
            divisor = dividendo % divisor;
            dividendo = temp;
        }

        mcd = Math.abs(dividendo); 

        document.getElementById("resultado").innerHTML = "El máximo común divisor (MCD) es: " + mcd;
    }

    return false;

}