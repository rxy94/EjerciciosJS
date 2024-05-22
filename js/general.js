/*********************************************************************************/
/*                     JavaScript para modo DARK y LIGHT                         */
/*                     Autora: Ruyi Xia Ye                                       */
/*                     Version: 1.0                                              */
/*                     Fecha: Mayo 2023                                          */
/*                     Comentarios: ejercicios JS de Lenguajes de Marcas         */
/*********************************************************************************/
document.getElementById("btnDark").addEventListener("click", cambiarDark);
document.getElementById("btnLight").addEventListener("click", cambiarLight);

function cambiarDark() {
    document.getElementById("estilo").setAttribute("href", "../../css/dark.css");
}

function cambiarLight() {
    document.getElementById("estilo").setAttribute("href", "../../css/formulario.css");
}