import throttle from 'lodash.throttle';

const mainForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
const formData = {};

mainForm.addEventListener('input', throttle(onFormInput, 500));
mainForm.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
evt.preventDefault();
formData[evt.target.name] = evt.target.value;
localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))
};

  
function onFormSubmit(evt) {
    evt.preventDefault();
evt.currentTarget.reset();
localStorage.removeItem(LOCALSTORAGE_KEY);

console.log(formData)
}

populateTextarea();

function populateTextarea() {
    const saveData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    if(saveData) {
      //  console.log(saveData)
    mainForm.email.value = saveData.email || '';
    mainForm.message.value = saveData.message || '';
    }
};
