// make the number bank an empty list
// users will submits integers using the "add number" button
// numbers are added to the number bank section
// the submitted numbers are displayed in the number bank section
// sort 1 button: takes the first integer from the number bank and sorts it to either the odd or even section
// sort all: takes all the numbers in the numberBank and sorts them to either the odd or even section

document.addEventListener("DOMContentLoaded", function() {
  const numberInput = document.querySelector('input[name="number"]');
  const addButton = document.querySelector('button');
  const numberBankOutput = document.querySelector('#numberBank output');
  const sortOneButton = document.querySelector('#sortOne');
  const sortAllButton = document.querySelector('#sortAll');
  const oddsOutput = document.querySelector('#odds output');
  const evensOutput = document.querySelector('#evens output');

  let numberBank = [];

  addButton.addEventListener('click', function(event) {
    event.preventDefault();
    const enteredNumber = parseFloat(numberInput.value);
    if (!isNaN(enteredNumber)) {
      numberBank.push(enteredNumber);
      displayNumberBank();
    }
    numberInput.value = '';
  });

  function displayNumberBank() {
    numberBankOutput.textContent = numberBank.join(', ');
  }

  sortOneButton.addEventListener('click', function() {
    const firstNumber = numberBank.shift();
    if (firstNumber % 2 === 0) {
      evensOutput.textContent += firstNumber + ', ';
    } else {
      oddsOutput.textContent += firstNumber + ', ';
    }
    displayNumberBank();
  });

  sortAllButton.addEventListener('click', function() {
    for (let number of numberBank) {
      if (number % 2 === 0) {
        evensOutput.textContent += number + ', ';
      } else {
        oddsOutput.textContent += number + ', ';
      }
    }
    numberBank = [];
    displayNumberBank();
  });
});