'use strict'
let getHolidays = (year, month, holidays) =>{
let result = [];
let date = new Date(year, month-1)
let controlMonth = date.getMonth();
let i = 1;
    while(controlMonth < month){
        let dateResult = date.setDate(i);
        controlMonth = date.getMonth()
        i++;
        let day = date.getDay()
        if(year===date.getFullYear() && month-1 === date.getMonth()){
            if (holidays){
                for (let key in holidays){
                    if(holidays[key] === date.getDate() && day != 0 && day != 6){
                        result.push(new Date(dateResult))
                    }
                }
            }
            if(day === 0 || day === 6){
                result.push(new Date(dateResult))
            }
        }
    }
return result;
}

// console.log(getHolidays(2019, 2, [2,6,14]))
// console.log(getHolidays(2020, 2, [18,19]))
// console.log(getHolidays(2020, 3))
// console.log(getHolidays(2020, 4))
// console.log(getHolidays(2020, 5))
// console.log(getHolidays(2020, 6))
// console.log(getHolidays(2020, 7))
// console.log(getHolidays(2020, 8))
// console.log(getHolidays(2020, 9))
// console.log(getHolidays(2020, 10))
// console.log(getHolidays(2020, 11))
// console.log(getHolidays(2020, 12))

let setDisplayDate = (obj) => {
    let date = new Date();
    let displayDate = `${date.getDate()}, ${date.getMonth()}, ${date.getFullYear()}`;
    if (!Array.isArray(obj)){
        obj.displayDate = displayDate;
    } else {
        for(let key in obj){
            obj[key].displayDate = displayDate;
        }
    }
    return obj;
}

// console.log(setDisplayDate({}))
// console.log(setDisplayDate([{}, {}]))

let getTimeBeforeAnniversary = (year, month, day) =>{
    month = month - 1;
 let birthdayDate = new Date(year, month, day);
 let currDate = new Date();
 let yearsOld = (currDate - birthdayDate)/(86400000*365);
 let anniversaryYear = Math.abs(((yearsOld % 10)-10))+currDate.getFullYear();
 let anniversaryDate = new Date(anniversaryYear, month, day);
 let msBeforeAnniversary = anniversaryDate - currDate;
 let resultDays = msBeforeAnniversary/(86400000)
 if(month+1 < currDate.getMonth()){
     resultDays+=365
 }
 return `${Math.floor(resultDays/365)} years, ${Math.floor(resultDays%365)} days`
}

console.log(getTimeBeforeAnniversary(1991,5,23))
console.log(getTimeBeforeAnniversary(1987, 3, 11))