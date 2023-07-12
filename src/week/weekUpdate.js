import { eachDayOfInterval, startOfWeek, format } from "date-fns";

export default function weekUpdate() {
    const startDate = new Date(); // Current date
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + 6); // Add 6 days to get the end date of the week

    const weekStart = startOfWeek(startDate); // Get the start date of the week
    const weekDates = eachDayOfInterval({ start: weekStart, end: endDate }); // Get all the dates in the week

    const cards = document.querySelectorAll('.card');
    for (const card of cards) {
        const cardDate = card.querySelector('.date').textContent;
        const isMatch = weekDates.some(date => format(date, 'yyyy-MM-dd') === cardDate);
        if (!isMatch) {
            // Perform logic for non-matching dates
            card.remove();
        }
    }
}
