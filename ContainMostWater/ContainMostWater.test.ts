import { maxArea } from './ContainMostWater'; 


describe('maxArea', () => {
  it('devrait retourner 49 pour l\'entrée [1,8,6,2,5,4,8,3,7]', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it('devrait retourner 1 pour l\'entrée [1,1]', () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  it('devrait retourner 16 pour l\'entrée [4,3,2,1,4]', () => {
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  });

  it('devrait retourner 2 pour l\'entrée [1,2,1]', () => {
    expect(maxArea([1, 2, 1])).toBe(2);
  });

  it('devrait retourner 24 pour l\'entrée [1,3,2,5,25,24,5]', () => {
    expect(maxArea([1, 3, 2, 5, 25, 24, 5])).toBe(24);
  });

});