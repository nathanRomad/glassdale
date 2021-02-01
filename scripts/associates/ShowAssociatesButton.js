import { AssociatesModal } from "../associates/AssociatesModal.js"

export const ShowAssociatesButton = (criminalObj) => {
    return `<button id="associates--${criminalObj.id}">Associate Alibis</button>`
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("click", event => {
if (event.target.id.startsWith("associates--")) {
    const [prefix, criminalID] = event.target.id.split("--") // don't fully understand this line of code...
    const customEvent = new CustomEvent("AssociatesClicked", {
        detail: {
            criminalID: parseInt(criminalID)
        }
    })
    eventHub.dispatchEvent(customEvent)
}
})
// creating a customEvent requires you to provide detail of the payload being passed. criminalID we are 

// TODO: PART 1 - Make Button - Dispatch Custom Event
// Create a ShowAssociates Button component that returns some button HTML representation = done
// Add ShowAssociates button to Criminal Card - (needs import) = done
// Use the Criminal’s ID in the ID property of the button - (component will most likely take in a criminal object or ID as an argument) = done
// Need event listener to hear the click - so you need a reference to the Event Hub = done
// AddEventListener to Event Hub that listens for that specific button click = "AssociatesClicked"
// Check event for id to match part of the string - (associates--1 or something like that) = split method seperates prefix from criminalID = done
// Dispatch Custom Event named something like "showAssociates" and pass Id of Criminal in the detail object = done