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


console.log(isIsogram("")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
console.log(isIsogram("isIsogram")); // false
