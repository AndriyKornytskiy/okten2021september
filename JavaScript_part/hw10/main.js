// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let divHiden = document.createElement('div');
divHiden.setAttribute('id', 'text');
divHiden.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let buttonHide = document.createElement('button');
buttonHide.setAttribute('id', 'hide');
buttonHide.innerText = 'Hide';
buttonHide.style.marginTop = '10px';
document.body.append(divHiden, buttonHide);
buttonHide.onclick = () => {
    divHiden.classList.toggle('hide');
}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let buttonWrap = document.createElement("div");
document.body.append(buttonWrap);
let buttonHideSelf = document.createElement('button');
buttonHideSelf.setAttribute('id', 'hide_self');
buttonHideSelf.innerText = 'Hide me!';
let buttonShowSelf = document.createElement('button');
buttonShowSelf.setAttribute('id', 'show_self');
buttonShowSelf.innerText = 'Show me!';
buttonShowSelf.style.display = 'none';
buttonShowSelf.style.marginTop = '10px';
buttonHideSelf.style.marginTop = '10px';
buttonWrap.append(buttonHideSelf, buttonShowSelf);
buttonHideSelf.onclick = () => {
    buttonHideSelf.style.display = 'none';
    buttonShowSelf.style.display = 'flex';
}
buttonShowSelf.onclick = () => {
    buttonHideSelf.style.display = 'flex';
    buttonShowSelf.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let formElement = document.createElement('form');
formElement.style.marginTop = '5px';
let inputElement = document.createElement('input');
let inputSubmit = document.createElement('input');
inputElement.name = 'age';
inputElement.type = 'number';
inputElement.placeholder = 'enter your age';
inputSubmit.name = 'submit';
inputSubmit.type = 'submit';
formElement.append(inputElement, inputSubmit);
document.body.append(formElement);
inputSubmit.onclick = (ev) => {
    ev.preventDefault();
    let value = inputElement.value;
    if (value < 0) {
        alert('error data');
    }else if (value >= 0 && value < 18) {
        alert('Access Denied');
    }else {
        alert('Allowed Access');
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
let htmlDivElement = document.createElement('div');
htmlDivElement.style.marginTop = '10px';
htmlDivElement.style.position = 'relative';
htmlDivElement.style.height = '140px';
let buttonMenu = document.createElement('button');
buttonMenu.innerText = 'Menu';
buttonMenu.style.position = 'absolute';
buttonMenu.style.zIndex = '1';
let menuBox = document.createElement('div');
menuBox.style.width = '150px';
menuBox.style.height = '140px';
menuBox.style.paddingTop = '5px';
menuBox.style.borderRadius = '10px';
menuBox.style.boxSizing = 'border-box';
menuBox.style.backgroundColor = '#cbcdd1';
menuBox.style.position = 'absolute';
let menuList = document.createElement('ul');
menuList.style.marginTop = '25px';
for (let i = 1; i < 6; i++){
    let listItem = document.createElement('li');
    listItem.innerText = `menu item ${i}`;
    menuList.append(listItem);
}
menuBox.append(menuList);
htmlDivElement.append(buttonMenu, menuBox);
document.body.append(htmlDivElement);
buttonMenu.onclick = () => {
    menuBox.classList.toggle('hide');
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    {
        "title": "id labore ex et quam laborum",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        "title": "quo vero reiciendis velit similique earum",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
        "title": "odio adipisci rerum aut animi",
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
        "title": "alias odio sit",
        "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
        "title": "vero eaque aliquid doloribus et culpa",
        "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    },
    {
        "title": "et fugit eligendi deleniti quidem qui sint nihil autem",
        "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
    },
    {
        "title": "repellat consequatur praesentium vel minus molestias voluptatum",
        "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
    },
    {
        "title": "et omnis dolorem",
        "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
    },
    {
        "title": "provident id voluptas",
        "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
    },
    {
        "title": "eaque et deleniti atque tenetur ut quo ut",
        "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
    }
];
let commentsWrap = document.createElement('div');
document.body.append(commentsWrap);
comments.forEach(value => {
    let commentBox = document.createElement('div');
    let commentTitle = document.createElement('h3');
    let commentBody = document.createElement('p');
    let commentButton = document.createElement('button');
    commentTitle.innerText = value.title;
    commentBody.innerText = value.body;
    commentButton.innerText = 'Hide comment';
    commentButton.onclick = () => {
        commentBody.classList.toggle('hide');
    };
    commentBox.append(commentTitle, commentBody, commentButton);
    commentsWrap.append(commentBox);
})