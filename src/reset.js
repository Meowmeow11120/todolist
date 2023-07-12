import { format } from "date-fns";

export default function reset() {
    const displayTitle = document.querySelector('.add-title');
    const displayContent = document.querySelector('.add-content');
    const duedateDisplay = document.querySelector('.duedate-input');
    const importantBtn = document.querySelector('.important-btn');
    const today = format(new Date(), 'yyyy-MM-dd');

    displayTitle.value = '';
    displayContent.value = '';
    duedateDisplay.textContent = today;
    importantBtn.classList.remove('clicked');
}
