# webpro_06 プログラムドキュメント

このリポジトリには、`app5.js` を使用したWebアプリケーションが含まれています。このプログラムは、ユーザーに対して「じゃんけん」や「運勢占い」「数字当てゲーム」などの簡単なゲーム機能を提供します。

## ファイル一覧

| ファイル名              | 説明                                 　|
|----------------------------|---------------------------------|
| `app5.js`                  | プログラム本体                    　|
| `views/janken.ejs`         | じゃんけんの開始画面                 |
| `views/fortune telling.ejs`| 運勢占い開始画面              　　　　|
| `views/guessing game.ejs`  | 数字当てゲーム開始画面              　|


## 起動方法

1. ターミナルでnode app5.jsでサーバー8080を立ち上げる
2. その後ブラウザでそれぞれのURLを入力する
3. じゃんけん　：http://localhost:8080/janken?hand=グー&win=0&total=0
4. 占い　　　　：http://localhost:8080/fortune
5. 数当てゲーム：http://localhost:8080/number-guess?guess=5




## じゃんけんのフローチャート
```mermaid
flowchart TD;
    A[開始] --> B{手を選択};
    B --> C[CPUの手をランダムに決定];
    C -->|引き分け| E[結果: 引き分け];
    C -->|勝ち| F[結果: 勝ち];
    F --> G[勝ちのカウントを増やす];
    C -->|負け| H[結果: 負け];
    G --> I[合計のカウントを増やす];
    E --> I;
    H --> I;
    I --> J[結果を表示];
    J --> K[終了];
 ```
## 運勢占いのフローチャート
```mermaid
 flowchart TD;
    A[開始] --> B{運勢を占う};
    B --> C[運勢リストを用意];
    C --> D[ランダムに運勢を選択];
    D --> E[選ばれた運勢を表示];
    E --> F[終了];
 ```   
## 数字当てゲームのフローチャート
```mermaid
flowchart TD;
    A[開始] --> B[秘密の数字を生成];
    B --> C{ユーザーの予想};
    C -->|正解| D[メッセージ: 正解！おめでとうございます！];
    D --> E[新しい数字を生成];
    C -->|小さい| F[メッセージ: もっと大きな数字です。];
    C -->|大きい| G[メッセージ: もっと小さな数字です。];
    E --> H[結果を表示];
    F --> H;
    G --> H;
    H --> I[終了];
 ```   

