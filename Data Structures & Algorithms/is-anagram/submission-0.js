class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();
        for (let i = 0; i < s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0) + 1);
        }
         for (let i = 0; i < t.length; i++) {
            map.set(t[i], map.get(t[i]) - 1);
            if(map.get(t[i]) === 0) map.delete(t[i])
        }

        return map.size === 0
    }
}
