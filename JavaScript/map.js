const nums = [1,2,3]
const strs = ['one', 'two', 'three']
const map = nums.map((val, index) => [val, strs[index]])
console.log(map)