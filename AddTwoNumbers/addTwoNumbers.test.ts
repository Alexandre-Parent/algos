import { addTwoNumbers } from "./addTwoNumbers";

class ListNode {
  val: number;
  next: ListNode | null;
  
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function createList(arr: number[]): ListNode | null {
  let dummy = new ListNode();
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

function convertToArray(node: ListNode | null): number[] {
  const result: number[] = [];
  while (node !== null) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}

describe('addTwoNumbers', () => {
  it('should add two numbers represented by linked lists correctly', () => {
    const l1 = createList([2, 4, 3]);
    const l2 = createList([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    expect(convertToArray(result)).toEqual([7, 0, 8]);
  });

  it('should handle lists of different lengths', () => {
    const l1 = createList([1, 8]);
    const l2 = createList([0]);
    const result = addTwoNumbers(l1, l2);
    expect(convertToArray(result)).toEqual([1, 8]);
  });

  it('should handle carry over at the last digit', () => {
    const l1 = createList([9, 9, 9]); 
    const l2 = createList([1]);      
    const result = addTwoNumbers(l1, l2);
    expect(convertToArray(result)).toEqual([0, 0, 0, 1]); 
  });

  it('should handle when both lists are empty', () => {
    const l1 = createList([]);
    const l2 = createList([]);
    const result = addTwoNumbers(l1, l2);
    expect(convertToArray(result)).toEqual([]);
  });
});
