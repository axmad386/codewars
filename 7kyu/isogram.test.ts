import {describe, it, assert} from "vitest"
/**
 * @url https://www.codewars.com/kata/54ba84be607a92aa900000f1
 * @level 7kyu
 */
export function isIsogram(str:string):boolean {
  const arr =  str.toLowerCase().split('')
  const set = new Set<string>();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) return false;
    set.add(arr[i])
  }
  return true
}

// export function isIsogram (str: string): boolean {
//   return (new Set(str.toLowerCase())).size === str.length
// }


describe("Tests", function(){
  var lowers = "abcdefghijklmnopqrstuvwxyz", uppers = lowers.toUpperCase()
  var rnd = function(x: number){return Math.floor(Math.random()*x)}
  var rndChr = function(str: string){ return str[Math.floor(rnd(str.length))] };
  var shuffle = function(str: string){return str.split('').sort((a, b)=>Math.random()-0.5).join('')}
    
  it("Fixed tests", function(){
    assert.equal( isIsogram("Dermatoglyphics"), true );
    assert.equal( isIsogram("isogram"), true );
    assert.equal( isIsogram("moose"), false );
    assert.equal( isIsogram("isIsogram"), false );
    assert.equal( isIsogram("aba"), false, "same chars may not be adjacent" );
    assert.equal( isIsogram("moOse"), false, "same chars may not be same case" );
    assert.equal( isIsogram("thumbscrewjapingly"), true );
    assert.equal( isIsogram(""), true, "an empty string is a valid isogram" );
  })
  it("More tests", function(){
    assert.equal(isIsogram(lowers), true)
    assert.equal(isIsogram(uppers), true)    
    assert.equal(isIsogram(lowers+rndChr(lowers)), false)
    assert.equal(isIsogram(lowers+rndChr(uppers)), false)
  })  
  it("Random tests", function(){
    for( var t=0; t<100; t++ ){
      var cc = shuffle(lowers), exp = true, chr;
      var len = lowers.length, len = Math.min(3+rnd(len),len), str = cc.slice(0,len);
      if( rnd(99)<50 ){
        chr = rndChr(str);
        if( rnd(99)<50 ) chr=chr.toUpperCase();
        str = shuffle(shuffle(str+chr));
        exp = false
      }
      assert.equal(isIsogram(str),exp,str)
    }
  })
})
