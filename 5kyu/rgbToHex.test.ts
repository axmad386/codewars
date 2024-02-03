import {describe, it, assert} from "vitest"
/**
 * @title RGB To Hex Conversion
 * @url https://www.codewars.com/kata/513e08acc600c94f01000001
 */
export function rgb(r: number, g: number, b: number): string {
  r = Math.max(0, Math.min(255, r))
  g = Math.max(0, Math.min(255, g))
  b = Math.max(0, Math.min(255, b))
  return (r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0')).toUpperCase()
}
describe.skip("Tests", function () {
  it("Basic Tests", function () {
    assert.strictEqual(rgb(0, 0, 0), "000000")
    assert.strictEqual(rgb(0, 0, -20), "000000")
    assert.strictEqual(rgb(300, 255, 255), "FFFFFF")
    assert.strictEqual(rgb(173, 255, 47), "ADFF2F")
  })
})
