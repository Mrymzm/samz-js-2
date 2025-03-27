let symbols = ["🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍉", "🍉", "🍍", "🍍", "🍓", "🍓", "🥑", "🥑", "🍒", "🍒"];
    let flippedCards = [];
    let matchedPairs = 0;

    // Shuffle cards
    symbols.sort(() => 0.5 - Math.random());

    let gameBoard = document.getElementById("gameBoard");

    // Create cards
    symbols.forEach((symbol) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div class="card-face front">?</div>
        <div class="card-face back">${symbol}</div>
      `;
      card.addEventListener("click", () => flipCard(card));
      gameBoard.appendChild(card);
    });

    function flipCard(card) {
      if (flippedCards.length < 2 && !card.classList.contains("is-flipped")) {
        card.classList.add("is-flipped");
        flippedCards.push(card);

        if (flippedCards.length === 2) {
          checkMatch();
        }
      }
    }

    function checkMatch() {
      let [card1, card2] = flippedCards;
      if (card1.innerHTML === card2.innerHTML) {
        matchedPairs++;
        flippedCards = [];

        // Check for win
        if (matchedPairs === symbols.length / 2) {
          setTimeout(() => alert("🎉 You won!"), 500);
        }
      } else {
        setTimeout(() => {
          card1.classList.remove("is-flipped");
          card2.classList.remove("is-flipped");
          flippedCards = [];
        }, 1000);
      }
    }