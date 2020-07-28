/*vue crea este objeto y lo relaciona con todos los elementos que esten dentro del punto de montaje
para inyectar la información, fuera de esto no puede interactuar con nadie
las instancias separadas, no se pueden comunicar
instancia vue. todo el contenido de vue en html tiene que ir entre divs

two way data binding: es una forma ded comunicación que busca relacionar elementos intertaces fisicas del html con un 
script en particular, en especial al estado, que cuando el estado tenga un cambio
va a impactar directamente en algun elemento, estos se relacionen directamente

Enlace de datos en dos direcciones significa que si cambias el valor de un modelo en tu vista, todo
se mantendrá actualizado.
*/

let app1 = new Vue({                
    el: '#app',
    data: {
        message:'Hola Vue Js'
    }
})

app1.message = 'Imparando VueJs è divertente'


let data = {
  message:'Hola Mundo'
}


let app2 = new Vue ({
  el:'#app-2',
  data: data
})


let app3 = new Vue({
    el: '#app-3',
    data: {
      message: 'idiota ' + new Date().toLocaleString()
    }
})

/*una directiva es un indicador especial en la plantilla que le comunica a
la librería que haga algo a un elemento del DOM.*/

let app4 = new Vue({
    el:'#app-4',
    data:{
      seen: true
    }
})


let app5 = new Vue({
  el:'#app-5',
  data:{
    message: 'Hola'//'¡Nuestro Rey está muerto! ¡Enviar ayuda!'
  }
})

let app6 = new Vue({
  el:'#app-6',
  data:{
    stories: [
              { text: 'Learn JavaScript',edad:25},
              { text: 'Learn Vue', edad:30},
              {text: 'Build something awesome' },
               
            ],
    edades: {
       mayores: 18,
       menores: 13 ,
       ancianos:70 
    }

  }
})

//app6.todos.push({text:'pelotudo'})


new Vue ({
  el:'.container',
  data:{
    array:[0,1,2,3,4,5]
  }
})

new Vue ({
  el:'#app-7',
  data:{
    story:[{plot:'Qualcuno si ha mangiato il mio ciocolato...', scritore: 'Ignazio', upvotes:59 },
       {plot:'Qualcuno si ha mangiato la mia pizza...', scritore: 'Jorge', upvotes:25}]
  }
})

//Define los métodos en el objeto **`methods`**

let app8 = new Vue ({
  el:'#app-8',
  data:{
      message:'Hello Vue.2 js'
  },
  methods:{
    invertirMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  }
})

let app9 = new Vue ({
  el:'#app-9',
  data:{
    contador: 0
  }
//:v-on = @
})

let app10 = new Vue ({
      el:'#app-10',
      data:{
          contador: 0
      },
      methods: {
          contadores: function (){
              this.contador++;
              document.getElementById('boton').style.color ='blue'
          }
      }

})