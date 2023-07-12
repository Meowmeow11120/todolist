import { compareAsc } from 'date-fns';
import Card from './store-note';

export default function addContent() {
    const title = document.querySelector('#title')
    const container = document.querySelector('.content-container');
    container.innerHTML = '';

    const library = Card.getCardData();
    const sortedLibrary = library.sort((a, b) =>
        compareAsc(new Date(a.duedate), new Date(b.duedate))
    );
    for (const card of sortedLibrary) {
        const cardElement = createCardElement(card);
        const cardHeader = createCardHeader(card);
        const cardContent = createCardContent(card);
        const footer = createFooter(cardElement, card);

        cardElement.append(cardHeader, cardContent, footer);
        container.append(cardElement);
    }
}

function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    if (card.important) {
        cardElement.classList.add('important');
    }
    if (card.completed) {
        cardElement.classList.add('completed');
    }
    return cardElement;
}

function createCardHeader(card) {
    const cardHeader = document.createElement('div');
    cardHeader.classList.add('cardHeader');

    const cardTitle = document.createElement('span');
    cardTitle.classList.add('cardTitle');
    cardTitle.textContent = card.title;

    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = card.duedate;

    cardHeader.append(cardTitle, date);
    return cardHeader;
}

function createCardContent(card) {
    const cardContent = document.createElement('div');
    cardContent.classList.add('cardContent');
    cardContent.textContent = card.content;
    return cardContent;
}

function createFooter(cardElement, card) {
    const container = document.querySelector('.content-container');
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const importantBtn = createButton('Important');
    importantBtn.classList.add('importantBtn');
    importantBtn.classList.add('button');
    importantBtn.addEventListener('click', (e) => {
        // Toggle 'important' property
        card.important = !card.important;
        // Save card data to localStorage
        const cardIndex = Array.from(container.children).indexOf(cardElement);
        const updatedLibrary = Card.getCardData();
        updatedLibrary[cardIndex].important = card.important;
        Card.storeCardData(updatedLibrary);
        // Remove the cardElement if the title is 'Important'
        if (title.textContent === 'Important') {
            cardElement.remove();
        } else {
            // Toggle 'important' class on cardElement
            cardElement.classList.toggle('important');
        }
    });

    const completedBtn = createButton('Completed');
    completedBtn.classList.add('completedBtn');
    completedBtn.classList.add('button');

    completedBtn.addEventListener('click', (e) => {
        // Toggle 'completed' property
        card.completed = !card.completed;
        // Save card data to localStorage
        const cardIndex = Array.from(container.children).indexOf(cardElement);
        const updatedLibrary = Card.getCardData();
        updatedLibrary[cardIndex].completed = card.completed;
        Card.storeCardData(updatedLibrary);
        // Remove the cardElement if the title is 'Completed'
        if (title.textContent === 'Completed') {
            cardElement.remove();
        } else {
            // Toggle 'completed' class on cardElement
            cardElement.classList.toggle('completed');
        }
    });

    const removeBtn = createButton('Remove');
    removeBtn.classList.add('removeBtns');
    removeBtn.classList.add('button');

    removeBtn.addEventListener('click', (e) => {
        // Remove the cardElement from the DOM
        cardElement.remove();
        // Remove the card from the library
        const cardIndex = Array.from(container.children).indexOf(cardElement);
        const updatedLibrary = Card.getCardData();
        updatedLibrary.splice(cardIndex, 1);
        Card.storeCardData(updatedLibrary);
    });

    footer.append(importantBtn, completedBtn, removeBtn);
    return footer;
}


function createButton(text) {
    const button = document.createElement('div');
    button.textContent = text;
    return button;
}