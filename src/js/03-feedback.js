import throttle from 'lodash.throttle';

const mainForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
let formData = {};

mainForm.addEventListener('input', throttle(onFormInput, 500));
mainForm.addEventListener('submit', onFormSubmit);

populateTextarea();

function onFormInput(evt) {
formData[evt.target.name] = evt.target.value;
localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))
};

  
function onFormSubmit(evt) {
evt.preventDefault();
evt.currentTarget.reset();
localStorage.removeItem(LOCALSTORAGE_KEY);

console.log(formData)

}

function populateTextarea() {
    const saveData = localStorage.getItem(LOCALSTORAGE_KEY);

        if(saveData) {
            try {
                 formData = JSON.parse(saveData);
            } catch (error) {
            }
            Object.entries(formData).forEach(([name, value]) => { // повертає масив з 2х елементів та перебирає його
                   mainForm.elements[name].value = value;         // в поле форми вставляє значення яке збереглось     
            });
             }
   
};
