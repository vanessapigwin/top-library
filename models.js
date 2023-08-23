const myLibrary = []

function Game(title, howLong, wasPlayed, image) {
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
    howLong = 'Infinite',
    wasPlayed = false,
    image = './assets/games/vrchat.jpg'
);

const game2 = new Game(
    title = 'Beat Saber',
    howLong = 'Infinite',
    wasPlayed = true,
    image = './assets/games/beatsaber.jpg'
);

addGameToLibrary(game1);
addGameToLibrary(game2);

console.log('Items in library: ', myLibrary);