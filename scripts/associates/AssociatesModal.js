import { useCriminals } from "../criminals/CriminalProvider.js"


const eventHub = document.querySelector(".container")
eventHub.addEventListener("AssociatesClicked", event => {
    const selectedCriminalID = event.detail.criminalID
    const criminalsArray = useCriminals()
    const selectedCriminal = criminalsArray.find((criminal) => criminal.id === selectedCriminalID)
    AssociatesModal(selectedCriminal)
})


const contentContainer = document.querySelector(".associatesContainer")

// don't fully understand the AssociateModal function..
export const AssociatesModal = (criminalObj) => {
    const HTMLRepresentation = `
    <div id="alibi__modal" class="modal--parent">
    <div class="modal--content">
    <h3>Known associates for ${criminalObj.name}</h3>
    ${criminalObj.known_associates.map(associate => {
        return `
        <div class="associate__name">Known Associate: ${associate.name}</div>
        <div class="associate__alibi">Alibi: ${associate.alibi}</div>
        </section>`
    }).join("")}
    <button id="modal--close">Close-known-associates</button>
    </div>
    </div>
    `
    contentContainer.innerHTML = HTMLRepresentation
}

eventHub.addEventListener("click", event => {
    if (event.target.id === "modal--close") {
        closeModal()
    }
})

const closeModal = () => {
    contentContainer.innerHTML = ""
}

// TODO: PART 2 - Listen for Custom Event and Display Associates on DOM
// Which Component Needs to Listen for the "showAssociates" event? = we are listening for our customEvent "AssociatesClicked" here.
// ** New AssociatesModalComponent
// Create ModalComponent that takes in a Criminal object and returns some HTML representation of a criminal’s associates = AssociatesModal()
// Add EventListener to Event Hub that listens for "showAssociates" event = listen for specific "AssociatesClicked"
// TEST - need event listener on DOM >> Where? Button Component = button added to our crminalCard.
// Needs a place to go in the DOM - add Modal Container to index.html = added container element to nest content.
// Get the Criminal ID from the detail
// Find the criminal from the array of criminals (>> import useCriminals)
// Call the ModalComponent function and pass in the criminal as an argument and store HTML string in a variable
// Add the resulting HTML to the DOM
// ADD MODAL CSS
// Import modal.css to main.css