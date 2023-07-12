export default function completeUpdate() {
    const cards = document.querySelectorAll('.card');
    for (const card of cards) {
        const isCompleted = card.classList.contains('completed');
        if (!isCompleted) {
            card.remove();
        }
    }
}
