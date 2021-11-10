const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js'
    },
    methods:{
        doThis: function(){
            alert('Hello')
        },
        onInputEnter: function(inputValue){
            console.log('Enter Enter')
            console.log(inputValue)
        },
        changeMessage: function(){
            this.message = 'New Hello Vue.js'
        }
    }
})