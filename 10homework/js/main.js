'use strict'
// let userName = prompt ('enter your name', 'C-3');
// let userSurname = prompt ('enter your surname', 'PO');
// let userLogin = prompt ('enter your nickname', 'KIBORG_YBIJZA');
// (userName && userSurname && userLogin) ? alert ('let the force be with you ' + userName + ' ' + userSurname + ' ' + userLogin) : (userName && userSurname && (userLogin == null)) ? alert ('let the force be with you ' + userName + ' ' + userSurname) : ((userName == null) && userSurname && userLogin) ? alert('let the force be with you ' + userLogin) : (userName && (userSurname == null) && userLogin) ? alert('let the force be with you ' + userName): (userName && (userSurname == null && userLogin == null)) ? alert('hello ' + userName) : alert ('Hi Noname');

// специально делал через '?'



// let userNumber = prompt('enter any number');
// let moreThen100 = ' больше 100';
// let multipleOf2 = ' четное';
// let positive = ' положительное';
// let fractional = ' целое';
// var isRus = function (text) {
//     return /[а-я]/i.test(text);
// };
// var isEng = function (text) {
//     return /[a-z]/i.test(text);
// };
// if (userNumber < 101 ) {
//     moreThen100 = ' меньше 100'
// }else if (userNumber == 100 ){
//     moreThen100 = ' равно 100';
// };
// if (userNumber % 2 != 0) {
//     multipleOf2 = ' нечетное';
// };
// if (userNumber < 0 ){
//     positive = ' отрицательное';
// };
// if (userNumber % 1 != 0){
//     fractional = ' дробное';
// };
// if (isNaN(userNumber)==false){
//     alert (userNumber + moreThen100 + multipleOf2 + positive + fractional);
// } else if (isRus(userNumber)) {
//     alert('это не число, это russian лангуаге');
// } else if (isEng(userNumber)){
//     alert('к несчастью это не цыхры а латинские буквы, попробуй ещё')
// };

// что-то не работало, уточню на паре, поэтому не удалил
// (userNumber < 101 )? moreThen100 = ' меньше 100' : (userNumber % 2 != 0)? multipleOf2 = ' нечетное' : (userNumber < 0 )? positive = ' отрицательное' : ((userNumber % 1) != 0) ? fractional = ' дробное' : fractional = ' целое';



let firstNumber = Number (prompt('Enter first number'));
let secondNumber = Number (prompt('Enter second number'));
let thirdNumber = Number (prompt('Enter third number'));
(String(firstNumber + secondNumber + thirdNumber) == 'NaN')? alert('NOT A NUMBER') : alert(firstNumber + secondNumber + thirdNumber);




// let nameOfUser = prompt('enter your name');
// let userAge = prompt ('enter your age');
// (userAge >17)? alert('hello ' + nameOfUser) : alert('Goodbye ' + nameOfUser);


// let numberOfUser = prompt('enter a number from 0 to 9');
// switch(numberOfUser){
//     case '0':
//         alert('zero');
//         break;
//     case '1':
//         alert('one');
//         break;
//     case '2':
//         alert('two');
//         break;
//     case '3':
//         alert('three');
//         break;
//     case '4':
//         alert('four');
//         break;
//     case '5':
//         alert('five');
//         break;        
//     case '6':
//         alert('six');
//         break;
//     case '7':
//         alert('seven');
//         break;        
//     case '8':
//         alert('eight');
//         break;  
//     case '9':
//         alert('nine');
//         break;         
// }