/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
import { useJournalEntries, deleteJournalEntry } from "./JournalDataProvider.js"

const eventHub = document.querySelector("body")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.classList[0] === "deleteBtn") {
        const allEntries = useJournalEntries()
        const chosenEntry = allEntries.find(entry => {
            const [prefix, buttonId] = clickEvent.target.id.split("-")
            return parseInt(buttonId) === entry.id
        })
        deleteJournalEntry(chosenEntry)
    }
})

export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="currentDate">${entry.date}</div>
            <h3 class="currentConcept">${entry.concept}</h3>
            <p class="currentEntry">What I did: ${entry.entry}</p>
            <p class="currentImprove">How to Improve: ${entry.improve}</p>
            <p class="currentMood">Mood: ${entry.mood.label}</p>
            <button type="button" class="deleteBtn" id="deleteBtn-${entry.id}">Delete Entry</button>
        </section>
    `
}