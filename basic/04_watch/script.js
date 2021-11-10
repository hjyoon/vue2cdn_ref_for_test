const app = new Vue({
    el: '#app',
    data: {
        num: 2,
    },
    watch:{
        num: function() {
            console.log(`${this.num}이 변경되었습니다.`)
        }
    }
})