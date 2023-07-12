export default function importantUpdate() {
    const cards = document.querySelectorAll('.card');
    for (const card of cards) {
        const isImportant = card.classList.contains('important');
        if (!isImportant) {
            card.remove();
        }
    }
}
