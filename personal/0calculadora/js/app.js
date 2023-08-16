const operationPrint = document.querySelector('.operation__print');
const resultPrint = document.querySelector('.result__print');
const buttonNumber = document.querySelectorAll('.buttonNumber');
const buttonMath = document.querySelectorAll('#buttonMath');
const buttonDel = document.querySelector('#buttonDel');
const buttonEqual = document.querySelector('#buttonEqual');
const buttonReset = document.querySelector('#buttonReset');
const buttonPoint = document.querySelector('#buttonPoint');

buttonNumber.forEach(number => {
    number.addEventListener('click', (e) => {
        if (resultPrint.textContent.trim().length !== 0) {
            resultPrint.textContent = '';
            operationPrint.textContent = '';
            operationPrint.textContent += number.textContent
        } else{
            operationPrint.textContent += number.textContent
        }
    })
});

buttonMath.forEach(symbol => {
    symbol.addEventListener('click', (e) => {
        if (operationPrint.textContent.trim().length > 0 && !operationPrint.textContent.includes('/') && !operationPrint.textContent.includes('x') && !operationPrint.textContent.includes('-') && !operationPrint.textContent.includes('+')) {
            operationPrint.textContent += symbol.value
        }

        if (resultPrint.textContent.trim().length !== 0) {
            operationPrint.textContent = resultPrint.textContent;
            resultPrint.textContent = '';
            operationPrint.textContent += symbol.value
        }
    })
});

buttonEqual.addEventListener('click', (e) =>{
    resultPrint.textContent = eval(operationPrint.textContent).toFixed(4);
})

buttonDel.addEventListener('click', (e) => {
    if (resultPrint.textContent.trim().length === 0) {
        operationPrint.textContent = operationPrint.textContent.slice(0, -1)
    }
})

buttonReset.addEventListener('click', (e) => {
    operationPrint.textContent = '';
    resultPrint.textContent = '';
})

buttonPoint.addEventListener('click', (e) => {
    operationPrint.textContent += buttonPoint.textContent
})