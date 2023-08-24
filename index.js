const libraryContainer = document.querySelector('#library');
const formButton = document.querySelector('#add>button');
const modal = document.querySelector('.my-modal');
const modalCancel = document.querySelector('.form-cancel');
const modalAdd = document.querySelector('.form-add');
const form = document.querySelector('#add-game-form');

function createCard(game, idx) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardFront = document.createElement('div');
    const cardImg = document.createElement('img');
    cardFront.classList.add('card-front');
    cardImg.src = game['image'];
    cardFront.appendChild(cardImg);

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');

    const closeButton = document.createElement('button');
    const buttonIcon = document.createElement('img');
    const titleHead = document.createElement('div');
    const playTimeHead = document.createElement('div');
    const isPlayedHead = document.createElement('div');
    const title = document.createElement('div');
    const playTime = document.createElement('div');
    const checkbox = document.createElement('input');

    buttonIcon.src = './assets/delete_FILL0_wght400_GRAD0_opsz48.svg';
    buttonIcon.classList.add('card-close-button');
    closeButton.appendChild(buttonIcon);
    
    titleHead.classList.add('title');
    playTimeHead.classList.add('title');
    isPlayedHead.classList.add('title');
    closeButton.appendChild(buttonIcon);
    titleHead.textContent = 'Title';
    playTimeHead.textContent = 'Time to beat';
    isPlayedHead.textContent = 'Played';
    title.textContent = game['title'];
    playTime.textContent = `${game['howLong']} hours`;
    checkbox.type = 'checkbox';
    checkbox.checked = game['wasPlayed'];

    cardBack.appendChild(closeButton);
    cardBack.appendChild(titleHead);
    cardBack.appendChild(title);
    cardBack.appendChild(playTimeHead);
    cardBack.appendChild(playTime);
    cardBack.appendChild(isPlayedHead);
    cardBack.appendChild(checkbox);

    card.appendChild(cardFront);
    card.appendChild(cardBack);
    cardBack.classList.toggle('hidden');
    libraryContainer.appendChild(card);
    
    card.addEventListener('click', (e) => toggleCard(e, game, card, idx));
}

function toggleCard(e, game, card, idx) {
    const front = card.querySelector('.card-front');
    const back = card.querySelector('.card-back');
    if (e.target instanceof HTMLInputElement)
        game['wasPlayed'] = e.target.checked;
    else if (e.target.classList.contains('card-close-button')) {
        myLibrary.splice(idx, 1);
        card.remove();
    }
    else {
        front.classList.toggle('hidden');
        back.classList.toggle('hidden');
    }
}

function getForm() {
    modal.classList.toggle('visible');
}

function closeForm(e) {
    e.preventDefault();
    modal.classList.toggle('visible');
}

myLibrary.forEach((game) => createCard(game, myLibrary.indexOf(game)));

modalCancel.addEventListener('click', closeForm);
modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('my-modal'))
        closeForm(e);
});

formButton.addEventListener('click', getForm);
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
        wasPlayed = (data.length > 3)? true : false,
        image = URL.createObjectURL(data[2]),
    );
    addGameToLibrary(game)
    createCard(game, myLibrary.indexOf(game));
});