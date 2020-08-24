/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="currentDate">${entry.date}</div>
            <div class="currentConcept">${entry.concept}</div>
            <div class="currentEntry">Entry: ${entry.entry}</div>
            <div class="currentImprove">How to Improve: ${entry.improve}</div>
            <div class="currentMood">Mood: ${entry.mood}</div>
        </section>
    `
}