var listadoArray = []

function showLista(lista) {

    let contenido = "";
    for (let i = 0; i < lista.length; i++) {
        let dato = lista[i];

        contenido += "Nombre: " + dato.nombre + "<br>";
        contenido += "Apellido: " + dato.apellido + "<br>";
        contenido += "Edad: " + dato.edad + "<br>";
        contenido += "Contacto: " + dato.contacto + "<br>";
        contenido += "Mail: " + dato.mail + "<br>";
        contenido += "Fecha de nacimiento: " + dato.fechaDeNacimiento + "<br>";
        contenido += "Peso(Kg): " + dato.peso + "<br>";
        contenido += "Alltura: " + dato.altura + "<br>";
        contenido += "Inscripcion: " + dato.inscripcion + "<br>";
        contenido += "Pase: " + dato.pase + "<br>";
        contenido += "<br><hr><br>";



        document.getElementById("listado").innerHTML = contenido;
    }
}


document.addEventListener("DOMContentloaded", function (e){
   
    getJSONData(LIST_URL).then(function (resultObj) {
        if (resultObj.status === "ok") 
        {
            listadoArray = resultObj.data;

            showLista(listadoArray);
        }
    });
   
   });  

