// GitHub Actions上のNode.jsで実行されるテスト（node:testを使用、npm installは不要）
// ローカルで実行する場合: node --test tests/app-logic.test.js

const test = require('node:test');
const assert = require('node:assert');
const {
  getLuckyNumber,
  getFortune,
  getLuckyColor,
  getLuckyItem,
  getLuckyMessage,
} = require('../app-logic.js');

test('getLuckyNumber: サンプル関数はindexに対応する数字を返す(見本なので常に成功する)', () => {
  assert.strictEqual(getLuckyNumber(0), 7);
  assert.strictEqual(getLuckyNumber(4), 9);
});

test('getFortune: indexに対応する運勢ラベルを返す', () => {
  assert.strictEqual(getFortune(0), '大吉');
  assert.strictEqual(getFortune(1), '中吉');
  assert.strictEqual(getFortune(2), '吉');
  assert.strictEqual(getFortune(3), '小吉');
  assert.strictEqual(getFortune(4), '凶');
});

test('getLuckyColor: indexに対応するラッキーカラーを返す', () => {
  assert.strictEqual(getLuckyColor(0), '赤');
  assert.strictEqual(getLuckyColor(1), '青');
  assert.strictEqual(getLuckyColor(2), '黄');
  assert.strictEqual(getLuckyColor(3), '緑');
  assert.strictEqual(getLuckyColor(4), '紫');
});

test('getLuckyItem: indexに対応するラッキーアイテムを返す', () => {
  assert.strictEqual(getLuckyItem(0), '傘');
  assert.strictEqual(getLuckyItem(1), '腕時計');
  assert.strictEqual(getLuckyItem(2), '本');
  assert.strictEqual(getLuckyItem(3), 'コーヒー');
  assert.strictEqual(getLuckyItem(4), 'スニーカー');
});

test('getLuckyMessage: 運勢に対応するメッセージを返す', () => {
  assert.strictEqual(getLuckyMessage('大吉'), '最高の1日になりそう！');
  assert.strictEqual(getLuckyMessage('中吉'), '良いことがありそうな予感！');
  assert.strictEqual(getLuckyMessage('吉'), 'いつも通り、落ち着いて過ごそう');
  assert.strictEqual(getLuckyMessage('小吉'), '小さな幸せを見つけよう');
  assert.strictEqual(getLuckyMessage('凶'), '無理せず、ゆっくり過ごそう');
});
