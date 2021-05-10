'use strict'
let randomArrayGenerator = function(arrLength,interval){
    let newArr = [];
    for(let i = 0; i<arrLength;i++){
        newArr.push(Math.floor(Math.random() * Math.floor(interval+1)));
    }
    return newArr;
};


console.log(randomArrayGenerator(10, 5))
console.log(randomArrayGenerator(4, 3))
console.log(randomArrayGenerator(5, 100))



let firstArray = ['sex','drugs','rock and roll']
let secondArray = ['egalite', 'fraternite', 'liberte']
let thirdArray = ['Patria','o','muerte']

let arraySplicer = function(array, word){
return array.reduce((accumulator,current) => {
   if (current != word){
       return [...accumulator, current]
   };
   return [...accumulator]
},[])
}


console.log(arraySplicer(firstArray, 'drugs'))
console.log(arraySplicer(secondArray, 'mort'))
console.log(arraySplicer(thirdArray, 'muerte'))

let userDataType = (userData) =>{

    if (userData === 'null') {
        userData = null;
    }
    else if (userData === 'true') {
        userData = true;
    }
    else if (userData === 'false') {
        userData = false;
    }
    else if (userData === 'undefined') {
        userData = undefined;
    }
    else if (!isNaN(+userData)) {
        userData = +userData;
    }
    else if (userData === 'null') {
        userData = null;
    }
    return userData
}
let arrayBuilder = (() =>{
    let arr = [];
    while (true){
        
        let userData = prompt('enter some value');
        if(!userData){
            return arr;
            
        }
        if (userData.startsWith('[') && userData.endsWith(']')){
            let str = userData.substr(1,userData.length-2)
            str = str.split(', ')
            userData = str.reduce((accum, current) =>{
                return [...accum, userDataType(current)]
            },[])
        } else {
            userData = userDataType(userData)
        }
        arr.push(userData)
    }
})
console.log(arrayBuilder())



const arrayOfPersons = [
    {
    name: 'Ferdinant',
    surname: 'Foch',
    age: 54,
    nationality: 'French',
    skill: 'Military management',
    zodiacSign: undefined,
    height: 173,
    isAlive: false
    },
    {
    name: 'Jackson',
    surname: 'Bricks',
    age: 20,
    nationality: 'USA',
    skill: 'farmer',
    height: 187,
    specialTrait: 'mechanical arms',
    isFictionalCharacter: true
    },
    {
    name: 'Hideo',
    surname: 'Kozima',
    age: 56,
    nationality: 'USA',
    skill: 'game developer',
    height: 173,
    specialTrait: 'genius',
    actualGames: ['Death Stranding','Metal Gear'],
    isAlive: true,
    },
    {
    name: 'Kim',
    surname: 'Kardashian',
    age: 39,
    nationality: 'USA',
    skill: 'model',
    height: 159,
    zodiacSign: 'scorpio'
    },
    {
    name: 'Mia',
    surname: 'Khalifa',
    age: 27,
    nationality: 'Lebanon',
    skill: 'actress',
    height: 157,
    zodiacSign: 'saggitarius',
    specialTrait: 'very exspressionable',
    isAlive: true,
    isFictionalCharacter: false
    },
    {
    name: 'Herman',
    surname: 'Hesse',
    age: 85,
    nationality: 'Germany',
    skill: 'writer',
    zodiacSign: undefined,
    isAlive: false,
    isFictionalCharacter: false,
    bibliography: ['Der Steppen Wolf', 'Das Glasperlenspiel', ]
    },
    {
    name: 'Fedor',
    surname: 'Dostoevsky',
    age: 60,
    nationality: 'Russia',
    skill: 'writer',
    isAlive: false,
    isFictionalCharacter: false,
    bibliography: ['The demons', 'The Crime and Punishment','The Idiot']
    },
    {
    name: 'Doomguy',
    surname: undefined,
    age: undefined,
    nationality: undefined,
    skill: 'demon slayer',
    zodiacSign: undefined,
    isFictionalCharacter: true,
    specialTrait: 'Angry a bit',
    },
    {
    name: 'Sonic',
    surname: 'The Hedgehog',
    age: 13,
    nationality: undefined,
    zodiacSign: undefined,
    isFictionalCharacter: true,
    specialTrait: 'Fast as f#@k',
    },
    {
    name: 'Bruce',
    surname: 'Wayne',
    age: 12,
    isFictionalCharacter: true
    },
    {
    name: 'Ella',
    surname: 'Fitzgerald',
    age: 79,
    isFrictionalCharacter: false,
    isAlive: false,
    specialTrait: 'Amazing voice',
    signatureSongs: ['Cry Me a river', 'Hello Dolly', 'Summertime', 'In a sentimental mood']
    }
    ];

    function surnameSort(arrayOfPersons){
        let surnameArr = arrayOfPersons.map(obj =>{
            let {name, surname, age, ...rest} = obj
            if(name === undefined) name = null;
            if(surname === undefined) surname = null;
            if(age === undefined) age = null;
            return {name, surname, age}
        });
        surnameArr.sort((a,b) => {
            if(a.surname === null|| b.surname === null)return -1;
            if(a.surname < b.surname)return -1;
            if(a.surname < b.surname)return 1;
            
        })
        return surnameArr;
    }
    console.log(surnameSort(arrayOfPersons))



    function arrPropSort(arr){
        let personsProps = arr.reduce((accum,current) =>{
            let numOfKeys = Object.keys(current).length;
            if ( numOfKeys < 8 ) return accum;
            if ( numOfKeys >= 8 ) return [...accum, current]
        },[])
        personsProps.sort((a,b) => (Object.keys(a).length - Object.keys(b).length))
        personsProps.reverse();
        return personsProps;
    }
    console.log(arrPropSort(arrayOfPersons))


    function ageSort(arr){
        let arrToAgeSort = [...arr];
        arrToAgeSort.sort((a,b) => a.age - b.age);
        return arrToAgeSort;
    }
    console.log(ageSort(arrayOfPersons))

    function arrOfObjWithZodiac(arr){
        let arrZodiacSign = arr.reduce((accum,current) =>{
            if (current.hasOwnProperty('zodiacSign')) return [...accum, current];
            return accum;
        },[])
        return arrZodiacSign;
    }
    console.log(arrOfObjWithZodiac(arrayOfPersons))


    function arrSortedByArrOrObjProps(arr){
        let arrIsObj = arr.reduce((accum,current)=>{
            let objValues = Object.values(current);
            let isObj = objValues.find(item => {
                if(typeof(item)==='object' && item !='null') return item;
            })
            if(isObj) return [...accum, current]
            return accum;
        },[])
        let arrSortedByArr = arr.reduce((accum,current)=>{
            let objValues = Object.values(current);
            let isObj = objValues.find(item => {
                if(typeof(item)==='object' && item !='null') return item;
            })
            if(!isObj) return [...accum, current]
            return accum;
        },arrIsObj)
        return arrSortedByArr;
    }

console.log(arrSortedByArrOrObjProps(arrayOfPersons))


function objFetRandomId(arr){
    let result = arr.map(obj => {
        let{...result} = obj;
        result['id'] = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        return result;
    })
    return result;
}
console.log(objFetRandomId(arrayOfPersons))

function arrOfFictionalCharacterBuilder(arr){
    let arrOfFictionalCharacter = arr.reduce((accum,current)=>{
        if(current.isFictionalCharacter === true)return [...accum,current];
        return accum;
    },[])
    let result = arrOfFictionalCharacter.map(obj =>{
        let{...result} = obj;
        result['fictionalUniverse'] = null
        return result;
    })
    return result;
}
console.log(arrOfFictionalCharacterBuilder(arrayOfPersons))

//исходный массив без мутаций
console.log('array of persons: ',arrayOfPersons)