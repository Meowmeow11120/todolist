import { format } from "date-fns";

export default function todayUpdate() {
    const today = format(new Date(), 'yyyy-MM-dd');
    const cards = document.querySelectorAll('.card');
    for (const card of cards) {
        const cardDate = card.querySelector('.date').textContent;
        if (today === cardDate) {
        } else {
            card.remove();
        }
    }
}
