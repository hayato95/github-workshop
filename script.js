// UIの制御はこのファイルで完結しています（参加者が変更する必要はありません）。
// app-logic.js の関数を呼び出して、結果を画面に表示します。

const RESULT_COUNT = 5; // 運勢/色/アイテムの選択肢は0〜4の5種類

function randomIndex() {
  return Math.floor(Math.random() * RESULT_COUNT);
}

function drawOmikuji() {
  // 乱数はここ(UI側)で生成し、app-logic.jsの関数へは値として渡す。
  // こうすることで app-logic.js 側の関数は「同じ入力なら同じ出力」になり、
  // テストが書きやすくなる。
  const fortune = getFortune(randomIndex());
  const color = getLuckyColor(randomIndex());
  const item = getLuckyItem(randomIndex());
  const number = getLuckyNumber(randomIndex());
  const message = getLuckyMessage(fortune);

  document.getElementById('result-fortune').textContent = fortune;
  document.getElementById('result-color').textContent = color;
  document.getElementById('result-item').textContent = item;
  document.getElementById('result-number').textContent = number;
  document.getElementById('result-message').textContent = message;
  document.getElementById('result').hidden = false;
}

document.getElementById('draw-button').addEventListener('click', () => {
  try {
    drawOmikuji();
  } catch (error) {
    // app-logic.js の関数がまだ未実装(TODOのまま)だとここに来ます。
    alert('まだ実装されていない機能があります: ' + error.message);
    console.error(error);
  }
});
