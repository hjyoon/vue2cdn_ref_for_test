const app = new Vue({
    el: '#app',
    data: {
        a: 0,
        delta: 0,
        increase: 0,
    },
    computed: {
        square: function () {
            console.log('Computed !')
            return this.a**2
        }
    },
    // a가 변경되면 변경된 값을 콜백함수의 첫번째 인자로 전달하고 이전 값을 두번째 인자로 전달
    // computed는 새 프로퍼티를 생성하지만 watch는 아무 프로퍼티도 생성하지 않고 익명함수는 단순히 콜백함수 역할만 함
    // watch에 명시된 프로퍼티는 감시할 대상을 의미할 뿐임
    watch: {
        a: function (newValue, oldValue) {
            console.log('Watch !')
            this.increase = newValue - oldValue
        }
    }
})