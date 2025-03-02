let numberA = +prompt("Mời bạn nhập số a");
let numberB = +prompt("Mời bạn nhập số b");
let operation= prompt("Mời bạn nhập phép toán (+,-,*,/)");
let result;
switch(operation){
    case "+":
        result = numberA + numberB;
        alert(`a + b = ${result}`);
        break;
    case "-":
        result = numberA - numberB;
        alert(`a - b = ${result}`);
        break;
    case "*":
        result = numberA * numberB;
        alert(`a * b = ${result}`);
        break;
    case "/":
        result = numberA / numberB;
        alert(`a / b = ${result}`);
        break;
    default:
        alert("Không xác định");
}
