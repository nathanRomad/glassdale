const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteListContainer")

export const ShowNoteButton = () => {
    contentTarget.innerHTML += "<button id='showNotes'>Show Notes</button>"
}

eventHub.addEventListener("click", clickEvent => {
    // clickEvent.preventDefault()
    if (clickEvent.target.id === "showNotes") {
        const customEvent = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})