const express = require("express");
const app = express();


app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number(req.query.win);
  let total = Number(req.query.total);
  console.log({ hand, win, total });
  
  const num = Math.floor(Math.random() * 3 + 1);
  let cpu = '';
  if (num == 1) cpu = 'グー';
  else if (num == 2) cpu = 'チョキ';
  else cpu = 'パー';

  let judgement = '';
  if (hand === cpu) {
    judgement = '引き分け';
  } else if (
    (hand === 'グー' && cpu === 'チョキ') ||
    (hand === 'チョキ' && cpu === 'パー') ||
    (hand === 'パー' && cpu === 'グー')
  ) {
    judgement = '勝ち';
    win += 1;
  } else {
    judgement = '負け';
  }

  total += 1;

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  };
  res.render('janken', display);
});

// 運勢占いのルート
app.get("/fortune", (req, res) => {
  const fortunes = ["大吉", "中吉", "小吉", "凶", "大凶"];
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('fortune', { fortune: randomFortune });
});

// 数当てゲームのルート
let secretNumber = Math.floor(Math.random() * 10) + 1;

app.get("/number-guess", (req, res) => {
  const userGuess = Number(req.query.guess);
  let message = '';

  if (userGuess === secretNumber) {
    message = "正解！おめでとうございます！";
    secretNumber = Math.floor(Math.random() * 10) + 1; // 新しい数字を生成
  } else if (userGuess < secretNumber) {
    message = "もっと大きな数字です。";
  } else {
    message = "もっと小さな数字です。";
  }

  res.render('number-guess', { message: message, secretNumber: secretNumber });
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
