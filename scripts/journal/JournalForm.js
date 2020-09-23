import { saveJournalEntry } from "./JournalDataProvider.js"
import { getMoods, useMoods } from "../mood/MoodDataProvider.js"

const contentTarget = document.querySelector(".formContainer")

const eventHub = document.querySelector("body")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "submit") {
    
        const journalDateInput = document.querySelector("#journalDate")
        const conceptsCoveredInput = document.querySelector("#conceptsCovered")
        const journalEntryInput = document.querySelector("#journalEntry")
        const plansForPracticingInput = document.querySelector("#plansForPracticing")
        const moodInput = document.querySelector("#mood")
        if (journalDateInput.value !== "" && conceptsCoveredInput.value !== "" && journalEntryInput.value !== "" && plansForPracticingInput.value !== "" && moodInput.value !== "0" ) {
            const newEntry = {
                "date": journalDateInput.value,
                "concept": conceptsCoveredInput.value,
                "entry": journalEntryInput.value,
                "improve": plansForPracticingInput.value,
                "moodId": parseInt(moodInput.value)
            }
            saveJournalEntry(newEntry)
        }
    }
})

export const JournalFormComponent = (allMoods) => {
    contentTarget.innerHTML = `
    <fieldset>
        <label for="journalDate">Date of Entry</label>
        <input type="date" name="journalDate" id="journalDate">
    </fieldset>
    <fieldset>
        <label for="conceptsCovered">Concepts Covered</label>
        <textarea name="conceptsCovered" id="conceptsCovered" cols="30" rows="2"></textarea>
    </fieldset>
    <fieldset>
        <label for="journalEntry">Journal Entry</label>
        <textarea name="journalEntry" id="journalEntry" cols="30" rows="10"></textarea>
    </fieldset>
    <fieldset>
        <label for="plansForPracticing">Plans for Practicing</label>
        <textarea name="plansForPracticing" id="plansForPracticing" cols="30" rows="6"></textarea>
    </fieldset>
    <fieldset>
        <label for="mood">Mood</label>
            <select name="mood" id="mood">
                ${
                    allMoods.map((mood) => {
                            return `<option value="${mood.id}">${mood.label}</option>`
                        }
                    ).join("")
                }
            </select>
    </fieldset>
    <button id="submit" type="button">Complete Journal Entry</button>
    `
}

export const EntryForm = () => {
    getMoods()
    .then(() => {
        const allMoods = useMoods()
    JournalFormComponent(allMoods)
    })
}