import { describe, it, assert } from "vitest";
/**
 * @title Duplicate Encoder
 * @url https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
 */
export function duplicateEncode(word: string):string{
  const arr = word.toLowerCase().split("");
  const obj:Record<string, number> = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
  }
  return arr
    .map((x) => (obj[x] > 1 ? ")" : "("))
    .join("");
}
// other clever solution
// export function duplicateEncode(word: string) {
//   const chars = word.toLowerCase().split("");
//
//   return chars.map(char => chars.filter(c => c === char).length > 1 ? ")" : "(").join("");
// }
describe("Duplicate Encoder", function() {
  it("Basic tests:", function() {
    assert.strictEqual(duplicateEncode("din"),"(((");
    assert.strictEqual(duplicateEncode("recede"),"()()()");
    assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
    assert.strictEqual(duplicateEncode("CodeWarrior"),"()(((())())");
    assert.strictEqual(duplicateEncode("Supralapsarian"),")()))()))))()(","should ignore case");
    assert.strictEqual(duplicateEncode("iiiiii"),"))))))","duplicate-only-string")
  });
  
  it("Tests with '(' and ')'", function() {
    assert.strictEqual(duplicateEncode("(( @"),"))((");
    assert.strictEqual(duplicateEncode(" ( ( )"),")))))(")
  })
  
  it("And now... some random tests !", function() {
    var rndEncode = function(){
    var chars = "abcdeFGHIJklmnOPQRSTuvwxyz() @!".split('').sort(function(){return (Math.random()>.5)? 1:-1}).join('');
    var enc = "", src = "", count = 0, len = 10+~~(Math.random()*10), dup = chars[chars.length-1];
    for(var c=0; c<len; c++){
      if(Math.random()>.5){
        enc += "(";
        src += chars[c];
      }else{
        enc += ")";
        src += dup;
        count++;
      }
    }
    // Chrono79's intent to fix the random quirk    
    // It happened because the duplicate char was inserted only once so it wasn't a duplicate at all.    
    // So I add it once more to fix it
    if (count === 1) {
      enc += ")";
      src += dup;
    }  
    return {src:src, res:enc}
  }
  
  var t = 5;
  while(t--){
    var tst = rndEncode();
    assert.strictEqual(duplicateEncode(tst.src),tst.res,"should encode '"+tst.src+"'")
  }
  })
});
