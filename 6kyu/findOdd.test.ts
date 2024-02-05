import { describe, it, assert } from "vitest";
/**
 * @url https://www.codewars.com/kata/54da5a58ea159efa38000836
 * @level 6kyu
 */
export const findOdd = (xs: number[]): number => {
  const map = new Map<number, number>();
  for (let i = 0; i < xs.length; i++) {
    map.set(xs[i], (map.get(xs[i]) || 0) + 1);
  }
  return [...map].find((el) => el[1] % 2 === 1)?.[0] || 0;
};

function doTest(a: number[], n: number) {
  it(`xs = ${JSON.stringify(a)} ; n = ${n}`, () => {
    assert.strictEqual(findOdd(a), n);
  });
}

describe("Example tests", function() {
  doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
  doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
  doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
  doTest([10], 10);
  doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
  doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
});

describe("Random tests", function() {
  it("can handle random tests", function() {
    for (let i = 0; i < 40; ++i) {
      let sz = Math.round(Math.random() * 1000 + 50);
      if (!(sz % 2)) ++sz;

      const a: number[] = [];
      for (let j = 0; j < sz - 1; j += 2) {
        const n = Math.round(Math.random() * 1000);
        a.push(n, n);
      }
      const n = Math.round(Math.random() * 1000);
      a.push(n);
      assert.strictEqual(findOdd(a), n);
    }
  });
});
