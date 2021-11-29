//------------------------------------------CLASS WORK------------------------------------------------
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let mainHeader = document.getElementById('main_header');
mainHeader.classList.toggle('sept-2021');

// b) робить шириниу елементу ul 400px
let elementsByTagNameUl = document.getElementsByTagName('ul');
elementsByTagNameUl[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkListArr = document.getElementsByClassName('linkList');
for (let linkListArrElement of linkListArr) {
    linkListArrElement.style.width = '50%';
}
// d) отримує текст який зберігається в елементі з класом listElement2
let innerTextListEl2 = document.getElementsByClassName('listElement2')[0].innerText;
console.log(innerTextListEl2);

// e) отримує всі елементи li та змінює ім колір фону на сірий
let liElements = document.getElementsByTagName('li');
for (let liElement of liElements) {
    liElement.style.backgroundColor = 'grey';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let elementsByTagNameA = document.getElementsByTagName('a');
for (let item of elementsByTagNameA) {
    item.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let item of elementsByTagNameA) {
    if (item.innerText === 'link3') {
        item.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let item of elementsByTagNameA) {
    item.classList.add(`element_${item.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeaders = document.getElementsByClassName('sub-header');
for (let subHeader of subHeaders) {
    subHeader.style.backgroundColor = `${prompt('enter background color')}`;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (let subHeader of subHeaders) {
    if (subHeader.innerText === 'content 2 segment') {
        subHeader.style.color = `${prompt('enter text color')}`;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
document.getElementsByClassName('content_1')[0].innerText = `${prompt('enter some text')}`;

// l) отримати елементи p та змінити їм padding на 20px
let elementsByTagNameP = document.getElementsByTagName('p');
for (const element of elementsByTagNameP) {
    element.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
document.getElementsByClassName('text2')[0].innerText = 'sep-2021';