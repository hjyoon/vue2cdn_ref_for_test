const app = new Vue({
    el: '#app',
    data: {
        myMessage: '',
        myMessage2: '',
        isChecked: true,
    },
    methods: {
        onInputChange: function (e) {
            this.myMessage = e.target.value
            console.log(e)
        }
    }
})