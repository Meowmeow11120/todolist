export default class Card {
  constructor(title, content, duedate, important, completed) {
    this.title = title;
    this.content = content;
    this.duedate = duedate;
    this.important = important;
    this.completed = completed;
  }

  static getCardData() {
    const cardDataString = localStorage.getItem('cardData');
    if (cardDataString) {
      return JSON.parse(cardDataString);
    }
    return [];
  }

  static storeCardData(cardData) {
    const cardDataString = JSON.stringify(cardData);
    localStorage.setItem('cardData', cardDataString);
  }

  storeData() {
    const cardData = Card.getCardData();
    cardData.push(this);
    Card.storeCardData(cardData);
    return cardData;
  }
}
