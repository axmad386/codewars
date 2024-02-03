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
console.log("'' =>", maskify(""))
console.log("b =>", maskify("b"))
console.log("superhero =>", maskify("superhero"))
