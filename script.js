'use strict';

const modalWindow = document.querySelector('.modal');
const overlayBackground = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// Add event listener to argument
function addListenerToggler (btn) {
    btn.addEventListener('click', function (){
        modalWindow.classList.toggle('hidden');
        overlayBackground.classList.toggle('hidden');
    });
}

// Add class toggler to buttons
for (let showModal of btnShowModal) {
    addListenerToggler(showModal);
}
addListenerToggler(btnCloseModal);
addListenerToggler(overlayBackground);

// Add class toggler to 'esc' key
document.addEventListener('keydown', function(event){
    if(!modalWindow.classList.contains('hidden') && event.keyCode == 27) {
        classToggler();
    }
});
