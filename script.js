'use strict';

const modalWindow = document.querySelector('.modal');
const overlayBackground = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// Add event listener to arg
function hiddenToggler (btn) {
    btn.addEventListener('click', function (){
        modalWindow.classList.toggle('hidden');
        overlayBackground.classList.toggle('hidden');
    });
}


for (let showModal of btnShowModal) {
    hiddenToggler(showModal);
}
hiddenToggler(btnCloseModal);
hiddenToggler(overlayBackground);