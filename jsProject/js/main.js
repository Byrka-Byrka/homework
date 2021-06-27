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

inpCreator('createFormCheap', 'input', 'Cheap', 'Cheap', 'radio', priceFieldset, 'create-form__radio')
inpCreator('createFormOptimal', 'input', 'Optimal', 'Optimal', 'radio', priceFieldset, 'create-form__radio')
inpCreator('createFormPremium', 'input', 'Premium', 'Premium', 'radio', priceFieldset, 'create-form__radio')

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
    price: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg',
    creationDate: 'none',
    priceSegment: 'none',
    picture: 'none',
    description: 'none'

}

let productArr = [
    {
        name: 'byrka',
        article: 'Brk',
        count: 1,
        price: 999,
        creationDate: '1996.23.05',
        priceSegment: 'Premium',
        picture: `https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg`,
        description: 'lorem asdasda dsdafsv grftgew w3eq vr aaccvve'
    
    },
    {
        name: 'byrka',
        article: 'Brk',
        count: 1,
        price: 999,
        creationDate: '1996.23.05',
        priceSegment: 'Premium',
        picture: `https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg`,
        description: 'lorem asdasda dsdafsv grftgew w3eq vr aaccvve'
    
    },
    {
        name: 'byrka',
        article: 'Brk',
        count: 1,
        price: 999,
        creationDate: '1996.23.05',
        priceSegment: 'Premium',
        picture: `https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg`,
        description: 'lorem asdasda dsdafsv grftgew w3eq vr aaccvve'
    
    }
];


submitBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    // if(product.name.startsWith)
    productArr.push(product)
})

// createFormArticle
// createFormCount
// createFormPrice
// createFormDate

createFormName.addEventListener('change', (event) => {
    console.log(event.target.value);
    product.name = event.target.value;
})

createFormDate.addEventListener('change', (event) => {
    console.log(event.target.value)
    product.creationDate = event.target.value;
})

createFormArticle.addEventListener('change', (event) => {
    console.log(event.target.value)
    product.article = event.target.value;
})
createFormCount.addEventListener('change', (event) => {
    console.log(event.target.value)
    product.count = event.target.value;
})
createFormPrice.addEventListener('change', (event) => {
    console.log(event.target.value)
    product.price = event.target.value;
})

let priceBtnCollection = document.getElementsByName('create-form__radio')
priceBtnCollection.forEach(elem => {
    elem.addEventListener('change', event =>{
       product.priceSegment = event.target.value;
       console.log(event.target.value)
    });   
})

createFormPicture.addEventListener('change', (event) => {
    console.log(event.target.value)
    product.picture = event.target.value;
})

createFormDescr.addEventListener('change', (event) => {
    console.log(event.target.value)
    product.description = event.target.value;
})


const productRender = ((model = productArr)=>{
    model.forEach((elem) =>{
        let div = document.createElement('div')
        div.classList.add('product-display__product')
        if(elem.count == 1){
            
        }

        let productImgWrapper = document.createElement('div');
        productImgWrapper.classList.add('product__img-wrapper');
        let imgWrapperImg = document.createElement('div');
        imgWrapperImg.classList.add('img-wrapper__img');
        imgWrapperImg.setAttribute('placeholder', 'img not found')
        if(elem.picture){
            imgWrapperImg.style.backgroundImage = `url(${elem.picture})`
        }
        let imgWrapperEditBlock = document.createElement('div');
        imgWrapperEditBlock.classList.add('img-wrapper__edit-block');
        let editBlockBtn =document.createElement('button');
        editBlockBtn.innerText = 'Edit'
        let editBlockLastOne =document.createElement('div');
        editBlockLastOne.classList.add('edit-block__last-one')
        
        imgWrapperEditBlock.append(editBlockBtn)
        imgWrapperEditBlock.append(editBlockLastOne)
        productImgWrapper.append(imgWrapperImg)
        productImgWrapper.append(imgWrapperEditBlock)
        div.append(productImgWrapper);

        div.classList.add(`${elem.priceSegment}`)
        if(elem.description){
            let descrDiv = document.createElement('div')
        }

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
        liCreationDate.innerText = `Date: ${elem.creationDate}`;
        ul.append(liName);
        ul.append(liPrice);
        ul.append(liCount);
        ul.append(liArticle);
        ul.append(liCreationDate);
        div.append(ul)

        productDisplay.append(div)
    })

})

productRender()