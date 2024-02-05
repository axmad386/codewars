import { describe, it, assert } from "vitest";

/**
 * @title Your order, please
 * @url https://www.codewars.com/kata/55c45be3b2079eccff00010f
 */
const stringToInt = (str: string):number => parseFloat(str.replace(/\D/g, ""));

export function order(words:string):string{
  const arr = words.split(" ").map(str => [str, stringToInt(str)] as const).sort((a,b) => a[1] - b[1]);
  return arr.map(el => el[0]).join(" ")
}


describe("solution", function(){
  it("basicTests", function(){
    assert.equal(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
    assert.equal(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
    assert.equal(order("d4o dru7nken sh2all w5ith s8ailor wha1t 3we a6"), "wha1t sh2all 3we d4o w5ith a6 dru7nken s8ailor");
    assert.equal(order(""), "");
    assert.equal(order("3 6 4 2 8 7 5 1 9"), "1 2 3 4 5 6 7 8 9");
  });
  
  it("randomTests", function(){
    let names = "Alice;Bob;Cindy;Ernst;Fiona;Greg;Heidi;Igor;Jamila".split(";"),
      rnd = (x: number) => ~~(Math.random()*x),
      word = (n: string, x: number) => {
        let l = n.length, i = rnd(l);
        return n.slice(0,i)+(x+1)+n.slice(i)
      };
  
    function tst(){
      let len = 3+rnd(6), 
          exp = randomize(names).slice(0,len).map(word),
          inp = randomize(exp.slice()).join(' ');
      const expected = exp.join(' ');
      console.log("should work for "+inp);
      assert.equal(order(inp), expected);
    }
    
    function randomize(names: string[])
    {
      return names.sort((a,b) => +(Math.random() < 0.5));
    }
  
    for(let t=0; t<9; t++) tst()
  });
});
