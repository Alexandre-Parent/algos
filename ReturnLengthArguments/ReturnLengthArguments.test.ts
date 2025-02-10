import { isPalindrome } from './palindromeNumber';

// La fonction à tester
function exemple(...args) {
  return args;
}

// Suite de tests pour la fonction exemple
describe('exemple', () => {
  it('devrait retourner un tableau vide quand aucun argument n\'est passé', () => {
    expect(exemple()).toEqual([]);
  });

  it('devrait retourner un tableau avec un seul élément quand un argument est passé', () => {
    expect(exemple(1)).toEqual([1]);
  });

  it('devrait retourner un tableau avec plusieurs éléments quand plusieurs arguments sont passés', () => {
    expect(exemple(1, 2, 3)).toEqual([1, 2, 3]);
  });

  it('devrait retourner un tableau avec des chaînes de caractères quand des chaînes sont passées', () => {
    expect(exemple('a', 'b', 'c')).toEqual(['a', 'b', 'c']);
  });

  it('devrait retourner un tableau avec des valeurs mélangées quand des types différents sont passés', () => {
    expect(exemple(1, 'a', true)).toEqual([1, 'a', true]);
  });
});