// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//  - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let elementByIdContent = document.getElementById('content');
console.log(elementByIdContent.innerText);

// -- отримує текст з блоку з id "rules"
let elementByIdRules = document.getElementById('rules');
console.log(elementByIdRules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
elementByIdContent.innerText = 'hello okten';

// -- замініть текст параграфа з id 'rules' на будь-який інший
elementByIdRules.innerText = 'i learn java script';

// -- змініть кожному елементу колір фону на червоний
let childrenList = document.body.children;
for (let childrenListElement of childrenList) {
    childrenListElement.style.backgroundColor = 'red';
}

// -- змініть кожному елементу колір тексту на синій
for (let childrenListElement of childrenList) {
    childrenListElement.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classList = elementByIdRules.classList;
console.log(classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let htmlCollectionOfLi = document.getElementsByClassName('fc_rules');
for (let item of htmlCollectionOfLi) {
    item.style.color = 'red';
}
