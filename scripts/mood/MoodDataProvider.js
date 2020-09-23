let moods = []

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useMoods = () => {
    return moods.slice()
}

export const getMoods = () => {
    return fetch("http://localhost:8088/moods") // Fetch from the API
        .then(response => response.json())
        .then(parsedMoods => {
            // What should happen when we finally have the array?
            moods = parsedMoods
        })
}