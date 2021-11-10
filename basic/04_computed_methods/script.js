const app = new Vue({
    el: '#app',
    data:{
        message: '안녕하세요'
    },
    computed:{
        reversedMessageComputed: function(){
            return this.message.split('').reverse().join('')
        }
    },
    methods:{
        reversedMessageMethod: function(){
            return this.message.split('').reverse().join('')
        }
    },
})