// view model
const app = new Vue({
    el: '#app',
    // model
    data: {
        lunch: ['감자탕', '마라탕', '카레', '소고기', '찜딹'],
        selectedLunchMenu: null,
        sampleNums: [],
        sortedSampleNums: [],
    },
    methods: {
        pickOneInLunchMenu: function() {
            this.selectedLunchMenu = _.sample(this.lunch)
        },
        getLuckyNumbers: function() {
            const numbers = _.range(1, 46)
            this.sampleNums = _.sampleSize(numbers, 6)
            this.sortedSampleNums = _.sortBy(this.sampleNums)
        }
    }
})