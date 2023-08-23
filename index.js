const libraryContainer = document.querySelector('#library');
const formButton = document.querySelector('#add>button');
const modal = document.querySelector('.my-modal');
const modalCancel = document.querySelector('.form-cancel');
const modalAdd = document.querySelector('.form-add');
const form = document.querySelector('#add-game-form');

function createCard(game) {
    card = document.createElement('div');
    card.classList.add('card');

    title = document.createElement('div');
    title.textContent = `Title: ${game['title']}`;

    card.appendChild(title);
    libraryContainer.appendChild(card);
}

function getForm() {
    modal.style.display = 'block';
}

function closeForm(e) {
    e.preventDefault();
    modal.style.display = 'none';
}

myLibrary.forEach((game) => createCard(game));
formButton.addEventListener('click', getForm);
modalCancel.addEventListener('click', closeForm);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    new FormData(form, modalAdd);
    closeForm(e);
});
form.addEventListener('formdata', (e) => {
    const data = Array.from(e.formData.values())
    const game = new Game(
        title = data[0],
        howLong = data[1],
        wasPlayed = (data.length > 2)? true : false
    );
    createCard(game);
});

modal.addEventListener('click', (e) => closeForm(e));