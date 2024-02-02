/**
 * @url https://www.codewars.com/kata/54da5a58ea159efa38000836
 * @level 6kyu
 */
export const findOdd = (xs: number[]): number => {
  const map = new Map<number, number>()
  for(let i=0; i<xs.length; i++){
    map.set(xs[i], (map.get(xs[i])||0) + 1 )
  }
  return [...map].find(el => el[1] % 2 === 1)?.[0]||0
};
