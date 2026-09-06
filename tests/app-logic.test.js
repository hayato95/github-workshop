// GitHub Actions上のNode.jsで実行されるテスト（node:testを使用、npm installは不要）
// ローカルで実行する場合: node --test tests/app-logic.test.js
//
// このテストは「値の中身が正しいか」ではなく「値の形が正しいか」をチェックします。
// ラベルや色などの具体的な文言は担当者が自由に決めてよいので、
// - 空文字列でないか
// - 5つ(index 0〜4)がすべて異なるか（重複していないか）
// - 同じindexなら毎回同じ値を返すか（乱数を使っていないか）
// を確認します。
//
// また、4人がそれぞれ別ブランチ・別PRで作業するため、他の担当者がまだ
// 実装していない関数は「失敗」ではなく「スキップ」として扱います。
// (自分のPRを出した時点で、他の担当分がTODOのままでもCIが赤くならないようにするため)

const test = require('node:test');
const assert = require('node:assert');
const {
  getLuckyNumber,
  getFortune,
  getLuckyColor,
  getLuckyItem,
  getLuckyMessage,
} = require('../app-logic.js');

// 関数がまだ「TODO: 実装してください」のまま(未実装)かどうかを判定する。
// 未実装なら { implemented: false } を、実装済みなら { implemented: true, value } を返す。
function tryCall(fn, ...args) {
  try {
    return { implemented: true, value: fn(...args) };
  } catch (error) {
    if (typeof error.message === 'string' && error.message.startsWith('TODO:')) {
      return { implemented: false };
    }
    throw error; // TODO以外のエラー(バグ)はそのままテスト失敗として扱う
  }
}

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

test('getFortune: 5つの運勢ラベルを返す(重複なし・決定的)', (t) => {
  const probe = tryCall(getFortune, 0);
  if (!probe.implemented) {
    t.skip('getFortuneはまだ未実装です（担当者の実装が終わるとテストされます）');
    return;
  }
  assertFiveDistinctNonEmptyStrings(getFortune, 'getFortune');
});

test('getLuckyColor: 5つのラッキーカラーを返す(重複なし・決定的)', (t) => {
  const probe = tryCall(getLuckyColor, 0);
  if (!probe.implemented) {
    t.skip('getLuckyColorはまだ未実装です（担当者の実装が終わるとテストされます）');
    return;
  }
  assertFiveDistinctNonEmptyStrings(getLuckyColor, 'getLuckyColor');
});

test('getLuckyItem: 5つのラッキーアイテムを返す(重複なし・決定的)', (t) => {
  const probe = tryCall(getLuckyItem, 0);
  if (!probe.implemented) {
    t.skip('getLuckyItemはまだ未実装です（担当者の実装が終わるとテストされます）');
    return;
  }
  assertFiveDistinctNonEmptyStrings(getLuckyItem, 'getLuckyItem');
});

test('getLuckyMessage: getFortuneが返す5つのラベルそれぞれに、異なる空でないメッセージを返す', (t) => {
  const fortuneProbe = tryCall(getFortune, 0);
  if (!fortuneProbe.implemented) {
    t.skip('getFortuneが未実装のため、このテストはスキップします');
    return;
  }

  const messageProbe = tryCall(getLuckyMessage, fortuneProbe.value);
  if (!messageProbe.implemented) {
    t.skip('getLuckyMessageはまだ未実装です（担当者の実装が終わるとテストされます）');
    return;
  }

  const fortunes = [0, 1, 2, 3, 4].map((i) => getFortune(i));
  const messages = fortunes.map((f) => getLuckyMessage(f));

  messages.forEach((m, i) => {
    assert.strictEqual(typeof m, 'string', `getLuckyMessage("${fortunes[i]}") は文字列を返す必要があります`);
    assert.ok(m.length > 0, `getLuckyMessage("${fortunes[i]}") は空文字列を返してはいけません`);
  });

  const uniqueMessages = new Set(messages);
  assert.strictEqual(uniqueMessages.size, 5, 'getLuckyMessage は運勢ごとに異なるメッセージを返す必要があります');
});
