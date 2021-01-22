let officers = []

export const useOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
        .then(response => response.json())
        .then(
            parsedOfficers => {
                console.table(parsedOfficers)
                officers = parsedOfficers
            }
        )
}

// Here's the pattern for a fetch call.
// 1. Request the data
// 2. Convert the JSON string response to a JavaScript data structure (object or array)
// 3. Do something with the data

fetch("https://criminals.glassdale.us/officers")
.then(response => response.json())
.then(
    parsedOfficers => {
        console.table(parsedOfficers)
        officers = parsedOfficers
    }
)

