function add(num1, num2) { return num1 + num2; }

function subtract(num1, num2) { return num1 - num2; }

function multiply(num1, num2) { return num1 * num2; }

function divide(num1, num2) { num1 / num2; }


(function () {
    let input_value = prompt("Choose a service \n 1. Addition \n 2. Subtraction \n 3. Multiplication \n 4. Division")
    input_value = parseInt(input_value);
    if (input_value === 1) {


        let sum = 0;
        let number3 = 0;
        while (number3 != "E") {
            number3 = prompt("Enter numbers until you finish and then enter E");
            if (number3 == "E") {
                break;
            } else {
                number3 = parseInt(number3);
                sum = add(sum, number3);
                number3 = 0;
            }
        }
        console.log("Their sum is " + sum);


    } else if (input_value === 2) {
        let number1 = prompt("Enter first number.");
        let number2 = prompt("Enter second number.");
        number1 = parseInt(number1);
        number2 = parseInt(number2);
        let subtracted = subtract(number1, number2);
        console.log("Their difference is " + subtracted);


    } else if (input_value === 3) {

        let multiple = 1;
        let number3 = 0;
        while (number3 != "E") {
            number3 = prompt("Enter numbers until you finish and then enter E");
            if (number3 == "E") {
                break;
            } else {
                number3 = parseInt(number3);
                multiple = multiply(multiple, number3);
                number3 = 0;
            }
        }
        console.log("Their multiple is " + multiple);

    } else if (input_value === 4) {
        let number1 = prompt("Enter the first number.");
        let number2 = prompt("Enter the second number.");
        number1 = parseInt(number1);
        number2 = parseInt(number2);
        if (number2 == 0) {
            console.log("The denominator can't be zero");
        } else {
            let dividend = divide(number1, number2);
        }
        console.log("Their dividend is " + dividend);
    } else {
        window.alert("Your choice was incorrect")
    }


})();