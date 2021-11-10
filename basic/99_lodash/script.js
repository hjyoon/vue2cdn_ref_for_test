console.log('-----------------1. reverse---------------')
//1. reverse - Vanilla O
// Vanilla
const arr1 = [1, 2, 3, 4]
const reverseArr1 = arr1.reverse()
console.log(reverseArr1)
// Lodash
const arr2 = [1, 2, 3, 4]
const reverseArr2 = _.reverse(arr2)
console.log(reverseArr2)

console.log('-----------------2. sort---------------')
//2. sort - Weird Operation in Vanilla 
// Vanilla 
const num1 = [10, 1, 3, 7, 4]
num1.sort()
console.log(num1)
num1.sort(function (num1, num2){
    return num1 - num2
})
console.log(num1)

// Lodash
const num2 = [10, 1, 3, 7, 4]
const sortedNum2 = _.sortBy(num2)
console.log(sortedNum2)

console.log('-----------------3-1. range---------------')
//3. range - Vanilla X
// Lodash
const nums1 = _.range(4)
const nums2 = _.range(1, 5)
const nums3 = _.range(1, 7, 2)
console.log(nums1)
console.log(nums2)
console.log(nums3)

console.log('-----------------3-2. random---------------')
//3-2. random - Vanilla ?
const random1 = _.random(0, 5)
const random2 = _.random(5)
const random3 = _.random(0, 1, true)
console.log(random1)
console.log(random2)
console.log(random3)

console.log('-----------------3-3. sampleSize---------------')
//3-3. sampleSize - Vanilla ?
const result = _.sample([1,2,3,4,5])
const result2 = _.sampleSize([1,2,3,4,5,6,7,8,9,10], 5)
console.log(result)
console.log(result2)
const sortedResult1 = _.sortBy(result2)
console.log(sortedResult1)