const app = new Vue({
    el: '#app',
    data: {
        num: 3
    },
    computed: {
        doubleNum: function() {
            return this.num * 2
        }
    }
})