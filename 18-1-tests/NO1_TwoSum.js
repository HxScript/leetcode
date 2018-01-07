// Example:
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {
    var sum
    for(var i = 0; i < nums.length;i++){
        for(var j = i+1; j < nums.length;j++){
            var n1 = nums[i]
            var n2 = nums[j]
            sum = n1 + n2
            if(sum == target){
              var number=[]
              number[0] = i
              number[1] = j
              return(number)
            }
        }
    }

};


twoSum([1,2,3,4,5],7)
twoSum([1,2,3,4,5,9,10,11],19)

//最开始我在最内层的循环中，当sum==target时运用break跳出循环。
//然后发现break 语句只能跳出内层循环。
//因而要完成这个任务需要在外层for循环中也加入一个break。
//完全不够优雅。
//于是想到return可以直接跳出函数，return就是函数的出口。
//
//可是如果要跳出两个
