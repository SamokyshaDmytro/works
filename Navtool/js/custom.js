
// accordion

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
    const button = item.querySelector('.accordion-button');

    button.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        accordionItems.forEach((accordionItem) => {
            accordionItem.classList.remove('active');
        });
        if (!isOpen) {
            item.classList.add('active');
        }
    });
});

const accordionItems2 = document.querySelectorAll('.section-11-accordion-item');

accordionItems2.forEach((item) => {
    const button2 = item.querySelector('.section-11-accordion-button');

    button2.addEventListener('click', () => {
        const isOpen2 = item.classList.contains('active');
        accordionItems2.forEach((accordionItem) => {
            accordionItem.classList.remove('active');
        });
        if (!isOpen2) {
            item.classList.add('active');
        }
    });
});


const burgerMenu = document.querySelector('.burger-menu');
const mobileMenuModal = document.getElementById('mobileMenuModal');
const closeModalButton = document.getElementById('closeModal');

burgerMenu.addEventListener('click', () => {
    mobileMenuModal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
    mobileMenuModal.style.display = 'none';
});



