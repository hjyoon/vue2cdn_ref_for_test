const app = new Vue({
    el: '#app',
    data: {
        imgSrc: [...Array(20)].map((v, i) => {
            return {
                id: i,
                url: './loading.gif'
            }
        }),
    },
    methods: {
        getCatsList: function () {
            const API_URL = "https://api.thecatapi.com/v1/images/search"
            for (let i = 0; i < this.imgSrc.length; i++) {
                (async (i) => {
                    const response = await fetch(API_URL)
                    if(response.ok) {
                        const data = await response.json()
                        console.log(data)
                        this.imgSrc[i].url = data[0].url
                    }
                })(i)
            }
        },
        getCat: async function() {
            const API_URL = "https://api.thecatapi.com/v1/images/search"
            // axios.get(API_URL)
            // .then(response => {
            //     // console.log(response.data[0].url)
            //     this.imgSrc = response.data[0].url
            // })
            // .catch(error => {
            //     console.log(error)
            // })
            this.imgSrc = './loading.gif'
            const response = await fetch(API_URL)
            if(response.ok) {
                const data = await response.json()
                this.imgSrc = data[0].url
            }
        }
    },
    created: function () {
        //this.getCat()
        this.getCatsList()
    },
    updated: function() {
        console.log(this.imgSrc)
    }
})