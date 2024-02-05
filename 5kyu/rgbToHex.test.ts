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
describe("Example Tests", function (): void {
  it("Basic Tests", function (): void {
    assert.strictEqual(rgb(0, 0, 0), "000000")
    assert.strictEqual(rgb(0, 0, -20), "000000")
    assert.strictEqual(rgb(300, 255, 255), "FFFFFF")
    assert.strictEqual(rgb(173, 255, 47), "ADFF2F")
  })
})

function myRGB(r: number, g: number, b: number): string {
  const toHex = (num: number): string => Math.min(255, Math.max(0, num)).toString(16).toUpperCase().padStart(2, "0")
  return toHex(r) + toHex(g) + toHex(b)
}

const minimum: number = -50
const maximum: number = 350
const randInt = (min: number = minimum, max: number = maximum): number[] =>
  [...Array(3)].map((): number => Math.floor(Math.random() * (max - min + 1) + min))

describe("Random Tests", function (): void {
  let tests: number = 100
  while (tests-- > 0) {
    const [r, g, b] = randInt()
    it(`Random Test ... RGB: ${r}, ${g}, ${b}`, function (): void {
      assert.strictEqual(rgb(r, g, b), myRGB(r, g, b), `Your solution did not work for RGB:  ${r}, ${g}, ${b}`)
    })
  }
})
