/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getJournalEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"
import { JournalFormComponent } from "./JournalForm.js"
import { useMoods } from "../mood/MoodDataProvider.js"

const eventHub = document.querySelector("body")

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")

eventHub.addEventListener("journalStateChanged", event => {
    EntryListComponent()
    JournalFormComponent(useMoods())
})

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getJournalEntries()
    .then(() => {
        const entries = useJournalEntries()
        let journal = "";

        for (const entry of entries) {
            journal += JournalEntryComponent(entry);
        }
            /*
                Invoke the component that returns an
                HTML representation of a single entry
            */
            entryLog.innerHTML += `${journal}`;
    })
}