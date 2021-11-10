const app = new Vue({
    el: '#app',
    data: {
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
    filters: {
        getOddNums: function (nums){
            const oddNums = nums.filter(function (num){
                return num % 2
            })
            return oddNums
        },
        getUnderTenNums: function(nums){
            const underTen = nums.filter(function (num){
                return num < 10
            })
            return underTen
        }
    }
})