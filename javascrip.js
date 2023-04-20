window.onload=iniciar;
let array=[];

function iniciar(){

    btnPublicar= document.getElementById("btnPublicar");
    btnPublicar.addEventListener("click",btnPublicar1)
}

function btnPublicar1(){
    let resena = document.getElementById("resenas")
    let nombreUsuario = document.getElementById("txtNombre")
    let txtNombre = nombreUsuario.value;
    let emailUsuario = document.getElementById("txtEmail")
    let txtEmail = emailUsuario.value;
    let Resena = document.getElementById("txtResena")
    let txtresena = Resena.value;

    let nombre = document.createElement("p");
    let resena1=  document.createTextNode(txtresena);
    let email= document.createAttribute("p")

    var elementResena = document.getElementById("resenas");
    elementResena.appendChild(nombre,email,resena1)

    // array.push(txtNombre);
    // array.push(txtEmail);
    // array.push(txtresena);
    // contruirResena();
    
}

// function contruirResena(){

    
//     let resenaContruida= document.getElementById("resenas")
//     let resena=""
//     for(let tarea of array ){
//        resena += tarea + "<br/>";
//     }

    
//     resenaContruida.innerHTML=resena;
    

   
// }