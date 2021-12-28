function Card(value, suit) {
    this.value = value
    this.suit = suit
  }
  
  Card.prototype.toString = function() {
    return `Card { ${this.value} of ${this.suit}}`
  }
  
  function Deck() {
    this.deck = []
    const suits = ["diamonds", "clubs", "hearts", "spades"]
    suits.forEach(suit => {
      for (let i = 1; i <= 13; i++) {
        this.deck.push(new Card(i, suit))
      }
    })
  }
  