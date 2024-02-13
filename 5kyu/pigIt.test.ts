import {describe, assert, it} from "vitest";

/**
  * @title Simple Pig Latin
  * @url https://www.codewars.com/kata/520b9d2ad5c005041100000f
  */
export const pigIt = (a : string) : string =>  {
  let word = ''
  let words:string[] = []
  for(let i = 0; i < a.length; i++){
    if(a[i].match(/[^a-zA-Z]/)){
      if(word) words.push(word.slice(1) + word[0] + 'ay')
      words.push(a[i])
      word = ''
    } else {
    word+=a[i]
    }
  }
  if(word)words.push(word.slice(1) + word[0] + 'ay')
  return words.join('')
}

// clever solution using regex
// export const pigIt = (a : string) => a.replace(/(\w)(\w+)*/g, "$2$1ay")
describe("Tests", function() {
  it("Fixed tests", function() {
    let base = [
      ['Acta est fabula', 'ctaAay steay abulafay'],
      ['Barba non facit philosophum', 'arbaBay onnay acitfay hilosophumpay'],
      ['Cucullus non facit monachum', 'ucullusCay onnay acitfay onachummay'],
      ['Dura lex sed lex', 'uraDay exlay edsay exlay'],
      ['Errare humanum est', 'rrareEay umanumhay steay'],
      ['Fluctuat nec mergitur', 'luctuatFay ecnay ergiturmay'],
      ['Gutta cavat lapidem', 'uttaGay avatcay apidemlay'],
      ['Hic et nunc', 'icHay teay uncnay'],
      ['In vino veritas', 'nIay inovay eritasvay'],
      ['Lux in tenebris lucet', 'uxLay niay enebristay ucetlay'],
      ['Morituri nolumus mori', 'orituriMay olumusnay orimay'],
      ['Nunc est bibendum', 'uncNay steay ibendumbay'],
      ['O tempora o mores !', 'Oay emporatay oay oresmay !'],
      ['Panem et circenses', 'anemPay teay ircensescay'],
      ['Quis custodiet ipsos custodes ?', 'uisQay ustodietcay psosiay ustodescay ?'],
      ['Requiescat in pace', 'equiescatRay niay acepay'],
      ['Sic transit gloria mundi', 'icSay ransittay loriagay undimay'],
      ['Timeo Danaos et dona ferentes', 'imeoTay anaosDay teay onaday erentesfay'],
      ['Ultima necat', 'ltimaUay ecatnay'],
      ['Veni vidi vici', 'eniVay idivay icivay']
    ];
    for(let [input, expected] of base)
      assert.strictEqual(pigIt(input), expected);
  });
  it("Random test", function() {
      const ref_sol = (a : string) : string => a.split(' ').map(w => /[a-z]/i.test(w) ? w.slice(1) +
                                                               w[0] + "ay" : w).join(' ')
      const rand_Str = (a : number) : string => {
        let sum = ""
        let Alpha = 'abcdefghijklmnopqrstuvwxyz'
        let alpha = [...(Alpha + Alpha.toUpperCase())]
        for(let i = 0; i++ < a;) {
          sum += alpha[Math.random() * alpha.length | 0]
        }
        return sum;
      }
      const inp_st = (a : number) :string => {
        let p:string[] = [];
        for(let i = 0; i < a; i++) {
          let s = Math.random() < 0.8 ? rand_Str( Math.random() * 20 | 0 ) :"!.?"[Math.random()*3|0]
          p.push(s);
        }
        return p.join(' ')
      }
      for(let i = 0; i < 100; i++) {
        let input = inp_st(Math.random() * 20 + 1 | 0)
        let inp_2 = input.slice();
        let refre = ref_sol(inp_2);
        let userS = pigIt(input);
        assert.strictEqual(userS, refre)
      }
  })
});
