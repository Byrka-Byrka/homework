'use strict'
// function sumOfThreeParameters(firstParameter = 0, secondParameter = 0, thirdParameter = 0){
//     let result =0;
//     let help = 0;
//     if (isNaN(+arguments[0])){
//         result = '';
//     }
//     for(let i=0; i < arguments.length; i++){
//         help = +arguments[i]
//         if (isNaN(+arguments[i])){
//             help = ' ' + arguments[i] + ' ';
//         }
//         result += help;
//     }   
//     return result;
// };



// function sumOfThreeParameters(firstParameter = 0, secondParameter = 0, thirdParameter = 0){
//     let result = 0;
//     let help = 0;
//     if (isNaN(+arguments[0])){
//         result = '';
//     }
//     for(let i=0; i < arguments.length; i++){
//         help = +arguments[i]
//         if (!isNaN(+arguments[i])){
//             result += +arguments[i]
//         }
//     }   
//     for(let i=0; i < arguments.length; i++){
//         help = +arguments[i]
//         if (isNaN(+arguments[i])){
//             help = ' ' + arguments[i] + ' ';
//             result += help;
//         }

//     }   
//     return result;
// };

// console.log(sumOfThreeParameters(3,'2',4))
// console.log(sumOfThreeParameters(3,'два',4))
// console.log(sumOfThreeParameters(3,2,4))
// console.log(sumOfThreeParameters('3','2','4'))
// console.log(sumOfThreeParameters('3','два','4'))
// console.log(sumOfThreeParameters(3,'2'))
// console.log(sumOfThreeParameters(3,'два'))
// console.log(sumOfThreeParameters(3,4))
// console.log(sumOfThreeParameters('3','4'))
// console.log(sumOfThreeParameters('3','два'))
// console.log(sumOfThreeParameters('один','два','три'))



// function sumOfThreeStringParameters(firstParameter, secondParameter, thirdParameter){
//     firstParameter = firstParameter.toLowerCase();
//     secondParameter = secondParameter.toLowerCase();
//     thirdParameter = thirdParameter.toLowerCase();
//     let i = firstParameter + ' '  + secondParameter + ' ' + thirdParameter;
//     if (secondParameter < firstParameter && secondParameter < thirdParameter && firstParameter < thirdParameter){
//         i = secondParameter + ' '  + firstParameter + ' ' + thirdParameter;
//     } else if(secondParameter < firstParameter && secondParameter < thirdParameter && firstParameter > thirdParameter){
//         i = secondParameter + ' '  + thirdParameter + ' ' + firstParameter;
//     }
//     if (thirdParameter < firstParameter && thirdParameter < secondParameter && firstParameter < secondParameter){
//         i = thirdParameter + ' '  + firstParameter + ' ' + secondParameter;
//     } else if(thirdParameter < firstParameter && thirdParameter < secondParameter && firstParameter > secondParameter){
//         i = thirdParameter + ' '  + secondParameter + ' ' + firstParameter;
//     }
//     if (firstParameter < secondParameter && thirdParameter < firstParameter){
//         i = firstParameter + ' '  + thirdParameter + ' ' + secondParameter;
//     }
//  return i;
// };
// console.log(sumOfThreeStringParameters('Abc', 'Cba', 'ccc'))
// console.log(sumOfThreeStringParameters('abc', 'cBa', 'cBc'))
// console.log(sumOfThreeStringParameters('CCC', 'aaa', 'bbb'))
// console.log(sumOfThreeStringParameters('CBA', 'ABC', 'BaC'))
// console.log(sumOfThreeStringParameters('abc', 'cba', 'ccc'))

// function sumOfThreeStringParameters(firstParameter, secondParameter, thirdParameter){
//     let items = [firstParameter.toLowerCase(), secondParameter.toLowerCase(), thirdParameter.toLowerCase()];
//     items.sort();
//     return items [0] + ' ' + items [1] + ' ' + items [2];
// }
// console.log(sumOfThreeStringParameters('Abc', 'Cba', 'ccc'))
// console.log(sumOfThreeStringParameters('abc', 'cBa', 'cBc'))
// console.log(sumOfThreeStringParameters('CCC', 'aaa', 'bbb'))
// console.log(sumOfThreeStringParameters('CBA', 'ABC', 'BaC'))
// console.log(sumOfThreeStringParameters('abc', 'cba', 'ccc'))

// function letterSignature(nameOfUser){
//     if(arguments.length === 0){
//         for(let i = 0; i < arguments.length +1;){
//         nameOfUser = prompt ('Enter your name');
//         if(nameOfUser){i++}
//         }
//     }
//     return 'Best regards, ' + nameOfUser ;
// };
// console.log(letterSignature('lebowski'))
// console.log(letterSignature())


// function mathPow (base, exponent){
//     if(arguments.length == 0){
//         return 'nothing';
//     }
//     if(arguments.length == 1 ){
//         return Math.pow(base, 2);
//     }
//     if(arguments.length == 2){
//         return Math.pow(base, exponent);
//     }
// };
// console.log(mathPow (2, 3))
// console.log(mathPow (2))
// console.log(mathPow (4, 3))
// console.log(mathPow (4))
// console.log(mathPow (4, '3'))
// console.log(mathPow ('2', 3))
// console.log(mathPow ('2'))