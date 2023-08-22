const libraryContainer = document.querySelector('#library');
const formButton = document.querySelector('#add>button');
const modal = document.querySelector('.my-modal');
const modalCancel = document.querySelector('.form-cancel');
const modalAdd = document.querySelector('.form-add');

// render cards
myLibrary.forEach((item) => {
    d = document.createElement('div');
    d.textContent = `${item['title']}`;
    d.classList.add('card');
    libraryContainer.appendChild(d);
});

function getForm() {
    modal.style.display = 'block';
}

function closeForm(e) {
    e.preventDefault();
    modal.style.display = 'none';
}

function addEntry(e) {
    console.log(e);
}

formButton.addEventListener('click', getForm);
modalCancel.addEventListener('click', closeForm);
modalAdd.addEventListener('click', addEntry);