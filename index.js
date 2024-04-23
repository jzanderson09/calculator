'use strict';

const body = document.querySelector('body');
body.style.backgroundImage = 'url(desk-bg.jpg)';

const container = document.createElement('div');
container.id = 'container';
container.style.alignItems = 'center';
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.margin = '0 auto';
container.style.width = '100%';

const calculator = document.createElement('div');
calculator.id = 'calculator';
calculator.style.alignItems = 'center';
calculator.style.background = 'rgb(225 225 225)';
calculator.style.border = '1.6rem outset rgb(0 0 0)';
calculator.style.borderRadius = '10%';
calculator.style.boxShadow = '3px 3px 3px 3px rgb(0 0 0)';
calculator.style.display = 'flex';
calculator.style.flexFlow = 'column nowrap';
calculator.style.height = '90vh';
calculator.style.justifyContent = 'space-evenly';
calculator.style.margin = '2%';
calculator.style.width = '30%';

const calcDisplay = generateCalcDisplay();
const calcBtns = generateCalcButtons();

calculator.append(calcDisplay, calcBtns);
container.appendChild(calculator);
body.appendChild(container);

function generateCalcDisplay() {
    const display = document.createElement('div');
    styleCalcDisplay(display);
    return display;
}

function generateCalcButtons() {
    const btns = document.createElement('div');
    styleBtnDiv(btns);

    const topBtns = document.createElement('div');
    topBtns.id = 'top-btns';
    topBtns.style.display = 'flex';
    topBtns.style.flexFlow = 'row nowrap';

    const ac = document.createElement('button');
    ac.className = 'calc-btn';
    ac.id = 'ac';
    ac.textContent = 'AC';

    const parentheses = document.createElement('button');
    parentheses.className = 'calc-btn';
    parentheses.id = 'parentheses';
    parentheses.textContent = '()';

    const percent = document.createElement('button');
    percent.className = 'calc-btn';
    percent.id = 'percent';
    percent.textContent = '%';

    const divide = document.createElement('button');
    divide.className = 'calc-btn';
    divide.id = 'divide';
    divide.textContent = '÷';

    const topMiddleBtns = document.createElement('div');
    topMiddleBtns.id = 'top-middle-btns';
    topMiddleBtns.style.display = 'flex';
    topMiddleBtns.style.flexFlow = 'row nowrap';

    const seven = document.createElement('button');
    seven.className = 'calc-btn';
    seven.id = 'seven';
    seven.textContent = '7';

    const eight = document.createElement('button');
    eight.className = 'calc-btn';
    eight.id = 'eight';
    eight.textContent = '8';

    const nine = document.createElement('button');
    nine.className = 'calc-btn';
    nine.id = 'nine';
    nine.textContent = '9';

    const multiply = document.createElement('button');
    multiply.className = 'calc-btn';
    multiply.id = 'multiply';
    multiply.textContent = 'X';

    const middleBtns = document.createElement('div');
    middleBtns.id = 'middle-btns';
    middleBtns.style.display = 'flex';
    middleBtns.style.flexFlow = 'row nowrap';

    const four = document.createElement('button');
    four.className = 'calc-btn';
    four.id = 'four';
    four.textContent = '4';

    const five = document.createElement('button');
    five.className = 'calc-btn';
    five.id = 'five';
    five.textContent = '5';

    const six = document.createElement('button');
    six.className = 'calc-btn';
    six.id = 'six';
    six.textContent = '6';

    const subtract = document.createElement('button');
    subtract.className = 'calc-btn';
    subtract.id = 'subtract';
    subtract.textContent = '-';

    const bottomMiddleBtns = document.createElement('div');
    bottomMiddleBtns.id = 'bottom-middle';
    bottomMiddleBtns.style.display = 'flex';
    bottomMiddleBtns.style.flexFlow = 'row nowrap';

    const one = document.createElement('button');
    one.className = 'calc-btn';
    one.id = 'one';
    one.textContent = '1';

    const two = document.createElement('button');
    two.className = 'calc-btn';
    two.id = 'two';
    two.textContent = '2';

    const three = document.createElement('button');
    three.className = 'calc-btn';
    three.id = 'three';
    three.textContent = '3';

    const add = document.createElement('button');
    add.className = 'calc-btn';
    add.id = 'add';
    add.textContent = '+';

    const bottomBtns = document.createElement('div');
    bottomBtns.id = 'bottom-btns';
    bottomBtns.style.display = 'flex';
    bottomBtns.style.flexFlow = 'row nowrap';

    const zero = document.createElement('button');
    zero.className = 'calc-btn';
    zero.id ='zero';
    zero.textContent = '0';

    const period = document.createElement('button');
    period.className = 'calc-btn';
    period.id = 'period';
    period.textContent = '.';

    const backspace = document.createElement('button');
    backspace.className = 'calc-btn';
    backspace.id = 'backspace';
    backspace.textContent = 'del';

    const equals = document.createElement('button');
    equals.className = 'calc-btn';
    equals.id = 'equals';
    equals.textContent = '=';

    topBtns.append(ac, parentheses, percent, divide);
    topMiddleBtns.append(seven, eight, nine, multiply);
    middleBtns.append(four, five, six, subtract);
    bottomMiddleBtns.append(one, two, three, add);
    bottomBtns.append(zero, period, backspace, equals);

    btns.append(topBtns, topMiddleBtns, middleBtns, bottomMiddleBtns, bottomBtns);
    return btns;
}

function styleBtnDiv(div) {
    div.id = 'btns';
    div.style.alignItems = 'center';
    div.style.display = 'flex';
    div.style.flexFlow = 'row wrap';
    div.style.height = '60%';
    div.style.justifyContent = 'center';
    div.style.width = '90%';
}

function styleCalcDisplay(div) {
    div.id = 'calcDisplay';
    div.style.alignItems = 'flex-end';
    div.style.border = '5px inset rgb(0 0 0)';
    div.style.backgroundColor = 'rgb(125 125 125)';
    div.style.display = 'flex';
    div.style.height = '25%';
    div.style.justifyContent = 'center';
    div.style.justifySelf = 'flex-start';
    div.style.paddingBottom = '5%';
    div.style.width = '80%';
    div.textContent = 'TEST 12345';
}