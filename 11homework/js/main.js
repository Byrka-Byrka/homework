'use strict'
// let iterationCounter = 0;
// while (iterationCounter < 5){
//     let startOfTheNumberRange = prompt('enter the start of the range');
//     let endOfTheNumberRange = prompt('enter the end of the range');
//     if (startOfTheNumberRange < endOfTheNumberRange){
//         for(let i = startOfTheNumberRange; i < +endOfTheNumberRange; i++ ){
//             iterationCounter++
//             console.log(+i);
//         };
//     };
//     if (endOfTheNumberRange < startOfTheNumberRange){
//         for(let i = endOfTheNumberRange; i < startOfTheNumberRange; i++ ){
//             iterationCounter++
//             console.log(+i);
//         };
//     };
//     if(iterationCounter < 5){
//         alert('диапазон чисел включает в себя менее пяти значений!')
//     }
// };


// let pinIterationCounter = 0;
// let pukIterationCounter = 0;
// let pin = '1234';
// let puk = '321';
// let pinFromUser;
// let pukFromUser;
// while(pin != pinFromUser && pukIterationCounter < 4){
// while (pin != pinFromUser && pinIterationCounter != 3){
//     pinFromUser = prompt ('enter PIN code');
//     if (pin != pinFromUser){
//         pinIterationCounter++
//         alert( 3-pinIterationCounter + ' attempts left');
//     }
//     if (pin == pinFromUser){
//         alert('correct pin, wellcome');
//     }
//     if (pin != pinFromUser && pukIterationCounter == 3 && pinIterationCounter == 3){
//         pukIterationCounter++
//         alert ('wrong PIN and PUK code');
        
//     }
// };
// while (pinIterationCounter == 3 && puk != pukFromUser && pukIterationCounter < 3){
//     pukFromUser = prompt ('enter PUK code');
//     if (puk!=pukFromUser){
//         pukIterationCounter++
//         alert( 3-pukIterationCounter + ' attempts left')
//     }
//     if (puk == pukFromUser){
//         alert('correct puk');
//         pukIterationCounter++
//         pinIterationCounter = 0;
//         pukFromUser = '';
//     }
//     if (pin != pinFromUser && pukIterationCounter == 3 && pinIterationCounter == 3){
//         alert ('wrong PIN and PUK code');
//         pukIterationCounter++
//     }
// };
// };


let iterationCounter = 0;
let moreThen100 ;
let multipleOf2 ;
let positive ;
let fractional ;
let isRus = function (text) {
    return /[а-я]/i.test(text);
};
let isEng = function (text) {
    return /[a-z]/i.test(text);
};
function typeOfNumbersToShow (i){
    (i < 100 )? moreThen100 = ' меньше 100' : (i == 100 )? moreThen100 = ' равно 100' : moreThen100 = ' больше 100';
    (i % 2 != 0)? multipleOf2 = ' нечетное' : multipleOf2 = ' четное';
    (i < 0 )? positive = ' отрицательное' : (i == 0 )? positive = ' равно 0' : positive = ' положительное';
    ((i % 1) != 0) ? fractional = ' дробное' : fractional = ' целое';
    if (isNaN(i)==false){
    let typeOfNumbers = (i + moreThen100 + multipleOf2 + positive + fractional);
    return typeOfNumbers;
};
}
    let startOfTheNumberRange = prompt('enter the start of the range');
    let endOfTheNumberRange = prompt('enter the end of the range');
    if (isRus(startOfTheNumberRange || endOfTheNumberRange)) {
        alert('это не число, это russian лангуаге');
    } else if (isEng(startOfTheNumberRange || endOfTheNumberRange)){
        alert('к несчастью это не цыхры а латинские буквы, попробуй ещё');
    };
    if (startOfTheNumberRange < endOfTheNumberRange){
        for(let i = startOfTheNumberRange; i < +endOfTheNumberRange; i++ ){
            iterationCounter++
            console.log(typeOfNumbersToShow (i));
        };
    };
    if (endOfTheNumberRange < startOfTheNumberRange){
        for(let i = endOfTheNumberRange; i < startOfTheNumberRange; i++ ){
            iterationCounter++
            console.log(typeOfNumbersToShow (i));
        };
    };



// let startOfRange = prompt ('enter start of range');
// let endOfRange = prompt('enter end of range');
// let iterationCounter = 0;
// let count = 7;
// if(startOfRange<endOfRange){
//     for(let i = startOfRange; i < endOfRange; i++){    
//     iterationCounter++
//     console.log(i)
//     if (iterationCounter===count)break;    
//     };
// };
// if(startOfRange>endOfRange){
//     for(let i = endOfRange; i < startOfRange; i++){    
//     iterationCounter++
//     console.log(i)
//     if (iterationCounter===count)break;    
//     };
// };

