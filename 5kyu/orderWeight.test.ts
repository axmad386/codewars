import {describe, it, assert} from "vitest";
/**
 * @title Weight for weight
 * @url https://www.codewars.com/kata/55c6126177c9441a570000cc
 */
export function orderWeight(strng: string): string {
  return strng.split(" ").map(x=>[x, x.split("").reduce((a,b)=>a+Number(b),0)] as [string,number]).sort((a,b)=> {
    if(a[1] == b[1]) return a[0].localeCompare(b[0])
    return a[1]-b[1]
  }).map(x=>x[0]).join(' ')
}
function testing(strng: string, expected: string) {
  assert.strictEqual(orderWeight(strng), expected);
}

describe("Fixed Tests", function() {
    it("orderWeight", function() {
        testing("103 123 4444 99 2000", "2000 103 123 4444 99");
        testing("2000 10003 1234000 44444444 9999 11 11 22 123", "11 11 2000 10003 22 123 1234000 44444444 9999");
        testing("", "");
        testing("10003 1234000 44444444 9999 2000 123456789", "2000 10003 1234000 44444444 9999 123456789");
        testing("3 16 9 38 95 1131268 49455 347464 59544965313 496636983114762 85246814996697", 
            "3 16 9 38 95 1131268 49455 347464 59544965313 496636983114762 85246814996697");
        testing("71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81", 
                "1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703");
        testing("387087 176 351832 100 430372 8 58052 54 175432 120 269974 147 309754 91 404858 67 271476 164 295747 111 40", 
            "100 111 120 40 8 54 91 164 147 67 176 430372 58052 175432 351832 271476 309754 404858 387087 295747 269974");
    });
});

function randint(a: number, b: number) { 
    return Math.floor(Math.random() * (b - a + 1) + a); 
}
//............
function weightStrNbBX(nb: string) {
    var n = 0, a = nb.split('');
    for(var i in a){ n += +a[i]; }
    return n;
}
function compBX(a: string, b: string) {
    var r;
    var cp = weightStrNbBX(a) - weightStrNbBX(b);
    if (cp == 0) {
        if (a < b) r = -1; else r = 1;
    } else {
        r = cp;
    }
    return r;
}
function orderWeightBX(strng: string) {
    return strng.split(' ').sort(compBX).join(" ")
}
//............
function do_ex() {
    var i = 0, res = "", n;
    while (i < 20) {
        if (i % 2 == 0) n = randint(1, 500000); else n = randint(1, 200);
        res += +n + " ";
        i += 1;
    }
    return res + randint(1, 100);
}
describe("Random Tests", function() {
    it("Random tests", function() {
        for (var i = 0; i < 50; i++) {
            var a = do_ex();
            var q = orderWeightBX(a);
            //console.log(q);
            //console.log("......");
            testing(a, q);
        }
    });
});
