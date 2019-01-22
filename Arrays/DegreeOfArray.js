// https://leetcode.com/problems/degree-of-an-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {

    const map = new Map();
    for (let num of nums) {
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            let value = map.get(num);
            value++;
            map.set(num, value);
        }
    }
    console.log(map);
    let maxFrequence = 0;
    let mostFrequentValue = [];
    for (let [key, value] of map.entries()) {
        if (value >= maxFrequence) {
            maxFrequence = value;
            mostFrequentValue.push(key);
        }
    }
    console.log("maxFrequence", maxFrequence);
    console.log("mostFrequentValue", mostFrequentValue);
    
    // find the minumum length substring
    let indices = [];
    let counts = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === mostFrequentValue) {
            count++;
            if (count === 1) {
                firstIndex = i;
            } else if (count === maxFrequence) {
                lastIndex === i;
            }
        }
    }
    
    // create a substring from firstIndex to lastIndex
    // const result = nums.slice(firstIndex, lastIndex + 1);
    // return (lastIndex -  firstIndex) + 1;       
};

let arr = [1, 2, 2, 3, 1];
console.log(findShortestSubArray(arr));