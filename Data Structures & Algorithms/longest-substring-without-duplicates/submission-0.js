class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let max = 0;
        let low = 0,
            high = 0;
        for (let i = 0; i < s.length; i++) {
            while(set.has(s[i])){
                set.delete(s[low]);
                low++
            }
            max = Math.max(max,high-low+1)
            set.add(s[i]);
            high++
        }
        return max
    }
}
