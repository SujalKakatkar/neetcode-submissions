class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let left = 0;
        const map = new Map();
        let right = nums.length;
        for (let i = 0; i < nums.length; i++) {
            let need = target - nums[i];
            if (map.has(need)) {
                return [map.get(need), i];
            }
            map.set(nums[i],i)
        }
    }
}
