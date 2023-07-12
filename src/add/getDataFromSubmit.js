import Card from "./store-note";
import addContent from "./note-card";
import reset from "../reset";


export default function getDataFromSubmit() {
  const form = document.querySelector('#form');
  const displayTitle = document.querySelector('.add-title');
  const displayContent = document.querySelector('.add-content');
  const duedateDisplay = document.querySelector('.duedate-input');
  const importantBtn = document.querySelector('.important-btn');
  const completedBtn = document.querySelector('.completed-btn');

  let isImportant = false; // Initialize the state as false
  let isCompleted = false; // Initialize the state as false

  importantBtn.addEventListener('click', () => {
    isImportant = !isImportant; // Toggle the state

    if (isImportant) {
      importantBtn.classList.add('clicked');
    } else {
      importantBtn.classList.remove('clicked');
    }
  });
  completedBtn.addEventListener('click', () => {
    isCompleted = !isCompleted; // Toggle the state

    if (isCompleted) {
      completedBtn.classList.add('clicked');
    } else {
      completedBtn.classList.remove('clicked');
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const card = new Card(
      displayTitle.value,
      displayContent.value,
      duedateDisplay.value,
      isImportant,
      isCompleted,
    );

    // Store the data and retrieve the updated library
    const library = card.storeData();

    // Store the library data in local storage
    localStorage.setItem('cardData', JSON.stringify(library));
    // Update the list when adding more items
    addContent(library); // Pass the library array as a parameter
    // Reset the form inputs
    reset();
  });
}
