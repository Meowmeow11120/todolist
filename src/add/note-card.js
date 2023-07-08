export function addContent() {
    const container = document.querySelector('.content-container');
    container.innerHTML = ''; // Clear the container before adding new cards

    const libraryDataString = localStorage.getItem('cardData');
    const library = JSON.parse(libraryDataString) || []; // If no data exists, initialize library as an empty array

    for (const card of library) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        container.append(cardElement);

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('cardHeader');
        const cardTitle = document.createElement('span');
        cardTitle.textContent = card.title;
        const date = document.createElement('span');
        date.textContent = card.duedate;
        cardHeader.append(cardTitle, date);

        const cardContent = document.createElement('div');
        cardContent.classList.add('cardContent');
        cardContent.textContent = card.content;

        const removeBtn = document.createElement('div');
        removeBtn.classList.add('removeBtns');
        removeBtn.textContent = 'Remove';

        cardElement.append(cardHeader, cardContent, removeBtn);

        removeBtn.addEventListener('click', (e) => {
            e.target.parentNode.remove();

            // Remove element from local storage
            const cardIndex = Array.from(container.children).indexOf(e.target.parentNode);
            library.splice(cardIndex, 1);
            localStorage.setItem('cardData', JSON.stringify(library));
        });
    }
}

export function updateContentOnLocalStorageChange() {
    const container = document.querySelector('.content-container');
    let previousData = JSON.parse(localStorage.getItem('cardData')) || [];

    setInterval(() => {
        const currentData = JSON.parse(localStorage.getItem('cardData')) || [];

        if (currentData.length !== previousData.length) {
            addContent();
            previousData = currentData;
        }
    }, 1000);
}
