// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let htmlDivElement = document.createElement('div');
htmlDivElement.classList.add('wrap', 'collapse', 'alpha', 'beta');
htmlDivElement.innerText = 'hello okten';
htmlDivElement.style.backgroundColor = 'tomato';
htmlDivElement.style.color = 'green';
htmlDivElement.style.fontSize = '50px';
htmlDivElement.style.textAlign = 'center';
htmlDivElement.style.marginBottom = '5px';
document.body.appendChild(htmlDivElement);
let cloneNode = htmlDivElement.cloneNode(true);
document.body.appendChild(cloneNode);

// - Є масив:
let menu = ['Main','Products','About us','Contacts'];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let menuList = document.getElementsByClassName('menu')[0];
for (let item of menu) {
    let htmlLiElement = document.createElement('li');
    htmlLiElement.innerText = item;
    menuList.appendChild(htmlLiElement);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesBox = document.createElement('div');
coursesBox.setAttribute('id', 'wrap');
document.body.appendChild(coursesBox);

for (let item of coursesAndDurationArray) {
    let element = document.createElement('div');
    element.innerText = `${item.title} - ${item.monthDuration} month`;
    coursesBox.appendChild(element);
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let coursesWrap = document.createElement('div');
coursesWrap.setAttribute('id', 'wraper');
document.body.appendChild(coursesWrap);

for (let item of coursesAndDurationArray) {
    let divElement = document.createElement('div');
    divElement.classList.add('item');
    let h1Element = document.createElement('h1');
    h1Element.classList.add('heading');
    h1Element.innerText = `${item.title}`;
    let pElement = document.createElement('p');
    pElement.classList.add('description');
    pElement.innerText = `${item.monthDuration} month`;
    divElement.appendChild(h1Element);
    divElement.appendChild(pElement);
    coursesWrap.appendChild(divElement);
}
