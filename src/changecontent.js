import addContent from "./add/note-card";
import todayUpdate from "./todayUpdayte";
import weekUpdate from "./week/weekUpdate";
import importantUpdate from "./important/ImportantUpdate";
import completeUpdate from "./completed/completeUpdate";

export default function changeContent() {
  const divElements = document.querySelectorAll('.item');
  const title = document.querySelector('.title');
  const popUp = document.querySelector('.modal-container');
  const popUpBtn = document.querySelector('#Add-popup');
  const container = document.querySelector('.content-container');
  const today = new Date();
  const todayFormat = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
  const date = document.querySelector('.duedate-input');
  date.value = todayFormat;


  divElements.forEach((div) => {
    div.addEventListener('click', (e) => {
      const span = div.querySelector('span');
      const textContent = span.textContent;
      if (e.target.parentNode.id === 'Add-popup') {
        title.textContent = '';
          popUp.style.display = 'block';
          container.classList.add('off');
      }
      else if (e.target.parentNode.id === 'today') {
        title.textContent = 'Today';
        addContent();
        todayUpdate();
      }
      else if (e.target.parentNode.id === 'week') {
        title.textContent = 'Week';
        addContent();
        weekUpdate()
      }
      else if (e.target.parentNode.id === 'important') {
        title.textContent = 'Important';
        addContent();
        importantUpdate();
      }
      else if (e.target.parentNode.id === 'complete') {
        title.textContent = 'Completed';
        addContent();
        completeUpdate()
      }
      else {
        addContent();
        popUp.style.display = 'none';
        title.textContent = textContent;
        container.classList.remove('off');
      }
    });
  });
}