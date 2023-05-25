const app = Vue.createApp({
    data() {
        return {
            carro: 0,
            selectRam:0,
            "id": 1,
            "title": "Notebook HP 14-dq2024la",
            "description": "Computadora HP orientado para gama media. Procesador Intel® Core™ i3 de 11.ª generación.  Windows 10 Home 64.  Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB . Pantalla de 14 pulgadas.",
            "image_url": "https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png",
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
        agregar(){

            return this.carro = this.carro + 1
        },

        
        precio(indice){

            return this.notebooksTypes[indice].ramAmount
            
        }


    },

   
    
    

})

app.mount('#grid-layout')
