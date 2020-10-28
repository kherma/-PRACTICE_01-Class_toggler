'use strict';

const modalWindow = document.querySelector('.modal');
const overlayBackground = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

for (let showModal of btnShowModal) {
    showModal.addEventListener('click', function(){
        modalWindow.classList.remove('hidden');
        overlayBackground.classList.remove('hidden');
    });
}