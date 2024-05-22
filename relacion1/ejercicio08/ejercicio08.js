/*********************************************************************************/
/*                     JavaScript para ejercicio08.html                          */
/*                     Autora: Ruyi Xia Ye                                       */
/*                     Version: 1.0                                              */
/*                     Fecha: Mayo 2023                                          */
/*                     Comentarios: ejercicios JS de Lenguajes de Marcas         */
/*********************************************************************************/

document.getElementById("enviarForm").addEventListener("click", mostrarMes);

function mostrarMes(event) {

    event.preventDefault();

    const meses = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
                    "Octubre", "Noviembre", "Diciembre" ];

    let valor = document.getElementById("mes").value;
    let nombreMes = meses[valor];

    document.getElementById("resultado").innerHTML = "El mes seleccionado es: <strong>" + nombreMes + "</strong>";

    return false;

}