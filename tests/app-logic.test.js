// GitHub Actions上のNode.jsで実行されるテスト（node:testを使用、npm installは不要）
// ローカルで実行する場合: node --test tests/app-logic.test.js
//
// このテストは「値の中身が正しいか」ではなく「値の形が正しいか」をチェックします。
// ラベルや色などの具体的な文言は担当者が自由に決めてよいので、
// - 空文字列でないか
// - 5つ(index 0〜4)がすべて異なるか（重複していないか）
// - 同じindexなら毎回同じ値を返すか（乱数を使っていないか）
// を確認します。

const test = require('node:test');
const assert = require('node:assert');
const {
  getLuckyNumber,
  getFortune,
  getLuckyColor,
  getLuckyItem,
  getLuckyMessage,
} = require('../app-logic.js');

function assertFiveDistinctNonEmptyStrings(fn, label) {
  const values = [0, 1, 2, 3, 4].map((i) => fn(i));

  values.forEach((v, i) => {
    assert.strictEqual(typeof v, 'string', `${label}(${i}) は文字列を返す必要があります`);
    assert.ok(v.length > 0, `${label}(${i}) は空文字列を返してはいけません`);
  });

  const uniqueValues = new Set(values);
  assert.strictEqual(uniqueValues.size, 5, `${label} の5つの値は、すべて異なる必要があります（重複NG）`);

  // 同じindexを2回渡しても、同じ値が返ってくること（決定的であること）
  assert.strictEqual(fn(2), fn(2), `${label}(2) は呼び出すたびに同じ値を返す必要があります`);
}

test('getLuckyNumber: サンプル関数はindexに対応する数字を返す(見本なので常に成功する)', () => {
  assert.strictEqual(getLuckyNumber(0), 7);
  assert.strictEqual(getLuckyNumber(4), 9);
});

test('getFortune: 5つの運勢ラベルを返す(重複なし・決定的)', () => {
  assertFiveDistinctNonEmptyStrings(getFortune, 'getFortune');
});

test('getLuckyColor: 5つのラッキーカラーを返す(重複なし・決定的)', () => {
  assertFiveDistinctNonEmptyStrings(getLuckyColor, 'getLuckyColor');
});

test('getLuckyItem: 5つのラッキーアイテムを返す(重複なし・決定的)', () => {
  assertFiveDistinctNonEmptyStrings(getLuckyItem, 'getLuckyItem');
});

test('getLuckyMessage: getFortuneが返す5つのラベルそれぞれに、異なる空でないメッセージを返す', () => {
  const fortunes = [0, 1, 2, 3, 4].map((i) => getFortune(i));
  const messages = fortunes.map((f) => getLuckyMessage(f));

  messages.forEach((m, i) => {
    assert.strictEqual(typeof m, 'string', `getLuckyMessage("${fortunes[i]}") は文字列を返す必要があります`);
    assert.ok(m.length > 0, `getLuckyMessage("${fortunes[i]}") は空文字列を返してはいけません`);
  });

  const uniqueMessages = new Set(messages);
  assert.strictEqual(uniqueMessages.size, 5, 'getLuckyMessage は運勢ごとに異なるメッセージを返す必要があります');
});
