window.onload=iniciar;
let array=[];

function iniciar(){

    btnPublicar= document.getElementById("btnPublicar");
    btnPublicar.addEventListener("click",btnPublicar1)
}

function btnPublicar1(){
   
    let nombreUsuario = document.getElementById("txtNombre");
    let txtNombre = nombreUsuario.value;
    let emailUsuario = document.getElementById("txtEmail");
    let txtEmail = emailUsuario.value;
    let Resena = document.getElementById("txtResena");
    let txtresena = Resena.value;

    let opcionNumerica = document.getElementById("selecValoracion").value;
    



   
    let resenaDiv = document.createTextNode(txtresena + ' - ' + opcionNumerica);
    
    let parrafo = document.createElement('p');
   
    parrafo.appendChild(resenaDiv );
   
    document.getElementById("resenas").appendChild(parrafo);
  

 

}