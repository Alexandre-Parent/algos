import {longestCommonPrefix} from './longestCommonPrefix';


describe('longestCommonPrefix', () => {
  it('should return the prefix', () => {
    const strs = ["flower","flow","flight"];
    
    const result = longestCommonPrefix(strs);
    expect(result).toEqual("fl");
  });

  it('should return empty', () => {
    const strs = ["car","dog","card"];
    
    const result = longestCommonPrefix(strs);
    expect(result).toEqual("");
  });

 
});