/*components: sirven para separar el sitio web, en distintas secciones. encapsulan codigo reutilizable
*/
Vue.component('saludo',{
        //para template hay que envolver todo dentro de un contenedor div
    template: 
        
    `
        <div>
            <h1>{{saludo}}</h1>
            <h3>aja</h3>
        </div>

        `,
        data() {
            return {
                saludo:'Hola desde Vue'
            }
        },
});