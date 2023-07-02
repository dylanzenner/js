const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2){
    const result = num1 + num2
    alert(result);
}
currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
add(30, 50)
outputResult(currentResult, calculationDescription);