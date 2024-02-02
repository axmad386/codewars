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

console.log(Challenge.solution(10));
