let currentInput = '';
    let firstValue = '';
    let operator = '';
    let shouldResetScreen = false;

    const display = document.getElementById('display');
    document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark');
  });

    function appendNumber(number) {
      if (display.textContent === '0' || shouldResetScreen) {
        display.textContent = number;
        shouldResetScreen = false;
      } else {
        display.textContent += number;
      }
      currentInput = display.textContent;
    }

    function chooseOperator(op) {
      if (operator !== '') calculate();
      firstValue = display.textContent;
      operator = op;
      shouldResetScreen = true;
    }

    function calculate() {
      if (operator === '' || shouldResetScreen) return;
      let result;
      const a = parseFloat(firstValue);
      const b = parseFloat(display.textContent);
      switch (operator) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = b !== 0 ? a / b : 'Error'; break;
        default: return;
      }
      display.textContent = result;
      currentInput = result;
      operator = '';
    }

    function clearDisplay() {
      display.textContent = '0';
      currentInput = '';
      firstValue = '';
      operator = '';
    }