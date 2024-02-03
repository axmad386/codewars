import { assert, describe, it } from "vitest";
/**
 * @title Persistent Bugger.
 * @url https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
 */
const memo: Record<string, number> = {};
export function persistence(num: number): number {
  let deep = 0;
  const multiply = (num: number): number => {
    deep++;
    if (memo[num]) return memo[num];
    const arr = num.toString().split("");
    let res = 1;
    for (let i = 0; i < arr.length; i++) {
      res *= parseInt(arr[i]);
    }
    if (res > 9) {
      return multiply(res);
    }
    memo[num.toString()] = res;
    return res;
  };

  while (num > 9) {
    num = multiply(num);
  }
  return deep;
}

describe.skip("Persistent Bugger.", () => {
  it("Fixed tests", () => {
    assert.strictEqual(persistence(39), 3);
    assert.strictEqual(persistence(4), 0);
    assert.strictEqual(persistence(25), 2);
    assert.strictEqual(persistence(999), 4);
  });
});


// Another clever solution by codewars member
// export function persistence(num: number): number {
//   let count = 0
//   while (num > 9) {
//     num = String(num).split('').map(d => +d).reduce((prev, current) => prev *= current);
//     count++;
//   }
//   return count;
// }
