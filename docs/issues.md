# issue 下書き（参加者向けの参考資料）

親issueは主催者がGitHub上で作成済みです（[#1](https://github.com/hayato95/github-workshop/issues/1)）。

**sub-issueは、当日ワークショップの中で参加者自身が作成します。** これはワークショップで
体験してほしいことの1つ（課題をsub-issueに切り分ける）だからです。

このファイルは、参加者がsub-issueを作成するときに「何を書けばいいか」の参考になる
仕様（関数のシグネチャ・入出力例・受け入れ条件）をまとめた下書きです。当日、担当者は
このファイルの該当箇所を読みながら、自分のsub-issue本文を書いてください（コピペしても、
自分の言葉で書き直してもOKです）。

---

## 親issue（実際にGitHub上に作成済み: [#1](https://github.com/hayato95/github-workshop/issues/1)）

**タイトル**: おみくじアプリを完成させよう

issueをsub-issueに分解するところから当日体験してもらうため、本文には「まず自分たちで
sub-issueに分解する」ことが明記されています。詳しくは実際のissue本文を参照してください。

---

## 参考仕様 A: 運勢を判定する関数 (`getFortune`)

**ラベル案**: `good first issue`
**ブランチ名の例**: `feature/issue-2-fortune`

**本文**:
```
## やること
`app-logic.js` の `getFortune(index)` 関数を実装してください。

## 仕様
`index` (0〜4の整数) を受け取り、対応する運勢のラベル(文字列)を返します。

| index | 返す値 |
|-------|--------|
| 0     | "大吉" |
| 1     | "中吉" |
| 2     | "吉"   |
| 3     | "小吉" |
| 4     | "凶"   |

例: `getFortune(0)` は `"大吉"` を返す

## ヒント
- 配列を1つ用意して、`index`番目の要素を返すだけでOKです
- 実装例は `app-logic.js` にある `getLuckyNumber` 関数を見本にしてください（同じ考え方です）

## 受け入れ条件
- [ ] `getFortune` を実装した
- [ ] `node --test tests/*.test.js` を実行し、`getFortune`のテストが通る
- [ ] 他の担当者の関数(未実装のまま)には手を入れていない
```

---

## 参考仕様 B: ラッキーカラーを決める関数 (`getLuckyColor`)

**ラベル案**: `good first issue`
**ブランチ名の例**: `feature/issue-3-lucky-color`

**本文**:
```
## やること
`app-logic.js` の `getLuckyColor(index)` 関数を実装してください。

## 仕様
`index` (0〜4の整数) を受け取り、対応するラッキーカラー(文字列)を返します。

| index | 返す値 |
|-------|--------|
| 0     | "赤"   |
| 1     | "青"   |
| 2     | "黄"   |
| 3     | "緑"   |
| 4     | "紫"   |

例: `getLuckyColor(0)` は `"赤"` を返す

## ヒント
- 配列を1つ用意して、`index`番目の要素を返すだけでOKです
- 実装例は `app-logic.js` にある `getLuckyNumber` 関数を見本にしてください

## 受け入れ条件
- [ ] `getLuckyColor` を実装した
- [ ] `node --test tests/*.test.js` を実行し、`getLuckyColor`のテストが通る
- [ ] 他の担当者の関数(未実装のまま)には手を入れていない
```

---

## 参考仕様 C: ラッキーアイテムを決める関数 (`getLuckyItem`)

**ラベル案**: `good first issue`
**ブランチ名の例**: `feature/issue-4-lucky-item`

**本文**:
```
## やること
`app-logic.js` の `getLuckyItem(index)` 関数を実装してください。

## 仕様
`index` (0〜4の整数) を受け取り、対応するラッキーアイテム(文字列)を返します。

| index | 返す値       |
|-------|--------------|
| 0     | "傘"         |
| 1     | "腕時計"     |
| 2     | "本"         |
| 3     | "コーヒー"   |
| 4     | "スニーカー" |

例: `getLuckyItem(0)` は `"傘"` を返す

## ヒント
- 配列を1つ用意して、`index`番目の要素を返すだけでOKです
- 実装例は `app-logic.js` にある `getLuckyNumber` 関数を見本にしてください

## 受け入れ条件
- [ ] `getLuckyItem` を実装した
- [ ] `node --test tests/*.test.js` を実行し、`getLuckyItem`のテストが通る
- [ ] 他の担当者の関数(未実装のまま)には手を入れていない
```

---

## 参考仕様 D: 運勢別の応援メッセージを決める関数 (`getLuckyMessage`)

**ラベル案**: `good first issue`
**ブランチ名の例**: `feature/issue-5-lucky-message`

**本文**:
```
## やること
`app-logic.js` の `getLuckyMessage(fortune)` 関数を実装してください。

## 仕様
`fortune` (「大吉」「中吉」「吉」「小吉」「凶」のいずれかの文字列)を受け取り、
対応する応援メッセージ(文字列)を返します。

| fortune | 返す値                       |
|---------|------------------------------|
| "大吉"  | "最高の1日になりそう！"       |
| "中吉"  | "良いことがありそうな予感！"  |
| "吉"    | "いつも通り、落ち着いて過ごそう" |
| "小吉"  | "小さな幸せを見つけよう"      |
| "凶"    | "無理せず、ゆっくり過ごそう"  |

例: `getLuckyMessage("大吉")` は `"最高の1日になりそう！"` を返す

## 注意
この関数は「担当A: 運勢を判定する関数(`getFortune`)」が返す文字列をそのまま
受け取ります。担当Aの実装内容(文字列の表記)と揃っているか確認しましょう。

## ヒント
- if文や、オブジェクト(連想配列)を使って対応表を作るとシンプルに書けます

## 受け入れ条件
- [ ] `getLuckyMessage` を実装した
- [ ] `node --test tests/*.test.js` を実行し、`getLuckyMessage`のテストが通る
- [ ] 他の担当者の関数(未実装のまま)には手を入れていない
```
