# アプリ概要

- React と Firebase を用いた認証機能付きのブログです。

# 技術スタック

- React18
- javascript

# ビルドツール

- Vite

# コード整形

- eslint (Guide: airbnb)
- prettier

# 起動方法

必要なパッケージを install する

```
npm ci
```

起動する。

```
npm start
```

# ブランチ運用ルール

- main: リリースブランチ
  - develop: 開発ブランチ
    - feature: 機能開発ブランチ
  - hotfix: 緊急修正ブランチ

# マージ運用ルール

マージコミットは作るようにする

# コミットメッセージ

- feat: 機能追加
- fix: バグ修正
- docs: ドキュメントのみ変更
- style: 空白、フォーマット、セミコロンなどの修正のみ
- refactor: 仕様に影響を与えないコード修正
- perf: パフォーマンス向上
- test: テスト関連
- chore: ビルドプロセス、補助ツール、ライブラリなどの補助ツールや補助ライブラリの変更
