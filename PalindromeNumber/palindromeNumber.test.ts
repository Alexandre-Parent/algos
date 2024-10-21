import { isPalindrome } from './palindromeNumber';

describe('isPalindrome', () => {
  it('should return true for a positive palindrome number', () => {
    expect(isPalindrome(121)).toBe(true); 
  });

  it('should return false for a positive non-palindrome number', () => {
    expect(isPalindrome(123)).toBe(false); 
  });

  it('should return false for a negative number', () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  it('should return true for a single digit number', () => {
    expect(isPalindrome(7)).toBe(true); 
  });

  it('should return true for 0', () => {
    expect(isPalindrome(0)).toBe(true); 
  });

  it('should return false for a large non-palindrome number', () => {
    expect(isPalindrome(123456)).toBe(false); 
  });

  it('should return true for a large palindrome number', () => {
    expect(isPalindrome(12321)).toBe(true);
  });
});
