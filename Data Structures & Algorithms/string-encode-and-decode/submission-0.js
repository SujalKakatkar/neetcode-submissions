class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let parts = [];
        for (const str of strs) {
            parts.push(`${str.length}#${str}`);
        }
        return parts.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let result = [];
        while (i < str.length) {
            let j = str.indexOf("#", i);
            let len = parseInt(str.slice(i, j));
            let decoded = str.slice(j + 1, j + 1 + len);
            result.push(decoded);
            i = j + 1 + len;
        }
        return result;
    }
}
