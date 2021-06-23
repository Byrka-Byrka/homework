'sue strict'
const getTagsOfId = (id, tagName) =>{
    let elem = document.getElementById(id)
    if(elem){
        let result = elem.getElementsByTagName(tagName)
        return result.length
    } else {
        let result = body.getElementsByTagName(tagName)
        return result.length
    }
};

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
    ]

    let mainCont = document.createElement('div')
    mainCont.style.cssText =`
    background-color: rgba(92, 185, 189, 0.486);
    min-width: 80vw;
    max-width: 90vw;
    min-height: 20vh;
    max-height: 100vh;

    display: flex;
    flex-direction: ;
    flex-wrap: wrap;
    `;
    mainCont.id = 'mainContainer';
    document.body.append(mainCont)

    let addCharacter = (arr, charactersContainer) =>{
        arr.forEach(elem =>{
            if(!elem.name || !elem.surname){
                elem.name = 'John'
                elem.surname = 'Doe'
            }
            if(!elem.age){
                elem.age = 'age unknown'
            }
            if(!elem.nationality){
                elem.nationality = 'www.leningrad'
            }
            let div = document.createElement('div')

            div.style.cssText = `
            border: solid black 2px;
            margin: 10px;
            width: 40%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            text-align: left;
            `
            div.innerHTML = `${elem.name} ${elem.surname},<br>${elem.age}, ${elem.nationality}.`
            charactersContainer.append(div)
            for (key in elem) {
                if(Array.isArray(elem[key])){
                    let ol = document.createElement('ol');
                    ol.innerText = `${key}`
                    ol.style.fontWeight = 'bold'
                    div.append(ol);
                    elem[key].forEach(elem=>{
                        let li = document.createElement('li')
                        li.innerText = `${elem}`
                        ol.append(li)
                    })
                }
            }
        })
    }

    addCharacter(arrayOfPersons, mainContainer);

    let form = document.createElement('form');
    document.body.append(form);
    let fieldset = document.createElement('fieldset');
    fieldset.innerHTML = '<legend>Creation section</legend>'
    form.append(fieldset);
    fieldset.style.cssText = `
        display: flex;
        flex-direction: ;
        flex-wrap: wrap;
        justify-content: space-between;
    `


    let elementCreator = (id, tagName, value, labelValue, inpType) =>{
        let elem = document.createElement(tagName);
        elem.value = value;
        elem.id = id;
        if(inpType){
            elem.setAttribute('type', inpType);
        }

        let div = document.createElement('div');
        div.style.cssText = `
            margin: 10px;
            width: 45%;
            display: flex;
            flex-wrap: wrap;
            
        `
       div.append(elem);
        if(labelValue){
            let label = document.createElement('label');
            label.htmlFor = id;
            label.innerText = labelValue;
            label.style.cssText = `
            width: 39%;
        `
            div.append(label);
        }
        fieldset.append(div)
        
    };

    elementCreator('nameInp', 'input', '', 'enter your name', 'text');
    elementCreator('emailInp', 'input', '', 'email', 'email');
    elementCreator('passwordInp', 'input', '', 'password', 'password');
    elementCreator('iReadInp', 'input', '', 'I have read the user agreement', "checkbox");
    
    let textArea = document.createElement('textarea');
    textArea.setAttribute('placeholder', 'for wishes to developers');
    textArea.style.cssText =`
        height: 120px;
        width: 90%;
    `;
    fieldset.append(textArea);


    elementCreator('freeRadio', 'input', '', 'free account', 'radio');
    elementCreator('costRadio', 'input', '', '3month fo 2.99$', 'radio');
    elementCreator('submitBtn', 'button', '', '', 'submit');
    submitBtn.innerText = 'submit'