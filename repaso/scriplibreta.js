window.onload = iniciar;

function iniciar(){

    let agregarTarea = document.getElementById("agregarTarea");
    agregarTarea.addEventListener("click",tareaNueva);

    let editar =document.getElementById("btnEditar");
    editar.addEventListener("click",modificarTarea)


}


function tareaNueva(){


    let txtNombre = document.getElementById("txtNombre").value;

    let txtDescripcion = document.getElementById("txtDescripcion").value;

    let imprimirTareaNueva = document.createTextNode(txtNombre+": " + txtDescripcion);

    let parrafo = document.createElement('p');
     
    parrafo.appendChild(imprimirTareaNueva)

    document.getElementById("tareaNueva").appendChild(parrafo)


}

function modificarTarea(){
    console.log("holaMundo")
}

