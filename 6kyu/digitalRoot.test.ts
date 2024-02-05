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

// Other clever solution by codewars member
// export function digitalRoot(n: number): number {
//   return (n - 1) % 9 + 1; 
// }

describe("solution", () => {
  it('should work for fixed tests', () => {
    assert.equal(digitalRoot(16), 7);
    assert.equal(digitalRoot(195), 6);
    assert.equal(digitalRoot(992), 2);
    assert.equal(digitalRoot(999999999999), 9);
    assert.equal(digitalRoot(167346), 9);
    assert.equal(digitalRoot(10), 1);
    assert.equal(digitalRoot(0), 0);
    assert.equal(digitalRoot(200), 2);
  });
  
  it('should work for random tests', () => {
    
    const myDigitalRoot = (n:number):number => {
      return n < 10 ?
             n :
             myDigitalRoot([...n.toString()].map(Number).reduce((acc, cur) => acc + cur, 0));
    };

    const generateRandom = (): number[] => {
      const biggestNumber: number = 999999999999;
      let arrOfRandom: number[] = Array.from({length: 10}, (_) => Math.random());
      return arrOfRandom.map(n => Math.floor(n * biggestNumber));
    };
    
    generateRandom().forEach(n => {
      assert.equal(digitalRoot(n), myDigitalRoot(n), `Testing for n = ${n}`);
    });
  });
});

