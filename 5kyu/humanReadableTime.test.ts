import {describe, it, assert} from "vitest";
/**
 * @title Human Readable Time
 * @url https://www.codewars.com/kata/52685f7382004e774f0001f7
 */
export function humanReadable(seconds:number):string {
  let h = Math.floor(seconds / 3600);
  let m = Math.floor(seconds / 60) % 60;
  let s = seconds % 60;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

describe('tests', function() {
  it('should format correctly', function() {
    assert.equal(humanReadable(0), '00:00:00', 'humanReadable(0)');
    assert.equal(humanReadable(59), '00:00:59', 'humanReadable(59)');
    assert.equal(humanReadable(60), '00:01:00', 'humanReadable(60)');
    assert.equal(humanReadable(90), '00:01:30', 'humanReadable(90)');
    assert.equal(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
    assert.equal(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
    assert.equal(humanReadable(45296), '12:34:56', 'humanReadable(45296)');
    assert.equal(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
    assert.equal(humanReadable(86400), '24:00:00', 'humanReadable(86400)');
    assert.equal(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
  });
  it('should pass random tests', function() {
    function hmnRdbl (seconds:number):string {
      const format = (x:number, y:number) => Math.floor(x / y).toString().padStart(2, '0')
      const result: string[] = []
      result.push(format(seconds, 3600))
      seconds %= 3600
      result.push(format(seconds, 60))
      seconds %= 60
      result.push(format(seconds, 1))
      return result.join(':')
    }
    for (let i = 0; i < 100; i++) {
      let q = Math.floor(Math.random() * 360000)
      assert.equal(humanReadable(q), hmnRdbl(q), `humanReadable(${q})`)
    }
  });
});
