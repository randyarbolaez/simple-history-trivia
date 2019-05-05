let question = document.getElementById('question');
let rightOrWrong = document.getElementById('right-or-wrong');

const triviaApi = fetch(
  `https://opentdb.com/api.php?amount=1&category=23&type=boolean`
).then(res => res.json());

triviaApi.then(res => {
  question.innerHTML = res.results[0].question;
});

function answerQuestion(e) {
  e.preventDefault();
  let input = document.getElementById('input').value;

  triviaApi.then(res => {
    if (res.results[0].correct_answer.toLowerCase() === input) {
      rightOrWrong.innerHTML = 'correct';
    } else {
      rightOrWrong.innerHTML = 'wrong';
    }
    setTimeout(() => {
      location.reload();
    }, 3000);
  });
}
