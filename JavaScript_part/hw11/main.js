// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let personForm = document.createElement('form');
personForm.name = 'personForm';
let nameInp = document.createElement('input');
nameInp.type = 'text';
nameInp.name = 'nameInp';
nameInp.placeholder = 'enter your name';
let ageInp = document.createElement('input');
ageInp.type = 'number';
ageInp.name = 'ageInp';
ageInp.placeholder = 'enter your age';
let btn = document.createElement('button');
btn.innerText = 'Submit';
personForm.append(nameInp, ageInp, btn);
document.body.append(personForm);
btn.onclick = (ev) => {
    ev.preventDefault();
    let name = nameInp.value;
    let age = ageInp.value;
    localStorage.setItem(localStorage.length + 1, JSON.stringify({userName: name, userAge: age}));
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let infoCar = document.createElement('form');
infoCar.name = 'infoCar';
let modelInp = document.createElement('input');
modelInp.type = 'text';
modelInp.name = 'modelInp';
modelInp.placeholder = 'enter model';
let typeInp = document.createElement('input');
typeInp.type = 'text';
typeInp.name = 'typeInp';
typeInp.placeholder = 'enter type';
let volInp = document.createElement('input');
volInp.type = 'text';
volInp.name = 'volInp';
volInp.placeholder = 'enter volume';
let buttonElement = document.createElement('button');
buttonElement.innerText = 'Save';
infoCar.append(modelInp, typeInp, volInp, buttonElement);
document.body.append(infoCar);
buttonElement.onclick = (ev) => {
    ev.preventDefault();
    let model = modelInp.value;
    let type = typeInp.value;
    let volume = volInp.value;
    if (!localStorage.getItem('cars')) {
        localStorage.setItem('cars', '[]');
    }
    let parsedCars = JSON.parse(localStorage.getItem('cars'));
    parsedCars.push({model: model, type: type, volume: volume});
    localStorage.setItem('cars', JSON.stringify(parsedCars));
}


