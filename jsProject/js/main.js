'use strict'

let inpCreator = (id, tagName, value, labelValue, inpType, appendTo, name) =>{
    let elem = document.createElement(tagName);
    elem.value = value;
    elem.id = id;
    if(inpType){
        elem.setAttribute('type', inpType);
    }
    if(name){
        elem.name = name
    }
    let div = document.createElement('div');
    div.style.cssText = `
        margin: 10px;
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        
    `
   div.append(elem);
    if(labelValue){
        let label = document.createElement('label');
        label.htmlFor = id;
        label.innerText = labelValue;
        label.style.cssText = `
        min-width: 39%;
        max-width: 100%;
        text-align: center;
    `
        div.append(label);
    }
    appendTo.append(div)
    
};
let formWrapper = document.createElement('div');
formWrapper.classList.add('form-wrapper');
document.body.append(formWrapper);
let createForm = document.createElement('form');
createForm.id = 'createForm';
let searchForm = document.createElement('form');
searchForm.id = 'searchForm';
let productDisplay = document.createElement('div');
productDisplay.id = 'productDisplay';
formWrapper.append(createForm);
formWrapper.append(searchForm);
document.body.append(productDisplay);

createForm.classList.add('form');
searchForm.classList.add('form');
productDisplay.classList.add('products-container');

let infoFieldset = document.createElement('fieldset');
infoFieldset.innerHTML = '<legend>Main information</legend>'
let priceFieldset = document.createElement('fieldset');
priceFieldset.innerHTML = '<legend>Price segment</legend>'
let secInfoFieldset = document.createElement('fieldset');
secInfoFieldset.innerHTML = '<legend>Secondary information</legend>'
createForm.append(infoFieldset);
createForm.append(priceFieldset);
createForm.append(secInfoFieldset);
let createFormSubmit = document.createElement('button')
createFormSubmit.setAttribute('type', 'submit');
createFormSubmit.innerText = 'submit'
createFormSubmit.id = 'submitBtn'
createForm.append(createFormSubmit);

// (id, tagName, value, labelValue, inpType, appendTo)
inpCreator('createFormName', 'input', '', 'Name', 'text', infoFieldset)
inpCreator('createFormArticle', 'input', '', 'Article', 'text', infoFieldset)
inpCreator('createFormCount', 'input', '', 'Count', 'number', infoFieldset)
inpCreator('createFormPrice', 'input', '', 'Price', 'number', infoFieldset)
inpCreator('createFormDate', 'input', '', 'Creation date', 'date', infoFieldset)

let nameErr = document.createElement('div')
nameErr.classList.add('err')
nameErr.id = 'nameErr';
nameErr.innerText = 'more then 5 symbols!'
nameErr.style.visibility = 'hidden'
createFormName.parentElement.append(nameErr)
let articleErr = document.createElement('div')
articleErr.classList.add('err')
articleErr.id = 'articleErr';
articleErr.innerText = 'article must start with A-Z and contain at least two digits';
articleErr.style.visibility = 'hidden'
createFormArticle.parentElement.append(articleErr)
let countErr = document.createElement('div')
countErr.classList.add('err')
countErr.id = 'countErr';
countErr.innerText = 'count must not contain text characters, must not be fractional and must have a value less than one';
countErr.style.visibility = 'hidden'
createFormCount.parentElement.append(countErr)
let priceErr = document.createElement('div')
priceErr.classList.add('err')
priceErr.id = 'priceErr';
priceErr.innerText = 'Price must not contain text characters';
priceErr.style.visibility = 'hidden'
createFormPrice.parentElement.append(priceErr)
let dateErr = document.createElement('dateErr')
dateErr.classList.add('err')
dateErr.id = 'dateErr';
dateErr.innerText = 'Enter this value!';
dateErr.style.visibility = 'hidden'
createFormDate.parentElement.append(dateErr)


inpCreator('createFormCheap', 'input', 'cheap', 'Cheap', 'radio', priceFieldset, 'create-form__radio')
inpCreator('createFormOptimal', 'input', 'optimal', 'Optimal', 'radio', priceFieldset, 'create-form__radio')
inpCreator('createFormPremium', 'input', 'premium', 'Premium', 'radio', priceFieldset, 'create-form__radio')

inpCreator('createFormPicture', 'input', '', 'Picture', 'url', secInfoFieldset)
let createFormDescr = document.createElement('textarea');
createFormDescr.id = 'createFormDescr';
createFormDescr.classList.add('create-form__descr')
let labelForDescr = document.createElement('label');
labelForDescr.htmlFor = createFormDescr;
labelForDescr.innerText = 'Description';
let createFormDescrWrapper = document.createElement('div');
createFormDescrWrapper.classList.add('create-form__descr-wrapper');
createFormDescrWrapper.append(labelForDescr);
createFormDescrWrapper.append(createFormDescr);
secInfoFieldset.append(createFormDescrWrapper);
// inpCreator('createFormDescr', 'textarea', '', 'Description', '', secInfoFieldset)

let searchFieldset = document.createElement('fieldset');
searchFieldset.innerHTML = '<legend>Search</legend>';
let priceFilterFieldset = document.createElement('fieldset');
priceFilterFieldset.innerHTML = '<legend>Filter by price segment</legend>';
let otherFilterFieldset = document.createElement('fieldset');
otherFilterFieldset.innerHTML = '<legend>Filter</legend>';
searchForm.append(searchFieldset);
searchForm.append(priceFilterFieldset);
searchForm.append(otherFilterFieldset);

inpCreator('searchFormSearch', 'input', '', 'Ok, Google', 'text', searchFieldset)

inpCreator('searchFormCheap', 'input', '', 'Cheap', 'checkbox', priceFilterFieldset)
inpCreator('searchFormOptimal', 'input', '', 'Optimal', 'checkbox', priceFilterFieldset)
inpCreator('searchFormPremium', 'input', '', 'Premium', 'checkbox', priceFilterFieldset)

inpCreator('searchFormAlphabet', 'input', '', 'Alphabet', 'radio', otherFilterFieldset, 'search-form__radio')
inpCreator('searchFormPrice', 'input', '', 'Price', 'radio', otherFilterFieldset, 'search-form__radio')
inpCreator('searchFormCount', 'input', '', 'Count', 'radio', otherFilterFieldset, 'search-form__radio')
inpCreator('searchFormDate', 'input', '', 'Date', 'radio', otherFilterFieldset, 'search-form__radio')

let product = {
    name: 'none',
    article: 'none',
    count: null,
    price: null,
    creationDate: 'none',
    priceSegment: 'cheap',
    picture: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg',
    description: null

}
let productValidity ={
    name: false,
    article: false,
    count: false,
    price: false,
    date: false,
}

let productArr = [
    {
        name: 'byrka',
        article: 'Brk',
        count: 1,
        price: 999,
        creationDate: '1996-05-23',
        priceSegment: 'optimal',
        picture: `https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg`,
        description: 'lorem asdasda dsdafsv grftgew w3eq vr aaccvve'
    
    },
    {
        name: 'byrka',
        article: 'Brk',
        count: 1,
        price: 999,
        creationDate: '1996-05-23',
        priceSegment: 'optimal',
        picture: `https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg`,
        description: 'lorem asdasda dsdafsv grftgew'
    
    },
    {
        name: 'ayrka',
        article: 'Brk',
        count: 3,
        price: 999,
        creationDate: '1996-05-23',
        priceSegment: 'optimal',
        picture: null,
        description: 'lorem'
    
    },
    {
        name: 'nimbys2000',
        article: 'Nb2000',
        count: 3,
        price: 9999,
        creationDate: '1956-12-06',
        priceSegment: 'premium',
        picture: null,
        description: 'lorem'
    
    },
    {
        name: 'nimbys2000',
        article: 'Nb2000',
        count: 3,
        price: 9999,
        creationDate: '1956-12-06',
        priceSegment: 'premium',
        picture: 'https://i.ytimg.com/vi/9kND8PSBIYM/mqdefault.jpg',
        description: 'lorem'
    
    },
    {
        name: 'nimbys2001',
        article: 'Nb2000',
        count: 1,
        price: 99999,
        creationDate: '1956-12-06',
        priceSegment: 'premium',
        picture: 'https://legendarium.ru/upload/iblock/c6e/c6e561997867e0fbfd710fd41b59d323.jpg',
        description: 'lorem'
    
    },
    {
        name: 'Meeseeks Box',
        article: 'MB01',
        count: 110,
        price: 340,
        creationDate: '2020-05-06',
        priceSegment: 'cheap',
        picture: 'https://myrisunok.ru/wp-content/uploads/2019/01/Mr.-Meeseeks0.jpg',
        description: 'lorem'
    
    },
    {
        name: 'Meeseeks Box',
        article: 'MB01',
        count: 110,
        price: 340,
        creationDate: '2020-05-06',
        priceSegment: 'cheap',
        picture: 'https://myrisunok.ru/wp-content/uploads/2019/01/Mr.-Meeseeks0.jpg',
        description: 'lorem'
    
    },
    {
        name: 'Meeseeks Box',
        article: 'MB01',
        count: 110,
        price: 340,
        creationDate: '2020-05-06',
        priceSegment: 'cheap',
        picture: 'https://myrisunok.ru/wp-content/uploads/2019/01/Mr.-Meeseeks0.jpg',
        description: 'lorem'
    
    },
];

let err = document.createElement('div')
err.classList.add('err')

createFormName.addEventListener('change', (event) => {
    console.log(event.target.value);
    product.name = event.target.value;
    if(event.target.value.length<5){
        nameErr.style.visibility = ''
    } 
    if (event.target.value.length >= 5){
        nameErr.style.visibility = 'hidden'
        productValidity.name = true;
    }
})

createFormDate.addEventListener('change', (event) => {
    console.log(event.target.value)
    console.log(event.target.value.length)
    product.creationDate = event.target.value;
    console.log(event.target.value.length)
    if (event.target.value.length < 10){
        dateErr.style.visibility = ''
    }
    if (event.target.value.length >= 10){
        dateErr.style.visibility = 'hidden'
        productValidity.date = true;
    }
})

let isEng = function (text) {
        return /[a-z]/i.test(text)
};
createFormArticle.addEventListener('change', (event) => {
    console.log(event.target.value)
    product.article = event.target.value;
    let articleArr = event.target.value.split('')
    console.log(!isEng(articleArr[0]))

    let articleNumbers = articleArr.filter(item=> +item || +item == 0)
    console.log(articleNumbers)
    if (!isEng(articleArr[0]) || articleArr[0] != articleArr[0].toUpperCase() || articleNumbers.length < 2){
        articleErr.style.visibility = ''
    }
    if (isEng(articleArr[0]) && articleArr[0] == articleArr[0].toUpperCase() && articleNumbers.length >= 2){
        articleErr.style.visibility = 'hidden'
        productValidity.article = true;
    }
})
createFormCount.addEventListener('change', (event) => {
    console.log(!Number.isInteger(+event.target.value))
    console.log(event.target.value)
    product.count = event.target.value;

    if(!Number.isInteger(+event.target.value) || +event.target.value || event.target.value <= 0){
        countErr.style.visibility = ''
    } 
    if (Number.isInteger(+event.target.value) && +event.target.value && event.target.value >= 1){
        countErr.style.visibility = 'hidden'
        productValidity.count = true;
    }
})
createFormPrice.addEventListener('change', (event) => {
    console.log(event.target.value)
    product.price = event.target.value;
    if(!+event.target.value){
        priceErr.style.visibility = ''
    } 
    if (+event.target.value){
        priceErr.style.visibility = 'hidden'
        productValidity.price = true;
    }
})

let priceBtnCollection = document.getElementsByName('create-form__radio')
priceBtnCollection.forEach(elem => {
    elem.addEventListener('change', event =>{
       product.priceSegment = event.target.value;
       console.log(event.target.value)
    });   
})
priceBtnCollection[0].setAttribute('checked', 'true')

createFormPicture.addEventListener('change', (event) => {
    console.log(event.target.value)
    product.picture = event.target.value;
})

createFormDescr.addEventListener('change', (event) => {
    console.log(event.target.value)
    product.description = event.target.value;
})

searchFormAlphabet.setAttribute('checked', 'true');

const productRender = ((model = productArr)=>{
    model.forEach((elem, index) =>{
        let div = document.createElement('div')
        div.classList.add('product-display__product')

        div.classList.add(`product_${elem.priceSegment}`)

        let productImgWrapper = document.createElement('div');
        productImgWrapper.classList.add('product__img-wrapper');
        let imgWrapperImg = document.createElement('div');
        imgWrapperImg.classList.add('img-wrapper__img');
        imgWrapperImg.setAttribute('title', 'img not found')
        if(elem.picture){
            imgWrapperImg.style.backgroundImage = `url(${elem.picture})`
        }
        let imgWrapperEditBlock = document.createElement('div');
        imgWrapperEditBlock.classList.add('img-wrapper__edit-block');
        let editBlockBtn =document.createElement('button');
        editBlockBtn.innerText = 'Edit'
        editBlockBtn.id = 'editBlockBtn'



        let editBlockLastOne =document.createElement('div');
        editBlockLastOne.classList.add('edit-block__last-one')
        editBlockLastOne.innerText = 'LAST ONE!'
        editBlockLastOne.style.visibility = 'hidden'
        if(elem.count == 1){
            editBlockLastOne.style.visibility = ''
        };
        imgWrapperEditBlock.append(editBlockBtn)
        imgWrapperEditBlock.append(editBlockLastOne)
        productImgWrapper.append(imgWrapperImg)
        productImgWrapper.append(imgWrapperEditBlock)
        div.append(productImgWrapper);

        div.classList.add(`${elem.priceSegment}`)


        let ul = document.createElement('ul');
        let liName = document.createElement('li');
        liName.innerText = `${elem.name}`;
        let liArticle = document.createElement('li');
        liArticle.innerText = `Article: ${elem.article}`;
        let liCount = document.createElement('li');
        liCount.innerText = `Count: ${elem.count}`;
        let liPrice = document.createElement('li');
        liPrice.innerText = `Price: ${elem.price}`;
        let liCreationDate = document.createElement('li');
        console.log(elem.creationDate)
        liCreationDate.innerText = `Date: ${elem.creationDate.split('-').reverse().join('.')}`;
        console.log(elem.creationDate.split('.').reverse().join('.'))

        let descrDiv = document.createElement('textarea')
        descrDiv.innerText = `${elem.description}`
        descrDiv.classList.add('product_descr')
        descrDiv.classList.add('product_descr-visibility')

        ul.append(liName);
        ul.append(liPrice);
        ul.append(liCount);
        ul.append(liArticle);
        ul.append(liCreationDate);
        div.append(ul)

        if(elem.description){
            let liDescr = document.createElement('li')
            liDescr.innerText = 'Description:'
            liDescr.addEventListener('mouseover', (event)=>{
                liDescr.style.color = 'red'
            })
            liDescr.addEventListener('mouseout', (event)=>{
                liDescr.style.color = ''
            })
            liDescr.addEventListener('click', (event)=>{
                descrDiv.classList.toggle('product_descr-visibility')
            });
            ul.append(liDescr);
            ul.append(descrDiv);
        }

                editBlockBtn.onclick = (event) =>{
            // event.preventDefault();
        
            console.log(index)
        
            const popContainer = document.createElement('div');
            popContainer.id = 'popupContainer'
            popContainer.classList.add('edit-popup__container');
            const popup = document.createElement('div');
            popup.id = 'popup'
            popup.classList.add('edit-popup');
                    console.log(elem)

                    inpCreator('editName', 'input', elem.name, 'Name', 'text', popup)


                    inpCreator('editArticle', 'input', elem.article, 'Article', 'text', popup)
                    inpCreator('editPrice', 'input', elem.price, 'Price', 'number', popup)
                    inpCreator('editCount', 'input', elem.count, 'Count', 'number', popup)
                    inpCreator('editPicture', 'input', elem.picture, 'Picture', 'url', popup)
                    
            let btnWrapper = document.createElement('div')
            btnWrapper.classList.add('popup__btn-wrapper')
            let confirmBtn = document.createElement('button');
            confirmBtn.id = 'confirmBtn';
            confirmBtn.innerText = 'confirm changes';
            let declineBtn =  document.createElement('button');
            declineBtn.id = 'declineBtn';
            declineBtn.innerText = 'decline changes'
            let deletProductBtn = document.createElement('button');
            deletProductBtn.id = 'deletProductBtn';
            deletProductBtn.innerText = 'delet product';

            btnWrapper.append(confirmBtn)
            btnWrapper.append(declineBtn)
            btnWrapper.append(deletProductBtn)
            popup.append(btnWrapper)
            popContainer.append(popup)
            document.body.append(popContainer)
            editName.parentElement.append(nameErr)
            editArticle.parentElement.append(articleErr)
            editCount.parentElement.append(countErr)
            editPrice.parentElement.append(priceErr)
            let productEditValidity = {
                name: true,
                article: true,
                count: true,
                price: true,
            }
            let valuesToChange = {
                
            }
            editName.addEventListener('change', (event) => {
                valuesToChange.name = event.target.value;
                if(event.target.value.length<5){
                    nameErr.style.visibility = ''
                    productEditValidity.name = false;
                } 
                if (event.target.value.length >= 5){
                    nameErr.style.visibility = 'hidden'
                    productEditValidity.name = true;
                }
            })
            editArticle.addEventListener('change', (event) => {
                console.log(event.target.value)
                valuesToChange.article = event.target.value;
                let articleArr = event.target.value.split('')
                console.log(!isEng(articleArr[0]))
            
                let articleNumbers = articleArr.filter(item=> +item || +item == 0)
                if (!isEng(articleArr[0]) || articleArr[0] != articleArr[0].toUpperCase() || articleNumbers.length < 2){
                    productEditValidity.article = false;
                    articleErr.style.visibility = ''
                }
                if (isEng(articleArr[0]) && articleArr[0] == articleArr[0].toUpperCase() && articleNumbers.length >= 2){
                    articleErr.style.visibility = 'hidden'
                    productEditValidity.article = true;
                }
            })
            editCount.addEventListener('change', (event) => {
                valuesToChange.count = event.target.value;
            
                if(!Number.isInteger(+event.target.value) || +event.target.value || event.target.value <= 0){
                    countErr.style.visibility = ''
                    productEditValidity.count = false;
                } 
                if (Number.isInteger(+event.target.value) && +event.target.value && event.target.value >= 1){
                    countErr.style.visibility = 'hidden'
                    productEditValidity.count = true;
                }
            })
            editPrice.addEventListener('change', (event) => {
                valuesToChange.price = event.target.value;
                if(!+event.target.value){
                    priceErr.style.visibility = ''
                    productEditValidity.price = false;
                } 
                if (+event.target.value){
                    priceErr.style.visibility = 'hidden'
                    productEditValidity.price = true;
                }
            })
            confirmBtn.addEventListener('click', (event)=>{
                event.preventDefault();
                let editValidityArr = Object.values(productEditValidity);
                if(productEditValidity.name != true){
                    nameErr.style.visibility = ''
                    console.log('nameErr')
                }
                if(productEditValidity.article != true){
                    articleErr.style.visibility = ''
                    console.log('articleErr')
                }
                if(productEditValidity.count != true){
                    countErr.style.visibility = ''
                    console.log('countErr')
                }
                if(productEditValidity.price != true){
                    priceErr.style.visibility = ''
                    console.log('priceErr')
                }
                console.log(editValidityArr)
                if(!editValidityArr.includes(false)){
                    for(let key in valuesToChange){
                        console.log(elem.i)
                        elem[key] = valuesToChange[key]

                    }
                    productDisplay.innerHTML = '';
                    popContainer.remove()
                    productRender();
                }
            
            })
            declineBtn.addEventListener('click', (event)=>{
                popContainer.remove()
            })
            deletProductBtn.addEventListener('click', (event)=>{
                productArr.splice(index,1);
                productDisplay.innerHTML = '';
                popContainer.remove()
                productRender();
            })
        }

        productDisplay.append(div)
    })

})
productDisplay.innerHTML = '';
productRender();
submitBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    let validityArr = Object.values(productValidity);
    if(productValidity.date != true){
        dateErr.style.visibility = ''
        console.log('dateErr')
    }
    if(productValidity.name != true){
        nameErr.style.visibility = ''
        console.log('nameErr')
    }
    if(productValidity.article != true){
        articleErr.style.visibility = ''
        console.log('articleErr')
    }
    if(productValidity.count != true){
        countErr.style.visibility = ''
        console.log('countErr')
    }
    if(productValidity.price != true){
        priceErr.style.visibility = ''
        console.log('priceErr')
    }
    if(!validityArr.includes(false)){
        productArr.push(product) 
        productDisplay.innerHTML = '';
        product = {
            name: null,
            article: null,
            count: null,
            price: null,
            creationDate: null,
            priceSegment: 'cheap',
            picture: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg',
            description: null
        }
        createForm.reset()
        productRender();
    }

})
let searchCriteria = {
    substr: false,
    priceSegment: {
        cheap: false,
        optimal: false,
        premium: false,
    },
    sortedBy: 'alphabet'
}
let searchBtnsArr = [...searchForm.getElementsByTagName('input')]
console.log(searchBtnsArr)
searchBtnsArr.forEach(item =>{
    item.addEventListener('input', (event) => {
        let searchArr = productArr;
        console.log(event.target.id)
        if(event.target.id == 'searchFormSearch'){
            searchCriteria.substr = event.target.value
        }
        if(event.target.id == 'searchFormCheap'){
            if(event.target.checked){
                searchCriteria.priceSegment.cheap = true;
            }
            if(!event.target.checked){
                searchCriteria.priceSegment.cheap = false;
            }
        }
        if(event.target.id == 'searchFormOptimal'){
            if(event.target.checked){
                searchCriteria.priceSegment.optimal = true;
            }
            if(!event.target.checked){
                searchCriteria.priceSegment.optimal = false;
            }
        }
        if(event.target.id == 'searchFormPremium'){
            if(event.target.checked){
                searchCriteria.priceSegment.premium = true;
            }
            if(!event.target.checked){
                searchCriteria.priceSegment.premium = false;
            }
        }
        if(event.target.id == 'searchFormAlphabet') searchCriteria.sortedBy = 'alphabet'
        if(event.target.id == 'searchFormPrice') searchCriteria.sortedBy = 'price'
        if(event.target.id == 'searchFormCount') searchCriteria.sortedBy = 'count'
        if(event.target.id == 'searchFormDate') searchCriteria.sortedBy = 'date'

        // let searchArr = productArr;
        console.log(searchArr)
       if(searchCriteria.substr){
        searchArr = searchArr.reduce((accum,current)=>{
            if(current.name.toLocaleLowerCase().includes(searchCriteria.substr.toLocaleLowerCase())){

                return [...accum, current]
            } else{
                return accum;
            }
        },[])
       }
        console.log(searchArr)
        if (searchCriteria.priceSegment.cheap || searchCriteria.priceSegment.optimal || searchCriteria.priceSegment.premium){
            console.log('pricesort')
            console.log(searchArr)
            searchArr = searchArr.reduce((accum,current)=>{
                if(searchCriteria.priceSegment.cheap && current.priceSegment.includes('cheap')){
                    accum = [...accum, current]
                    console.log(accum)
                } 
                else if (searchCriteria.priceSegment.optimal && current.priceSegment.includes('optimal')){
                    accum = [...accum, current]
                    console.log(accum)
                }
                else if (searchCriteria.priceSegment.premium && current.priceSegment.includes('premium')){
                    accum = [...accum, current]
                    console.log(accum)
                }
                console.log(accum)
                return accum;
                
            },[])
        }
        if(searchCriteria.sortedBy){
            console.log(searchArr)
            if(searchCriteria.sortedBy == 'alphabet'){
                searchArr.sort((a,b)=>{
                    if(a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase())return -1;
                    if(a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase())return 1;
                    if(a.name.toLocaleLowerCase() === b.name.toLocaleLowerCase())return 0;
                })
            }
            if(searchCriteria.sortedBy == 'price'){
                searchArr.sort((a,b)=>{
                    return(a.price-b.price)
                })
            }
            if(searchCriteria.sortedBy == 'count'){
                searchArr.sort((a,b)=>{
                    return(a.count-b.count)
                })
            }
            if(searchCriteria.sortedBy == 'date'){
                searchArr.sort((a,b)=>{
                    let aDate = new Date(a.creationDate)
                    let bDate = new Date(b.creationDate)
                    if(aDate < bDate) return 1;
                    if(aDate > bDate) return -1;
                    if(aDate = bDate) return 0;
                })
            }
        }
    productDisplay.innerHTML = '';
    productRender(searchArr);
    })
})

// searchFormCheap.addEventListener('change', (event) => {
//     console.log(event.target.checked)
//     searchArr = productArr;
//     if(event.target.checked){
        // searchArr = searchArr.reduce((accum,current)=>{
        //     if(current.priceSegment.includes('cheap')){
        //         return [...accum, current]
        //     } else{
        //         return accum;
        //     }
        // },[])
//     }
//     productDisplay.innerHTML = '';
//     productRender(searchArr);
// })
// searchFormOptimal
// searchFormPremium