const cards = ["Feu", "Eau", "Terre", "Vent", "Lumière", "Ténèbres"];
let currentPlayer = 1;

function drawHand(playerId) {
  const hand = document.getElementById(`hand${playerId}`);
  hand.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerText = cards[Math.floor(Math.random() * cards.length)];
    card.onclick = () => playCard(card, playerId);
    hand.appendChild(card);
  }
}

function playCard(card, playerId) {
  const field = document.getElementById(`field${playerId}`);
  field.appendChild(card);
  card.onclick = null;
}

function endTurn() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  drawHand(currentPlayer);
}

window.onload = () => {
  drawHand(1);
};
