libraryContainer = document.querySelector('#library');

myLibrary.forEach((item) => {
    d = document.createElement('div');
    d.textContent = `${item['title']}`;
    d.classList.add('card');
    libraryContainer.appendChild(d);
})