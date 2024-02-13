import { describe, it, assert } from "vitest";
/**
 * @title Playing with digits
 * @url https://www.codewars.com/kata/5552101f47fc5178b1000050
 */
function digPow(n:number, p:number):number {
  const sum = n.toString().split('').reduce((a,b,i)=>a+Math.pow(parseInt(b),p+i),0)
  return sum % n === 0 ? sum / n : -1
}
function dotest(n: number, p: number, expected: number) {
    assert.equal(digPow(n, p), expected, "Incorrect answer for n=" + n + ", p=" + p);
}

describe("Fixed Tests", function() {
    it("digPow", function() {
        dotest(89, 1, 1);
        dotest(92, 1, -1);
        dotest(114, 3, 9);
    });
});
