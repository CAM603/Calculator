const calculator = {
    num1: null,
    num2: null,
    operator: ''
}

// Add click to numbers and display on screen
let numbers = document.querySelectorAll('.number');
let screen = document.querySelector('.screen');

numbers.forEach(el => el.addEventListener('click', (event) => {
    if( screen.textContent === '0' || calculator.num1 !== null) {
        screen.textContent = event.target.textContent
    } else {
        screen.textContent += event.target.textContent;
    }
}));

// Add click to clear button and clear screen
let clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    screen.textContent = 0;
    calculator.num1 = null;
    calculator.num2 = null;
    calculator.operator = null;
});

// Add click to decimal
let decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
    screen.textContent.includes('.') ? screen.textContent = screen.textContent : screen.textContent += event.target.textContent;
    
});

// Create function to calculate 
function calculate(obj) {
    return obj.operator === '+' ? screen.textContent = +obj.num1 + +obj.num2
    : obj.operator === '-' ? screen.textContent = obj.num1 - obj.num2
    : obj.operator === '*' ? screen.textContent = obj.num1 * obj.num2
    : obj.operator === '/' ? screen.textContent = obj.num1 / obj.num2
    : null;
};

// When clicking operator, add screen content to calculator object
let operator = document.querySelectorAll('.operator');

operator.forEach(el => el.addEventListener('click', (event) => {
    calculator.num1 = screen.textContent;
    calculator.operator = event.target.textContent;
    screen.textContent = screen.textContent;
    
    console.log(calculator)
}));

// Calculate when clicking equals
let equals = document.querySelector('.equals');

equals.addEventListener('click', () => {
    calculator.num2 = screen.textContent;
    calculate(calculator);
    console.log(calculator);
})
