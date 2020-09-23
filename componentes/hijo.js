Vue.component('hijo',{
    template: /*inline-html*/

    `
    <div class="py-5 text-center bg-success">
        <h4>Componente hijo: {{numero}}</h4>
        <h4>Nombre:{{nombre}}</h4>
        <button @click="transfer">+</button>
        <button @click="intransfer">-</button>
    </div> 
    
    `,
    props:['numero'],    //props permiten la comunicación entre componentes
    data() {
        return {
            nombre:'Ignacio',
        }
    },
    methods: {
        transfer:function(){
            this.$emit('numero')
        },
        intransfer:function(){
            this.$emit('numero2')
        }
    },
    mounted() {  //se ejecuta una vez que el dom esta listo
        this.$emit('nombreHijo',this.nombre);
    },
})