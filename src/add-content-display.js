export default function addContent() {
    const container = document.querySelector('.content-container');
    //make a card and add it to cardcontainer
    const card = document.createElement('div');
    card.classList.add('card');
    container.append(card);


    const cardHeader = document.createElement('div');
    cardHeader.classList.add('cardHeader');
    const cardTitle = document.createElement('span');
    cardTitle.textContent = 'will fix later';
    const date = document.createElement('span');
    date.textContent = 'mm/dd/yyyy'
    cardHeader.append(cardTitle, date);

    const cardContent = document.createElement('div');
    cardContent.classList.add('cardContent');
    cardContent.textContent = 'will write something inaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

    //add remove button

    const removeBtn = document.createElement('div');
    removeBtn.classList.add('removeBtns');
    removeBtn.textContent = 'Remove'

    card.append(cardHeader, cardContent, removeBtn);

};
