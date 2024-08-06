// Create Cards
ace = 14
king = 13
queen = 12
joker = 11

const hearts = [2,3,4,5,6,7,8,9,10,joker,queen,king,ace]
const spades = [2,3,4,5,6,7,8,9,10,joker,queen,king,ace]
const diamonds = [2,3,4,5,6,7,8,9,10,joker,queen,king,ace]
const clubs = [2,3,4,5,6,7,8,9,10,joker,queen,king,ace]

//Adds cards to Deck
deck = [...hearts,...spades,...diamonds,...clubs]

console.log(deck)

function shuffleDeck(arr) { //Shuffles Deck
    arr.sort(function (a, b) {
      return Math.random() - 0.5;
    });
}
shuffleDeck(deck);
console.log(deck);

playerDeck = []
cpuDeck = []
//Splits Deck between two Players
for (let i = 0; i < 26; i++) {
    playerDeck.push(deck.pop(1))
    cpuDeck.push(deck.pop(1))
}

console.log ('cpu',cpuDeck)
console.log('pd', playerDeck)
console.log('deck',deck)

//Player Points
let playerPoints = 0
var cpuPoints = 0

//The Game
for (let i = 0; i <= 25; i++) {
    playerCurrentCard = playerDeck.slice(-1) //Plays card from both players
    cpuCurrentCard = cpuDeck.slice(-1)

    console.log("ROUND ", [i])
    console.log("Player:", playerCurrentCard, "CPU:", cpuCurrentCard) //Round Info

    if (playerCurrentCard > cpuCurrentCard) { // Player Win
        playerPoints +=1
        console.log("Player got a point!!! They now have", playerPoints, "Point/s.")
    } else if (playerCurrentCard < cpuCurrentCard) { //CPU Win
        cpuPoints +=1
        console.log("Cpu got a point!!! They now have", cpuPoints, "Point/s.")
    } else {
        console.log("Tie! No one gets a point. :(") //Tie
    }

    deck.push(playerDeck.pop(1)) //Add cards back to deck
    deck.push(cpuDeck.pop(1))
}
console.log("FINAL TALLY") //Winner Info
console.log("Player:",playerPoints,"CPU",cpuPoints)
if (cpuPoints > playerPoints) {
    console.log("CPU WINS!!!!!!!!")
} else if ((cpuPoints < playerPoints)) {
    console.log("PLAYER WINS!!!!!!!!")
} else {
    console.log("its a tie :(")
}

console.log(deck)