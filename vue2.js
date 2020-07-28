const app = new Vue ({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [
            {nombre:'Pera', cantidad:10},
            {nombre:'Naranja', cantidad:0},
            {nombre:'Manzana', cantidad:15}
        ],
        nuevaFruta: '',
        total:0
    },
    methods: {
        agregarFruta() {
            this.frutas.push({nombre:this.nuevaFruta, cantidad: 0});
            this.nuevaFruta = null;
        },

    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total += fruta.cantidad
            }
            return this.total;
        }
    },

})