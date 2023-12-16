import * as util from "./util.js";
import { Player } from "./Player.js";
import { Enemy } from "./Enemy.js";
import { Card } from "./Card.js";
import { SudoCard } from "./SudoCard.js";

// This is the main game class. It contains all the game logic and is the only class that interacts with the DOM.
let myDeck = await util.draftGui(5, 3, "./cards.json");
console.log(myDeck);
let player = new Player(
    "pi",
    100,
    Number("infinity"),
    0,
    1500,
    1500,
    0,
    [0, 0],
    0,
    0,
    myDeck,
    [],
    []
)
console.log(player.deck);
function displayDeck(){
    util.banner("Your Deck");
    let parentElement = document.getElementById("main");

    for(let i = 0; i < player.deck.length; i++){
        let shorthand = player.deck[i];
        let card = util.createCardDiv(i, shorthand["name"], shorthand["manaCost"], "https://www.kindpng.com/picc/m/224-2242550_pixel-art-sword-hd-png-download.png", shorthand["description"]);
        parentElement.appendChild(card);
    }
}

displayDeck();