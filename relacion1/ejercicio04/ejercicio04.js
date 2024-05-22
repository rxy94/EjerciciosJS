/*********************************************************************************/
/*                     JavaScript para ejercicio04.html                          */
/*                     Autora: Ruyi Xia Ye                                       */
/*                     Version: 1.0                                              */
/*                     Fecha: Mayo 2023                                          */
/*                     Comentarios: ejercicios JS de Lenguajes de Marcas         */
/*********************************************************************************/

document.getElementById("enviarForm").addEventListener("click", cadena);

function cadena(event) {

    event.preventDefault();

    let texto = document.getElementById("cadena").value;

    if (!isNaN(parseFloat(texto))) {

        document.getElementById("resultado").innerHTML = "El dato introducido debe ser una cadena de caracteres. ";

    } else {

        if (texto === texto.toUpperCase()) {

            document.getElementById("resultado").innerHTML = "La cadena está en MAYÚSCULAS.";

        } else if (texto === texto.toLowerCase()) {

            document.getElementById("resultado").innerHTML = "La cadena está en minúsculas.";

        } else {

            document.getElementById("resultado").innerHTML = "La cadena contiene una combinación de mayúsculas y minúsculas.";
        }

    }

    return false;

}


