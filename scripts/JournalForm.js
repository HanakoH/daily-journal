const contentTarget = document.querySelector(".formContainer")

export const JournalFormComponent = () => {
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
                <option value="null">-----</option>
                <option value="rad">Rad</option>
                <option value="excited">Excited</option>
                <option value="contemplative">Contemplative</option>
                <option value="great">Great</option>
                <option value="good">Good</option>
                <option value="meh">Meh</option>
                <option value="notOk">Not Ok</option>
                <option value="confused">Confused</option>
                <option value="completelyLost">Completely Lost</option>
            </select>
    </fieldset>
    <button type="submit">Complete Journal Entry</button>
    `
}