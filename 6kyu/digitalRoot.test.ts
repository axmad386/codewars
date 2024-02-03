import { describe, it, assert } from "vitest";

/**
 * @title Sum of Digits / Digital Root
 * @url https://www.codewars.com/kata/541c8630095125aba6000c00
 */
const memo = {};
export const digitalRoot = (n: number): number => {
  if (memo[n]) return memo[n];
  const arr = n.toString().split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  if (sum > 9) {
    return digitalRoot(sum);
  }
  memo[n.toString()] = sum;
  return sum;
};
describe.skip("solution", () => {
  it("should work for fixed tests", () => {
    assert.equal(digitalRoot(16), 7);
    assert.equal(digitalRoot(456), 6);
  });
});

// Other clever solution by codewars member
// export function digitalRoot(n: number): number {
//   return (n - 1) % 9 + 1; 
// }
