let bus = new Vue()

Vue.component('food',{
    template:'#food',
    props:['name'],
    data() {
        return {
            votes:0,
        }
    },
    methods:{
        vote: function(event){
            /*this.votes++,
            this.$emit('voted',event.srcElement.textContent)*/
            this.votes++
            let food = event.srcElement.textContent; //En lugar de usar this.name podemos acceder al texto del elemento
            bus.$emit('voted', food)
        },
        reset: function(){
            this.votes = 0
        }
    },
    created() {
        bus.$on('reset',this.reset) //Después de que la instancia es creada.
    },
})

/*La función $emit junto con el nombre del evento como argumento pasa cualquier
argumento adicional a la función de retorno del evento. Por ejemplo: vm.$emit('voted')*/

/*Para hacer que todos los componentes puedan comunicarse entre sí, usaremos una instancia de
Vue vacía como un bus central de eventos. Entonces dentro del hook created de los componentes,
registraremos los listeners del evento usando bus.$on en lugar de this.$on. En consecuencia,
usaremos bus.$emit para despachar todos los eventos.*/

/*
v-on para escuchar eventos $on
Vue components have a $emit() function that allows you to pass custom events up the component tree.
Generally, you use $emit() to notify the parent component that something changed.   
*/ 