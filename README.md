# webpro_06 プログラムドキュメント

このリポジトリには、`app5.js` を使用したWebアプリケーションが含まれています。このプログラムは、ユーザーに対して「じゃんけん」や「サイコロ」「占い」などの簡単なゲーム機能を提供します。

## ファイル一覧

| ファイル名              | 説明                               |
|-------------------------|------------------------------------|
| `app5.js`               | プログラム本体                     |
| `views/janken.ejs`      | じゃんけんの開始画面               　|
| `views/fortune.ejs`　 　 | 運勢占い開始画面              　　　 |
| `views/number-guess.ejs`| 数字当てゲーム開始画面               |


## 起動方法

1. ターミナルでnode app5.jsでサーバー8080を立ち上げる
2. その後ブラウザでそれぞれのURLを入力する
3. じゃんけん　：http://localhost:8080/janken?hand=グー&win=0&total=0
4. 占い　　　　：http://localhost:8080/fortune
5. 数当てゲーム：http://localhost:8080/number-guess?guess=5




## じゃんけんのフローチャート
```mermaid
flowchart TD;
    
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
    start["開始"] --> input["名前を入力"];
    input --> calculate["運勢を計算"];
    calculate --> display["結果を表示"];
    display --> end1["終了"];
 ```   

