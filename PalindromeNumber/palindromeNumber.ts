
export function isPalindrome (x) {
  let numToStrring = x.toString()
  return numToStrring == numToStrring.split("").reverse().join("")

};