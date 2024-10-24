/**
 * @param {string[]} strs
 * @return {string}
 * 
 *
 */


export function longestCommonPrefix(strs) {
  if (strs.length === 0) return ""; 
  
  let j = 0;
  let common_prefix = ""; 
  
  while (j < strs[0].length) {
    let currentChar = strs[0][j];
    
    for (let i = 1; i < strs.length; i++) {
    
      if (j >= strs[i].length || strs[i][j] !== currentChar) {
        return common_prefix;
      }
    }
    
    
    common_prefix += currentChar;
    j++;
  }
  
  return common_prefix; 
}
