'use strict'
// let userData = prompt('Enter something');
// alert(userData);

let firstNumber = Number (prompt('Enter first number'));
let secondNumber = Number (prompt('Enter second number'));
let thirdNumber = Number (prompt('Enter third number'));
if(String(firstNumber + secondNumber + thirdNumber) == 'NaN') {
    alert('NOT A NUMBER');
} else {
    alert(firstNumber + secondNumber + thirdNumber);
};

// let userName = prompt('Enter your name');
// let userAge = prompt('Enter your age');
// if(userAge > 17) {
//     alert('Wellcome ' + userName);
// } else {
//     alert('Sorry ' + userName + " access failed")
// };

// let giveBlockName = confirm('Want to enter a block name?');
// if (giveBlockName) {
//     let blockName = prompt('Enter a block name');
//         let giveElementName = confirm('Want to enter a element name?');
//         if (giveElementName) {
//         let elementName = prompt('Enter a element name');
//             let giveModifierName = confirm('Want to enter a modifier name?');
//             if(giveModifierName) {
//                 let modifierName = prompt('Enter a modifier name');
//                 console.log(blockName + '__' + elementName + '_' + modifierName);
//             } else {
//                 console.log(blockName + '__' + elementName);
//             }
//         } else {
//         console.log (blockName);
//         };
// } else {
// confirm('the element is not assigned a class');
// };

let theFirstNumber = Number(prompt('Enter first number'));
let theSecondNumber = Number(prompt('Enter second number'));
let orithmeticOperation = prompt('Choose orithmetic operation' , 'div, plus, mult, minus');
if (orithmeticOperation == 'div'){
    console.log(theFirstNumber / theSecondNumber);
} else if(orithmeticOperation == 'plus'){
    console.log(theFirstNumber + theSecondNumber);
} else if(orithmeticOperation == 'mult'){
    console.log(theFirstNumber * theSecondNumber);
} else if(orithmeticOperation == 'minus'){
    console.log(theFirstNumber - theSecondNumber);
};