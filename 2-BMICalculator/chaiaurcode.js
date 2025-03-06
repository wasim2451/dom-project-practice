//Select the form
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const h = document.getElementById('height').value / 100;
  console.log(h);
  const w = parseInt(document.getElementById('weight').value);
  console.log(w);
  const bmi = Math.floor(w / (h * h));
  let results;
  if (bmi < 18.6) results = 'Underweight';
  else if (bmi > 18.6 && bmi < 24.9) results = 'Normal';
  else results = 'Overweight';
  console.log(bmi);
  console.log(results);
  document.querySelector('#weight-guide').innerHTML = `
  <h3>You belong to ${results} category </h3>
  `;
});
