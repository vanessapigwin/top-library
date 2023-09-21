const myLibrary = []

function Game(title, howLong, wasPlayed, image) {
    return {title, howLong, wasPlayed, image}
}
  
function addGameToLibrary(game) {
    myLibrary.push(game);
}

const data = [
    {
      "Title": "Baba Is You",
      "time": 7,
      "wasPlayed": true,
      "img": "./assets/games/babaisyou.jpg"
    },
    {
      "Title": "Beat Saber",
      "time": "Infinite",
      "wasPlayed": true,
      "img": "./assets/games/beatsaber.jpg"
    },
    {
      "Title": "Fall Out New Vegas",
      "time": 27,
      "wasPlayed": false,
      "img": "./assets/games/falloutnv.jpg"
    },
    {
      "Title": "Firewatch",
      "time": 4,
      "wasPlayed": true,
      "img": "./assets/games/firewatch.jpg"
    },
    {
      "Title": "Garry's Mod",
      "time": "Infinite",
      "wasPlayed": false,
      "img": "./assets/games/gmod.jpg"
    },
    {
      "Title": "Untitled Goose Game",
      "time": 3,
      "wasPlayed": true,
      "img": "./assets/games/goosegame.jpg"
    },
    {
      "Title": "Night In The Woods",
      "time": 9,
      "wasPlayed": true,
      "img": "./assets/games/nightinthewoods.jpg"
    },
    {
      "Title": "Papers, Please",
      "time": 5,
      "wasPlayed": true,
      "img": "./assets/games/papersplease.jpg"
    },
    {
      "Title": "Phasmophobia",
      "time": "Infinite",
      "wasPlayed": true,
      "img": "./assets/games/phasmophobia.jpg"
    },
    {
      "Title": "Elder Scrolls: Skyrim",
      "time": 26,
      "wasPlayed": true,
      "img": "./assets/games/skyrim.jpg"
    },
    {
      "Title": "Undertale",
      "time": 7,
      "wasPlayed": true,
      "img": "./assets/games/undertale.jpg"
    },
    {
      "Title": "VRChat",
      "time": "Infinite",
      "wasPlayed": true,
      "img": "./assets/games/vrchat.jpg"
    }
]

data.forEach((entry) => {
    const game = new Game(
        entry.Title,
        entry.time,
        entry.wasPlayed,
        entry.img
    )
    addGameToLibrary(game);
})