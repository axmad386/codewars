import {describe, it, assert} from "vitest";
/**
 * @url https://www.codewars.com/kata/5412509bd436bd33920011bc
 * @level 7kyu
 */
// my original solution
// export function maskify(cc: string): string {
//   return cc
//     .split('')
//     .map((c, i) => (i < cc.length - 4 ? '#' : c))
//     .join('');
// }

// regex solution
export function maskify(cc: string): string {
    return cc.replace(/.(?=.{4})/g, "#");
}
describe('maskify', function () {
    it('should work for some examples', function () {
        assert.equal(maskify('4556364607935616'), '############5616')
        assert.equal(maskify('1'), '1')
        assert.equal(maskify('11111'), '#1111')
    })
    it('should work for random examples', function () {
        const randomString = (): string => Math.floor(Math.random() * 36 ** (Math.floor(Math.random() * 10 + 1)) - 1).toString(36)
        let i: number; let t: string; const solution = function (cc: string): string {
            return cc.split('').reduce<string[]>(function (p, c, i) {
                return p.push(i < cc.length - 4 ? '#' : c), p
            }, []).join('')
        }
        for (i = 0; i < 100; ++i) {
            t = randomString() + randomString() + randomString() + randomString()
            t = t.substring(0, Math.floor(Math.random() * 101) % t.length)
            assert.equal(maskify(t), solution(t))
        }
    });
})
