Vue.component('chariot', {
    props: ['chariot', 'current'],
    template: '#chariot-template',
    methods: {
        rideChariot: function (chariot) {
            this.$emit('select', chariot)
        },
    },
    computed: {
        //is true when the chariot has more horses than the current one
        hasMoreHorses: function () {
            return this.current.horses < this.chariot.horses
        },
        //is true when the chariot is the current one
        isCurrent: function () {
            return this.current.name === this.chariot.name
        },
        //is true when there is no chariot current
        noChariot: function () {
            return this.current.name === null;
        },
        //define the action for each chariot
        action: function () {
            var action;
            if (this.noChariot) {
                action = 'Pick Chariot'
            } else if (this.isCurrent) {
                action = 'Riding!'
            } else if (this.hasMoreHorses) {
                action = 'Hire Horses'
            } else {
                action = 'Dismiss Horses'
            }
            return action;
        }
    }
});
