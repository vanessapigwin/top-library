const myLibrary = []

function Game(title, howLong, isFinished) {
    this.title = title;
    this.howLong = howLong;
    this.isFinished = isFinished;
    this.image = image;
}
  
function addGameToLibrary(game) {
    myLibrary.push(game);
}

const game1 = new Game(
    title = 'VRChat',
    howLong = 'infinite',
    isFinished = false,
    image = 'No image'
);

const game2 = new Game(
    title = 'Beat Saber',
    howLong = 'infinite',
    isFinished = true,
    image = 'No image'
);

addGameToLibrary(game1);
addGameToLibrary(game2);

console.log('Items in library: ', myLibrary);