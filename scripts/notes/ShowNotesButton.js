const eventHub = document.querySelector(".container")

export const ShowNoteButton = () => {
    const contentTarget = document.querySelector(".noteListFieldSet")
    contentTarget.innerHTML += "<button id='showNotes'>Show Notes</button>"
}
//contentTarget has issues because of the form... the showNoteButton is not showing up!
// I want it to be noteListFieldSet which is supplied to the index.html by noteForm.js but it doesn't show up.
// I can move the button to notesFormContainer but then it renders no data when clicked.. and I need to check downstream eventListeners

eventHub.addEventListener("click", clickEvent => {
    // clickEvent.preventDefault()
    if (clickEvent.target.id === "showNotes") {
        const customEvent = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})