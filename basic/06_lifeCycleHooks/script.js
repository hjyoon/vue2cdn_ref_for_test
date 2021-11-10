const API_URL = 'https://dog.ceo/api/breeds/image/random'
const app = new Vue({
    el: '#app',
    data: {
        imgSrc: '',
    },
    methods: {
        getImg: async function () {
            // axios 사용
            // axios.get(API_URL)
            // .then(response => {
            //     this.imgSrc = response.data.message
            // })

            // await 사용
            const response = await fetch(API_URL)
            const data = await response.json()
            this.imgSrc = data.message

            // promise, then 사용
            // fetch(API_URL)
            //     .then(response => response.json())
            //     .then(data => { this.imgSrc = data.message })
        }
    },
    created: function () {
        this.getImg()
    }
})