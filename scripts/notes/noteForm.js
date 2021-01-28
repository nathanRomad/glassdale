const contentTarget = document.querySelector(".notesFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <form class="notesForm" action="" method="">
            <fieldset class="notesFieldset">
                <label for="notesDate">Date of Entry</label>
                <input type="date" name="journalDate" id="notesDate">
                <label for="notesText">Note:</label>
                <textarea type="note" name="note" id="note">
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const NoteForm = () => {
    // rest of the code here
}