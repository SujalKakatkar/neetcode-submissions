class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const result = [];
        const bucket = Array(nums.length+1).fill(null).map(()=>[]);
        for (let ele of nums) {
            map.set(ele, (map.get(ele) || 0) + 1);
        }
        for(let [num,freq] of map){
            bucket[freq].push(num);
        }
        for(let i=bucket.length-1; i>=0; i--){
            for(let ele of bucket[i]){
                result.push(ele);
                if(result.length===k){
                    return result;
                }
            }
        }
    }
}
