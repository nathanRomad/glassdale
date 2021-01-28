import { saveNote } from "./noteDataProvider.js"

const contentTarget = document.querySelector(".notesFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
            <label for="note-suspect">Suspect:</label>
            <input type="text" id="note-suspect">
            <label for="note-author">Author:</label>
            <input type="text" id="note-author">
            <label for="note-Text">Note:</label>
            <input type="text" id="note-text">
            <label for="notesText">Note:</label>
            <input type="text" id="note-text">
            <label for="notesText">Note:</label>
            <input type="text" id="note-text">
            <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    // rest of the code here
    render()
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
// debugger
const suspect = document.querySelector("#note-suspect").value  // one way to do it 
const author =  document.getElementById("note-author").value // another way to do it
const text = document.querySelector("#note-text").value
        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            "suspect": suspect,
            "author": author, 
            "text": text,
            //need to finish the rest of the object keys.
        }

        // Change API state and application state
        saveNote(newNote)
    }
})
