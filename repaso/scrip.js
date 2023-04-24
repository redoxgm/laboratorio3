window.onload=iniciar;

function iniciar(){

    let calcular = document.getElementById("btnCalcular");
     calcular.addEventListener("click",btnCalcular)
}

function btnCalcular(){
    let numeroConvertir = "";
    let resultado="";
    let txtUnidad = document.getElementById("txtUnidad").value;


   
    if(txtUnidad.length > 0 && parseInt(txtUnidad)){
        console.log(txtUnidad);
       numeroConvertir = txtUnidad;
        

    }else{alert("Debe ingresar un valor en numero")}

  
    let opcionSeleccionada = document.getElementById("selectUnidadIngresada");
    let unidadSeleccionada = opcionSeleccionada.options[opcionSeleccionada.selectedIndex].value;

    let segundaOpcion= document.getElementById("selectUnidadConvertir");
    let opcionConvertir = segundaOpcion.options[segundaOpcion.selectedIndex].value;
   
    
     if (unidadSeleccionada === "celsius" && opcionConvertir === "fahrenheit" || unidadSeleccionada === "fahrenheit" && opcionConvertir === "celsius" ){
        
        if (unidadSeleccionada === "celsius"){
           
            resultado = (numeroConvertir * 9.5) + 32 ;
            console.log(resultado)
            let txtResultado = document.createTextNode("resultado de la conversion: " + resultado);
            let parrafo = document.createElement('p');
            parrafo.appendChild(txtResultado);
            document.getElementById("txtResultado").appendChild(parrafo);
        }

        if(unidadSeleccionada === "fahrenheit"){
            resultado = (numeroConvertir - 32) * 9.5
            console.log(resultado)
            let txtResultado = document.createTextNode("resultado de la conversion: " + resultado);
            let parrafo = document.createElement('p');
            parrafo.appendChild(txtResultado);
            document.getElementById("txtResultado").appendChild(parrafo);

        }

    } else if(unidadSeleccionada === "kilómetros" && opcionConvertir === "millas" || unidadSeleccionada === "millas" && opcionConvertir === "kilómetros" ){
       
        if(unidadSeleccionada === "kilómetros" ){
            resultado= numeroConvertir * 0.62137;
            console.log(resultado);
            let txtResultado = document.createTextNode("resultado de la conversion: " + resultado);
            let parrafo = document.createElement('p');
            parrafo.appendChild(txtResultado);
            document.getElementById("txtResultado").appendChild(parrafo);
        }

        if(unidadSeleccionada === "millas"){
            resultado= numeroConvertir * 1.609;
            console.log(resultado);
            let txtResultado = document.createTextNode("resultado de la conversion: " + resultado);
            let parrafo = document.createElement('p');
            parrafo.appendChild(txtResultado);
            document.getElementById("txtResultado").appendChild(parrafo);
        }
        
 
    }else if (unidadSeleccionada === "libras" && opcionConvertir === "kilogramos" || unidadSeleccionada === "kilogramos" && opcionConvertir === "libras"){

        if(unidadSeleccionada === "libras" ){
            resultado= numeroConvertir/2.2046;
            console.log(resultado);
            let txtResultado = document.createTextNode("resultado de la conversion: " + resultado);
            let parrafo = document.createElement('p');
            parrafo.appendChild(txtResultado);
            document.getElementById("txtResultado").appendChild(parrafo);
        }

        if(unidadSeleccionada === "kilogramos"){
            resultado = numeroConvertir * 2.205
            console.log(resultado);
            let txtResultado = document.createTextNode("resultado de la conversion: " + resultado);
            let parrafo = document.createElement('p');
            parrafo.appendChild(txtResultado);
            document.getElementById("txtResultado").appendChild(parrafo); 
        }

    }

    
        
}




