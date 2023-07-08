export default function reset() {
    const displayTitle = document.querySelector('.add-title');
    const displayContent = document.querySelector('.add-content');
    const duedateDisplay = document.querySelector('.duedate-input');
    const importantBtn = document.querySelector('.important-btn');

    displayTitle.value = '';
    displayContent.value = '';
    duedateDisplay.value = '';
}
