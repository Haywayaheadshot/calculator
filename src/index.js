import './style.css';

const calculator = document.querySelector('.calculator');
const inputOne = document.querySelector('.calculator__display__input__one');
// const inputTwo = document.querySelector('.calculator__display__input__two');
// const addition = document.querySelector('#add');

calculator.addEventListener('click', (event) => {
  const inputOneValue = [];
  // const inputTwoValue = [];
  if (event.target.className.includes('number')) {
    inputOne.value += event.target.innerHTML;
    inputOneValue.push(inputOne.value);
  }
  // addition.addEventListener('click', (event) => {
  //   inputOne.value = '';
  //   if (event.target.className.includes('number')) {
  //     let input = document.getElementById('input-2');
  //     input += event.target.innerHTML;
  //     // console.log(input);
  //   }
  // });
});