/*********************************************************************************/
/*                     JavaScript para ejercicio01.html                          */
/*                     Autora: Ruyi Xia Ye                                       */
/*                     Version: 1.0                                              */
/*                     Fecha: Mayo 2023                                          */
/*                     Comentarios: ejercicios JS de Lenguajes de Marcas         */
/*********************************************************************************/

document.getElementById("enviarForm").addEventListener("click", calculosRadio);

function calculosRadio(event) {

    event.preventDefault();

    let radio = parseInt(document.getElementById("radio").value);

    if (isNaN(radio)) {

        document.getElementById("resultado").innerHTML = "El valor introducido no es válido."

    } else {

        let longitudCircunferencia = 2 * Math.PI * radio;
        let areaCirculo = Math.PI * Math.pow(radio, 2);
        let volumenEsfera = (4 / 3) * Math.PI * Math.pow(radio, 3);

        document.getElementById("resultado").innerHTML = "La <strong>longitud de la circunferencia</strong> es: <strong>" + longitudCircunferencia.toFixed(2) + "</strong><br>El <strong>área del círculo</strong> es: <strong>"
        + areaCirculo.toFixed(2) + "</strong><br>El <strong>volumen de la esfera</strong> es: <strong>" 
        + volumenEsfera.toFixed(2) + "</strong>";

    }

    return false;

}
