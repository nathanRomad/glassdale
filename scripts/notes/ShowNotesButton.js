const eventHub = document.querySelector(".container")

export const ShowNoteButton = () => {
    const contentTarget = document.querySelector(".noteListFieldSet")
    contentTarget.innerHTML += "<button id='showNotes'>Show Notes</button>"
}

eventHub.addEventListener("click", clickEvent => {
    clickEvent.preventDefault()
    if (clickEvent.target.id === "showNotes") {
        const customEvent = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})