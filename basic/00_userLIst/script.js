// MVVM - ViewModel
const app = new Vue({
    //1. DOM과 data 연결
    el: '#app',

    // MVVM - Model
    data: {
        userName: 'Unknown',
        message: 'Hello Vue.js',
    },

    //2. Data가 바뀌면 
    methods: {
        onInputChange: function (event) {
            this.userName = event.target.value
        }
    }
})
