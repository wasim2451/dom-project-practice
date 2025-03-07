//select the form 
let totalGuesses=0;
let remaining_guesses=10;
const form=document.querySelector('form');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const random_number=Math.floor(Math.random()*100)+1;
  console.log(random_number);
  const guessedNumber=document.getElementById('guessField').value;
  console.log(guessedNumber);
  const result=document.getElementById('result')
  if(guessedNumber==random_number){
    result.textContent='Correct'

  }else{
    result.textContent='Wrong Guess'
  }
  counter();
})
function counter(){
  if(totalGuesses==10){
    totalGuesses=0;
    remaining_guesses=10;
    alert('You can not Proceed');
  }
  totalGuesses+=1;
  remaining_guesses-=1;
  const guesses=document.getElementById('guesses');
  const lastResult=document.getElementById('lastResult');
  guesses.innerHTML=`${totalGuesses}`;
  lastResult.innerHTML=`${remaining_guesses}`;
}