import { saveNote } from "./noteDataProvider.js"

const contentTarget = document.querySelector(".noteListContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
        <fieldset class="noteListFieldSet">
            <label for="date">Date:</label>
            <input type="date" id="date">
            <label for="note-author">Author:</label>
            <input type="text" id="note-author">
            <label for="note-suspect">Suspect:</label>
            <input type="text" id="note-suspect">
            <label for="note-text">Note:</label>
            <textarea type="text" id="note-text"></textarea>
            <button id="saveNote">Save Note</button>
        </fieldset>
    `
}

export const NoteForm = () => {
    render()
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        // clickEvent.preventDefault()
        const suspect = document.querySelector("#note-suspect").value  // one way to do it 
        const date = document.querySelector("#date").value
        const author =  document.getElementById("note-author").value // another way to do it
        const note = document.querySelector("#note-text").value
        // Make a new object representation of a note
        const newNote = {
            "date": date,
            "author": author, 
            "suspect": suspect,
            "note": note,
        }
        saveNote(newNote)
        document.querySelector("#note-suspect").value = ""
        document.querySelector("#date").value = ""
        document.getElementById("note-author").value = ""
        document.querySelector("#note-text").value = ""
    }
})
