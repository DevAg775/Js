const form = document.querySelector('form');
//We will not here input value cause here it will load value on loading of page whihc will get empty value that's will load under the form
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  

  if (bmi <= 18.6){
    results.innerHTML = `${bmi} Under weight`;
  }
  else if(bmi > 18.6 && bmi <24.9){
    results.innerHTML = `${bmi} Normal Range`;
  }
  else if (bmi >= 24.9){
    results.innerHTML = `${bmi} Overweight`;
  }
});
