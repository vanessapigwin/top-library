const myLibrary = []

function Game(title, howLong, wasPlayed) {
    this.title = title;
    this.howLong = howLong;
    this.wasPlayed = wasPlayed;
    this.image = image;
}
  
function addGameToLibrary(game) {
    myLibrary.push(game);
}

const game1 = new Game(
    title = 'VRChat',
    howLong = 'infinite',
    wasPlayed = false,
    image = 'No image'
);

const game2 = new Game(
    title = 'Beat Saber',
    howLong = 'infinite',
    wasPlayed = true,
    image = 'No image'
);

addGameToLibrary(game1);
addGameToLibrary(game2);

console.log('Items in library: ', myLibrary);