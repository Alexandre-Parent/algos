import { romanToInt } from './romanToInt'; 

describe('romanToInt', () => {
  test('should convert single Roman numeral correctly', () => {
    expect(romanToInt('I')).toBe(1);
    expect(romanToInt('V')).toBe(5);
    expect(romanToInt('X')).toBe(10);
    expect(romanToInt('L')).toBe(50);
    expect(romanToInt('C')).toBe(100);
    expect(romanToInt('D')).toBe(500);
    expect(romanToInt('M')).toBe(1000);
  });

  test('should handle simple cases correctly', () => {
    expect(romanToInt('II')).toBe(2);
    expect(romanToInt('III')).toBe(3);
    expect(romanToInt('VI')).toBe(6);
    expect(romanToInt('XV')).toBe(15);
  });

  test('should handle subtractive notation correctly', () => {
    expect(romanToInt('IV')).toBe(4);
    expect(romanToInt('IX')).toBe(9);
    expect(romanToInt('XL')).toBe(40);
    expect(romanToInt('XC')).toBe(90);
    expect(romanToInt('CD')).toBe(400);
    expect(romanToInt('CM')).toBe(900);
  });

  test('should handle complex numbers correctly', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994);
    expect(romanToInt('MMXXIV')).toBe(2024);
    expect(romanToInt('MMXVIII')).toBe(2018);
    expect(romanToInt('LVIII')).toBe(58);
  });
});