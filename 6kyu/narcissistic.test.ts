import {describe, it, expect} from "vitest";
/**
 * @title Does my number look big in this? (Narchissistic Numbec)
 * @url https://www.codewars.com/kata/5287e858c6b5a9678200083c
 */
export function narcissistic(value: number): boolean {

  const power = value.toString().length;
  return value.toString().split('').reduce((prev,curr)=>  prev + Math.pow(parseInt(curr),power),0) == value;
}

describe('Basic tests', () => {
  it('Basic test should work', () => {
    expect(narcissistic(7)).to.equal(true, '7 is narcissistic');
    expect(narcissistic(10)).to.equal(false, '10 is not narcissistic');
    expect(narcissistic(123)).to.equal(false, '123 is not narcissistic');
    expect(narcissistic(153)).to.equal(true, '153 is narcissistic');
    expect(narcissistic(1634)).to.equal(true, '1634 is narcissistic');
    expect(narcissistic(2000)).to.equal(false, '2000 is not narcissistic');
  });
});

function solution(value: number): boolean {
  return value.toString().split('').reduce((acc, el, _, arr) => acc + Number(el) ** arr.length, 0) === value;
}

describe('Random tests', () => {
  function randomNumber(min: number, max: number) {
    return ~~(Math.random() * (max - min + 1)) + min;
  }

  for (let i = 0; i < 20; i += 1){
    const num = randomNumber(0, 9999);
    const res = solution(num);

    it(`Testing for ${num}`, () => {
      expect(narcissistic(num)).to.equal(solution(num), `${num} is ${res ? '' : 'not'} narcissistic`);
    });
  }
});

describe('Additional tests', () => {
  const nums = [8208, 9474, 54748, 92727, 93084, 548834, 1741725, 4210818, 9800817, 9926315, 24678050, 24678051];

  nums.forEach((num) => {
    const res = solution(num);

    it(`Testing for ${num}`, () => {
      expect(narcissistic(num)).to.equal(solution(num), `${num} is ${res ? '' : 'not'} narcissistic`);
    })
  })
});
