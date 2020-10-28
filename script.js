'use strict';

const modalWindow = document.querySelector('.modal');
const overlayBackground = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// Toggle hidden class
const classToggler = function() {
    modalWindow.classList.toggle('hidden');
    overlayBackground.classList.toggle('hidden');
}

// Add class toggler to buttons
for (let showModal of btnShowModal) {
    showModal.addEventListener('click', classToggler);
}
btnCloseModal.addEventListener('click', classToggler);
overlayBackground.addEventListener('click', classToggler);

// Add class toggler to esc key
document.addEventListener('keydown', function(event){
    if(!modalWindow.classList.contains('hidden') && event.keyCode == 27) {
        classToggler();
    }
});