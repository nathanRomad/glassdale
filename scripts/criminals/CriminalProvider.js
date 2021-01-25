let criminals = []

export const useCriminals = () => criminals.slice()

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                console.table(parsedCriminals)
                criminals = parsedCriminals
            }
        )
    /*
    Load database state into application state with a fetch().
    Make sure the last then() updates the criminals array
    */
}


// Here's the pattern for a fetch call.
// 1. Request the data
// 2. Convert the JSON string response to a JavaScript data structure (object or array)
// 3. Do something with the data
//.then takes a function expression when called