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

// Another clever solution by codewars member
// export function persistence(num: number): number {
//   let count = 0
//   while (num > 9) {
//     num = String(num).split('').map(d => +d).reduce((prev, current) => prev *= current);
//     count++;
//   }
//   return count;
// }
//
describe("Persistent Bugger.", () => {
  it("Fixed tests", () => {
    assert.strictEqual(persistence(39),3);
    assert.strictEqual(persistence(4),0);
    assert.strictEqual(persistence(25),2);
    assert.strictEqual(persistence(999),4);
  });

  it('Random tests', () => {
    
    function sol(num: number) {
       let c: number = num > 9 ? 1 : 0;
       while ((num = (num + '').split('').reduce((mul, cv) => mul * +cv, 1)) > 9)
            ++c;
        return c;
    }
    
    function rand(min: number, max: number): number  { 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    for(let i: number = 0; i < 100; i++){
        let n: number = rand(1, 10000000);
        assert.strictEqual(persistence(n), sol(n), `Testing for num = ${n}`);
    }
  })
});


