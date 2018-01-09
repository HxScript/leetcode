var log = function() {
	return console.log.apply(console, arguments)
}

var ensure = function(condition, message) {
	if (!condition) {
		log('*** 测试失败:', message)
	}
}
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 var log = function() {
	return console.log.apply(console, arguments)
}

var addTwoNumbers = function(l1, l2) {
	//将两个数组l1,l2变为num，再相加
	var turnNum = function(l) {
		var num = 0
		for(i = 0; i < l.length; i++) {
			var a = Math.pow(10, i)
			num += l[i] * a
		}
		return num
	}
	var num1 = turnNum(l1)
	var num2 = turnNum(l2)
	var addNum = num1 + num2

	// 再将addNum转换成数组
	var outStr = ''
	outStr = String(addNum)

	var turnArr = function (s) {
		var arr = []
		var j = 0
		for (var i = s.length - 1; i >= 0; i--) {
			arr[j] = parseInt(s[i])
			j = j + 1
		}
	return arr
	}
	var output = turnArr(outStr)
	return output
};

addTwoNumbers([2,4,3], [5,6,4])


//虽然我自己写出来了，但是跑leetcode不对。
//检查一下发现是没搞清楚array和listNode.
//天亮重新研究下吧！


