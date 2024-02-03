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


describe.skip("solution", function(){
  it("basicTests", function(){
    assert.equal(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
    assert.equal(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
    assert.equal(order(""), "");
  });
});
