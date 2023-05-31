const app = Vue.createApp({
    data() {
        return {
            carro: [],
            a:0,
            selectRam:0,
            listaNotebookSeleccionada:[],
            precio:0,
            
           c:[
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RwLPY5R9R3uKnz0Nmy5tFf17DM61WKXhlBjCbfWMl6osiVzl-LIOy3WHltd66j9WXNU&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJQSNOWkS20mQugebEQa-b0ZTfN-oWKro9cR2gZ72zkpFeewAqy7kGEXsYcQqKy9u6Olw&usqp=CAU',
                "https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png"
            ],
            "id": 1,
            "title": "Notebook HP 14-dq2024la",
            "image_url": "https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png",
            "description": "Computadora HP orientado para gama media. Procesador Intel® Core™ i3 de 11.ª generación.  Windows 10 Home 64.  Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB . Pantalla de 14 pulgadas.",
            "factory_url": "https://www.hp.com/ar-es/shop/notebook-hp-14-dq2024la-3v8j6la.html",
            "notebooksTypes": [
                {
                    id:0,
                    "ramAmount": "8 GB",
                    "price": 100000
                },
                {
                    id:1,
                    "ramAmount": "16 GB",
                    "price": 122547
                }
            ]
        }
        
    },
    methods: {
        

        

        ram(indice) {

            return this.notebooksTypes[indice].ramAmount

        },

        PrecioSeleccionado(indice) {

            this.selectRam = indice
            this.listaNotebookSeleccionada.push(this.notebooksTypes[indice])
                       

        },


        agregar() {

           
            return  this.carro.push(this.notebooksTypes[this.selectRam])
        },
       
        cambiarImagen(imagenUrl) {
            this.image_url = imagenUrl;
        },
      
    },
   
    computed:{


        mostrarPrecioeleccionado(){
            return this.precio = this.notebooksTypes[this.selectRam].price
        },


        sumaPreciosSeleccionados(){

            let suma=0;

            for(let item of this.carro){

               suma += item.price;
                
            }

            return suma;

        }

        

    }

    

   
    
    

})

app.mount('#grid-layout')
