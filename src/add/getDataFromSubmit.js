import Card from "./store-note";
import reset from "../reset";
import { container } from "webpack";
export default function getDataFromSubmit() {
  const form = document.querySelector('#form');
  const displayTitle = document.querySelector('.add-title');
  const displayContent = document.querySelector('.add-content');
  const duedateDisplay = document.querySelector('.duedate-input');
  const importantBtn = document.querySelector('.important-btn');

  let isImportant = false; // Initialize the state as false

  importantBtn.addEventListener('click', () => {
    isImportant = !isImportant; // Toggle the state

    if (isImportant) {
      importantBtn.classList.add('clicked');
    } else {
      importantBtn.classList.remove('clicked');
    }
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const container = document.querySelector('.content-container')
    container.classList.add('off');
    // Create a new Card object with form inputs and isImportant state
    const card = new Card(
      displayTitle.value,
      displayContent.value,
      duedateDisplay.value,
      isImportant
    );
    // Store the data and retrieve the updated library
    const library = card.storeData();
    // Store the library data in local storage
    localStorage.setItem('cardData', JSON.stringify(library));
    // Reset the form inputs
    reset();
  });
}
