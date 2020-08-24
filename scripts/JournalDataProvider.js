/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "08/11/2020",
        concept: "Flexbox CSS",
        entry: "We learned how to make grid layouts with Flexbox in CSS.",
        improve: "I will be practicing these concepts using Code Wars later this week",
        mood: "Good"
    },
    {
        id: 2,
        date: "08/13/2020",
        concept: "Personality Types and GitHub",
        entry: "Learned our personalities and got our feet wet with GitHub and pushing things.",
        improve: "I will try rosemary since I am told it helps with brain things. Arrggg",
        mood: "Confused"
    },
    {
        id: 3,
        date: "08/19/2020",
        concept: "Working with Objects",
        entry: "Started Martin's Aquarium and was working with objects.",
        improve: "Put together the first part of Martin's aquarium and started pulling fish info.",
        mood: "Confused"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}