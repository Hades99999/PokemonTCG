
window.onload = function() {
    var pack = document.getElementById("pokemon-pack");
    pack.addEventListener("click", openPack);
}

function randomNumber(min, max) {
    return Math.ceil(Math.random() * (max-min) + min);
}

function openPack() {
    // alert("card pack open");
    let cardsOpened = document.getElementById("pokemon-cards-opened");
    while (cardsOpened.firstChild) {
        cardsOpened.firstChild.remove();
    }

    for (let i=0; i < 11; i++) {

        let cardDiv = document.createElement("div");
        cardDiv.classList.add("pokemon-card");

        let cardImg = document.createElement("img");
        cardImg.id = i;

        let num = 1;
        if (i == 10) {
            num = randomNumber(1,16);
        }
        else {
            num = randomNumber(17,102)
        }
        cardImg.src = "base set (" + num.toString() + ").jpg";

        cardDiv.appendChild(cardImg);
        document.getElementById("pokemon-cards-opened").appendChild(cardDiv);
    }
}
