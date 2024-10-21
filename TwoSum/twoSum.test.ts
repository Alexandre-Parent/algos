import { twoSum } from './twoSum'; 

describe('twoSum', () => {
  it('should return indices of the two numbers that add up to the target', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 1]);
  });

  it('should return indices of the two numbers that add up to the target', () => {
    const nums = [3,2,4];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result).toEqual([1,2]);
  });

  it('should return an empty array if no solution exists', () => {
    const nums = [1, 2, 3];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result).toEqual([]); 
  });
});
