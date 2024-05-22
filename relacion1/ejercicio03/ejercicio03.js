/*********************************************************************************/
/*                     JavaScript para ejercicio03.html                          */
/*                     Autora: Ruyi Xia Ye                                       */
/*                     Version: 1.0                                              */
/*                     Fecha: Mayo 2023                                          */
/*                     Comentarios: ejercicios JS de Lenguajes de Marcas         */
/*********************************************************************************/

document.getElementById("enviarForm").addEventListener("click", calculoLetra);

function calculoLetra(event) {

    event.preventDefault();

    const LETRA = "TRWAGMYFPDXBNJZSQVHLCKE";
    const dniRegex = /^[0-9]{8}$/;

    let dni = parseInt(document.getElementById("dni").value);

    if (!dniRegex.test(dni)) {
        
        document.getElementById("resultado").innerHTML = "<br>El formato de dni introducido no es válido.<br>Debe introducir 8 números enteros.";
        
    } else {

        let resto = dni % 23;

        document.getElementById("resultado").innerHTML = "La letra es: <strong>" + LETRA[resto] + "</strong>";

    }

    return false;

}