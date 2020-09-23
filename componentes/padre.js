Vue.component('padre',{
    template: /*inline-html*/
    `
    <div class= "p-5 bg-dark text-white text-center">
        <input v-model="numeroPadre">
        <h2>Componente Padre:{{numeroPadre}}</h2>
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
        {{nombrePadre}}
        <hijo :numero='numeroPadre' @nombreHijo="nombrePadre= $event" @numero="sumarNum"  @numero2='restarNum'></hijo>
    </div>

    `,
    data() {
        return {
            numeroPadre: 15,
            nombrePadre:'',
        }
    },
    methods: {
        sumarNum:function(){
            this.numeroPadre++;
        },
        restarNum:function(){
            this.numeroPadre--;
        }
    },
    
    //para la comunicación entre componentes es mejor utilizar la libreria vuex

})