import { saveNote } from "./noteDataProvider.js"

const contentTarget = document.querySelector(".notesFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
            <label for="date">Date:</label>
            <input type="date" id="date">
            <label for="note-author">Author:</label>
            <input type="text" id="note-author">
            <label for="note-suspect">Suspect:</label>
            <input type="text" id="note-suspect">
            <label for="note-Text">Note:</label>
            <input type="text" id="note-text">
            <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        const date = document.querySelector("#date")
        const author =  document.getElementById("note-author").value // another way to do it
        const suspect = document.querySelector("#note-suspect").value  // one way to do it 
        const note = document.querySelector("#note-text").value
        const saveNote = document.querySelector("#saveNote")
        // Make a new object representation of a note
        const newNote = {
            "date": date,
            "author": author, 
            "suspect": suspect,
            "note": note,
            "saveNote": saveNote,
        }

        // Change API state and application state
        saveNote(newNote)
    }
})
