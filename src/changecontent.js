export default function changeContent() {
  const divElements = document.querySelectorAll('.item');
  const title = document.querySelector('.title');
  const popUp = document.querySelector('.modal-container');
  const popUpBtn = document.querySelector('#Add-popup');

  divElements.forEach((div) => {
    div.addEventListener('click', (e) => {
      const span = div.querySelector('span');
      const textContent = span.textContent;

      if (e.target.textContent === 'Add New Plan') {
        title.textContent = '';
        popUpBtn.addEventListener('click', () => {
          popUp.style.display = 'block';
          const card = document.querySelectorAll('.card');
          card.forEach((c) => c.classList.add('off'));
        });
      } else {
        popUp.style.display = 'none';
        title.textContent = textContent;
        const card = document.querySelectorAll('.card');
        card.forEach((c) => c.classList.remove('off'));
      }
    });
  });
}
