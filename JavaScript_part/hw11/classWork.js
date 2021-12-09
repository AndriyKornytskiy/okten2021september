// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з кнопкою "додати до улюблених" при натисканні на яку
// об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторінку favorites.html при переході на яку потрібно вивести в документ всіх обраних на попередньому етапі.
let divWrap = document.createElement("div");
divWrap.classList.add('wrap');
document.body.appendChild(divWrap);
for (let user of users) {
    let userElement = document.createElement('div');
    userElement.innerText = `${user.name} - ${user.age} - ${user.status}`;
    let anchor = document.createElement('a');
    anchor.href = '#';
    let heartIcon = document.createElement('img');
    heartIcon.src = 'https://flyclipart.com/thumb2/like-social-heart-button-outline-png-icon-free-download-928719.png';
    heartIcon.style.width = '15px';
    heartIcon.style.marginLeft = '10px';
    heartIcon.addEventListener('click',(ev) => {
        if (heartIcon.src === 'https://flyclipart.com/thumb2/like-social-heart-button-outline-png-icon-free-download-928719.png'){
            heartIcon.src = 'https://e7.pngegg.com/pngimages/468/835/png-clipart-computer-icons-shape-heart-shape-love-heart.png';
            if (!localStorage.getItem('favorites')){
                localStorage.setItem('favorites', '[]');
            }
            let parsedArray = JSON.parse(localStorage.getItem('favorites'));
            parsedArray.push({name: user.name, age: user.age, status: user.status});
            localStorage.setItem('favorites', JSON.stringify(parsedArray));
        }
    });
    anchor.appendChild(heartIcon);
    userElement.appendChild(anchor);
    divWrap.appendChild(userElement);
}
let favoriteButton = document.createElement('button');
favoriteButton.innerText = 'Favorite';
document.body.appendChild(favoriteButton);
favoriteButton.onclick = (ev) => {
    ev.preventDefault();
    location.href = 'http://localhost:63342/okten2021september/JavaScript_part/hw11/favorite.html?_ijt=e3tu2mc48ag0r55j5tdqc0nn22&_ij_reload=RELOAD_ON_SAVE';
}

