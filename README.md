# 今日のおみくじ - ハッカソン用 git/GitHub 体験教材

プログラミング未経験者向けに、git/GitHubを使った開発の一連の流れ
（issue → ブランチ → 実装 → commit/push → PR → レビュー → マージ → CI）を
体験するための教材リポジトリです。

## このアプリについて
ボタンを押すと「今日の運勢・ラッキーカラー・ラッキーアイテム・ラッキーナンバー」が
表示されるシンプルなおみくじアプリです。

🔗 **公開ページ（GitHub Pages）**: https://hayato95.github.io/github-workshop/
（mainブランチの内容がそのまま表示されます。参加者の実装が進むほど賑やかになります）

まだ実装されていない機能があります。親issue（[#1](https://github.com/hayato95/github-workshop/issues/1)）を
参加者自身でsub-issueに分解し、1人1つずつ担当してブランチで実装、PRを出します。
追加してほしい機能は、たとえば次のようなものです（詳しくは#1本文を参照）。

- おみくじを引いたら、大吉〜凶のような運勢が表示されてほしい
- 運勢と一緒に、その日のラッキーカラーが表示されてほしい
- 運勢と一緒に、その日のラッキーアイテムが表示されてほしい
- 運勢の内容に合わせて、応援してくれるメッセージが表示されてほしい

これをどんな関数に分解するか、返す値の中身（運勢のラベル名や色の名前など）は
あえて書いていません。自分たちで自由に考えて実装してください（「5つの値が重複
しないこと」「同じ入力なら毎回同じ値を返すこと」だけが条件です）。技術的な仕様の
参考は [`docs/issues.md`](docs/issues.md) にまとめてあります。

## セットアップ（参加者向け）
必要なもの: エディタ（VS Codeなど）、ブラウザ、git

```bash
git clone <このリポジトリのURL>
cd github-workshop
```

追加のインストール（npm install等）は不要です。`index.html` をブラウザで直接
開くだけで動作します。

## 動作確認方法
- ブラウザで `index.html` を開き、「おみくじを引く」ボタンを押す
- 自分の担当関数が未実装のうちはエラーが表示されます（正常な動作です）

## テストの実行方法
自動テストは GitHub Actions 上（Node.js が入っている環境）で実行されるため、
参加者のローカルにNode.jsが無くても問題ありません。

もしローカルでも実行したい場合（Node.jsがインストール済みの方向け）:
```bash
node --test tests/*.test.js
```

## ドキュメント
- [`docs/git-cheatsheet.md`](docs/git-cheatsheet.md): ブランチとは何か、gitコマンドの使い方（参加者向け）
- [`docs/issues.md`](docs/issues.md): sub-issueを作成するときの参考仕様（参加者向け）
- [`docs/workshop-guide.md`](docs/workshop-guide.md): 当日の進行ガイド・タイムテーブル（主催者向け）

## 主催者向け: 公開設定について
このリポジトリは **Public** です。GitHub Pagesで`index.html`を公開するためで
（Privateのままだと無料プランではPagesが使えません）、内容に機密情報は無いため
公開してあります。

コラボレーターを招待する場合のコマンド例:
```bash
gh repo edit --add-collaborator <参加者のGitHubユーザー名>
```

親issueは作成済み（[#1](https://github.com/hayato95/github-workshop/issues/1)）です。sub-issueは当日、
参加者自身に作成してもらうため、事前に作る必要はありません。詳しい進行は
[`docs/workshop-guide.md`](docs/workshop-guide.md) を参照してください。
