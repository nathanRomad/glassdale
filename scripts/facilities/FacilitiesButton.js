// This function renders the button to the DOM.
export const DisplayFacilitiesButton = () => {
    const contentTarget = document.querySelector(".buttonContainer")
    contentTarget.innerHTML += "<button id='showFacilities'>Show Facilities</button>"
}

// Establish where to listen for events
const eventHub = document.querySelector(".container")
// dispatch customEvent called "facilitiesButtonClicked" when the 'Show Facilities' button is clicked.
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showFacilities") {
        const customEvent = new CustomEvent("facilitiesButtonClicked")
        eventHub.dispatchEvent(customEvent)
    }
})