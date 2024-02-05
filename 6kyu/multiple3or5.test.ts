import {describe, it, assert} from "vitest";
/** 
 * @url https://www.codewars.com/kata/514b92a657cdc65150000006
 * @level 6kyu
 **/
export class Challenge {
  static solution(number: number) {
    if(number<0) return 0;
    let sum = 0;
    for (let i = 0; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
      }
    }
    return sum;
  }
}

function test(num: number, expected: number) {
  assert.strictEqual(Challenge.solution(num), expected)
}

function _solution(number: number) {
  var sum = 0;
  for(var i = 0; i < number; i++) {
    if(i % 3 == 0 || i % 5 ==0) { 
      sum = sum + i;
    }
  }
  return sum;
}

describe("solution", function(){
  it("should handle basic tests", function() {
    test(10, 23);
    test(20, 78);
    test(200, 9168);
  });
  it("should handle the smallest cases", function() {
    test(-1, 0);
    test(0, 0);
    test(1, 0);
    test(2, 0);
    test(3, 0);
    test(4, 3);
    test(5, 3);
    test(6, 8);
  });
  it("should handle random cases", function() {
    for(var i = 0; i < 10; i++) {
      let ran = Math.floor(Math.random() * 200);
      test(ran, _solution(ran))
    }
  });
});
