/* Modal megnyitas */
let clickButton = document.querySelector('.click');
clickButton.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    MinimalModal.show(modal);
})




/* Modal bezaras */
let modalClosers = document.querySelectorAll('.modal__close');
for (let i = 0; i < modalClosers.length; i += 1) {
    modalClosers[i].addEventListener('click', () => {
        MinimalModal.close();

    })
}

/* Modal bezaras az overlay-en valo kattintaskor */
let overlay = document.querySelectorAll('.modal__overlay');
overlay[0].addEventListener('click', () => {
    overlay.class = 'bezarAnimacio';
    MinimalModal.close();
})