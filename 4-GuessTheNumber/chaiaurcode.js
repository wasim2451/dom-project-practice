//select the form
let totalGuesses = 0;
let remaining_guesses = 10;
const result = document.getElementById('result');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const random_number = Math.floor(Math.random() * 100) + 1;
  console.log('Random Number', random_number);
  const guessedNumber = Number(document.getElementById('guessField').value);
  if (typeof guessedNumber === 'number' && !isNaN(guessedNumber)) {
    console.log('Guessed Number', guessedNumber);
    if (guessedNumber == random_number) {
      result.textContent = 'Correct';
    } else {
      result.textContent = 'Wrong Guess';
    }
    counter();
  } else {
    alert('Wrong Input');
  }
});
function counter() {
  totalGuesses += 1;
  remaining_guesses -= 1;
  if (totalGuesses == 10) {
    const promptValue = prompt(
      'You can not Proceed! Want a new Game ? Yes or No'
    );
    if (promptValue === 'Yes' || promptValue == 'yes') {
      totalGuesses = 0;
      remaining_guesses = 10;
    } else {
      alert('game Over !');
      const temp = document.getElementById('guessField');
      temp.value = '0';
      temp.setAttribute('disabled', 'true');
      const submit = document.getElementById('subt');
      submit.setAttribute('disabled', 'true');
      submit.value = '❌Disabled';
    }
  }
  const guesses = document.getElementById('guesses');
  const lastResult = document.getElementById('lastResult');
  guesses.innerHTML = `${totalGuesses}`;
  lastResult.innerHTML = `${remaining_guesses}`;
}
