export default class Card {
    static cardStorage = [];

    constructor(title, content, duedate, important) {
        this.title = title;
        this.content = content;
        this.duedate = duedate;
        this.important = important;
    }

    storeData() {
        const { title, content, duedate, important = false } = this;
        this.important = Boolean(important); // Convert to boolean
        Card.cardStorage.push(this);
        return  Card.cardStorage;
    }

}
