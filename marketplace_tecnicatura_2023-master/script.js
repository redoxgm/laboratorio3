function agregarComentario(evento) {
    //Evito que recargue la página
    evento.preventDefault();

    //Obtengo los valores ingresados
    let textoComentario = document.getElementById('texto-comentario').value;
    let puntaje = document.getElementById('puntaje-feedback').value;

    //Agrego el feedback a la página
    let texto = document.createTextNode(textoComentario + ' - ' + puntaje + '/5');
    let parrafo = document.createElement('p')
    parrafo.appendChild(texto);

    document.getElementById('listado-comentarios').appendChild(parrafo);

    //Reinicio los valores de los input
    document.getElementById('texto-comentario').value = '';
    document.getElementById('puntaje-feedback').value = '1';
}

document.getElementById('boton-enviar-comentario')
    .addEventListener('click', agregarComentario)


fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1')
.then((response) => {
    return response.json();

})
.then((objeto) => {
   
    let titulo = objeto.title;
    let text = document.createTextNode(titulo);
    document.getElementById("titulo").appendChild(text);


    
    let imagen = objeto.image_url;
    console.log(imagen)
    let textImagen = document.createTextNode(imagen);
    let img = document.createElement('img');
    img.src = imagen
    document.getElementById("imagen-producto").appendChild(img)
   

    let descripcion = objeto.description;
    console.log(descripcion)
    let text3 = document.createTextNode(descripcion);
    document.getElementById("descripcion1").appendChild(text3);

    let url = objeto.factory_url;
    console.log(url)
    let a = document.getElementById("link");
    a.href = url

    let tipoNootebook = objeto.notebooksTypes;
    console.log(tipoNootebook)

    for (let tipo of productos.notebooksTypes){
        let h3 = document.createElement('h3');
        let textH3 = document.createTextNode('Tipo Computadora')
        let lista = document.createElement('ul');
        let precio = document.createElement('li');
        let ram = document.createElement('li');
        let preciotxt = document.createTextNode('precio: ' + tipoNootebook.precio)
        let ramtxt = document.createTextNode('Ram: ' + tipoNootebook.ram)

        precio.appendChild(preciotx)
        ram.appendChild(ramtxt)

        lista.appendChild(precio)
        lista.appendChild(ram)
    }
    
   

})

