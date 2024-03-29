import {describe, it, assert} from "vitest"
/**
 * @url https://www.codewars.com/kata/556deca17c58da83c00002db
 * @level 6kyu
 */

// Botom Top approach
export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
  const result = [a,b,c]
  if(n<3) return result.slice(0,n)
  for(let i = 3; i<n; i++){
    result.push(result[i-1]+result[i-2]+result[i-3])
  }
  return result
}


const tester = (sig: [number, number, number], n: number, exp: number[]) => it(`tribonacci([${sig[0]}, ${sig[1]}, ${sig[2]}], ${n})`, () => assert.deepStrictEqual(tribonacci(sig, n), exp));
describe("basic tests", () => {
  tester([1, 1, 1], 10, [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
  tester([0, 0, 1], 10, [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
  tester([0, 1, 1], 10, [0, 1, 1, 2, 4, 7, 13, 24, 44, 81]);
  tester([1, 0, 0], 10, [1, 0, 0, 1, 1, 2, 4, 7, 13, 24]);
  tester([0, 0, 0], 10, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  tester([1, 2, 3], 10, [1, 2, 3, 6, 11, 20, 37, 68, 125, 230]);
  tester([3, 2, 1], 10, [3, 2, 1, 6, 9, 16, 31, 56, 103, 190]);
  tester([1, 1, 1], 1, [1]);
  tester([300, 200, 100], 0, []);
  tester([0.5, 0.5, 0.5], 30, [0.5, 0.5, 0.5, 1.5, 2.5, 4.5, 8.5, 15.5, 28.5, 52.5, 96.5, 177.5, 326.5, 600.5, 1104.5, 2031.5, 3736.5, 6872.5, 12640.5, 23249.5, 42762.5, 78652.5, 144664.5, 266079.5, 489396.5, 900140.5, 1655616.5, 3045153.5, 5600910.5, 10301680.5]);
});

describe('random tests', () => {
  const sol = ([a, b, c]: [number, number, number], n: number): number[] => n < 1 ? [] : [a].concat(sol([b, c, a + b + c], n - 1));
  const rand = (a: number, b: number): number => Math.floor(Math.random() * (b - a + 1)) + a;
  for (let i = 0; i < 100; i++) {
    const sign = <[number, number, number]>[rand(0, 20), rand(0, 20), rand(0, 20)];
    const n = rand(0, 50);
    tester(sign, n, sol(sign, n));
  }
});
