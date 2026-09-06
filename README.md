# 今日のおみくじ - ハッカソン用 git/GitHub 体験教材

プログラミング未経験者向けに、git/GitHubを使った開発の一連の流れ
（issue → ブランチ → 実装 → commit/push → PR → レビュー → マージ → CI）を
体験するための教材リポジトリです。

## このアプリについて
ボタンを押すと「今日の運勢・ラッキーカラー・ラッキーアイテム・ラッキーナンバー」が
表示されるシンプルなおみくじアプリです。

🔗 **公開ページ（GitHub Pages）**: https://hayato95.github.io/github-workshop/
（mainブランチの内容がそのまま表示されます。参加者の実装が進むほど賑やかになります）

`app-logic.js` の中にある4つの関数（`getFortune` / `getLuckyColor` / `getLuckyItem` /
`getLuckyMessage`）はまだ実装されていません。参加者はそれぞれ1つずつ担当し、
自分のissue・ブランチで実装してPRを出します。

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
- [`docs/git-cheatsheet.md`](docs/git-cheatsheet.md): ブランチとは何か、gitコマンドの使い方
- [`docs/issues.md`](docs/issues.md): 親issue・sub-issueの下書き（主催者用）
- [`docs/workshop-guide.md`](docs/workshop-guide.md): 当日の進行ガイド（主催者用）

## 主催者向け: 公開設定について
このリポジトリは **Public** です。GitHub Pagesで`index.html`を公開するためで
（Privateのままだと無料プランではPagesが使えません）、内容に機密情報は無いため
公開してあります。

コラボレーターを招待する場合のコマンド例:
```bash
gh repo edit --add-collaborator <参加者のGitHubユーザー名>
```

issueの起票については [`docs/issues.md`](docs/issues.md) を参照してください。
