import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js"
import { saveNote } from "./noteDataProvider.js"

const contentTarget = document.querySelector(".noteListContainer")
const eventHub = document.querySelector(".container")

export const NoteForm = () => {
    getCriminals()
    .then(() => {
        const criminals = useCriminals()
        render(criminals)
    })
}

const render = (criminalCollection) => {
    contentTarget.innerHTML = `
    <fieldset class="noteListFieldSet">
    <label for="date">Date:</label>
    <input type="date" id="date">
    <select id="noteForm--criminal" class="criminalSelect">
    <option value="0">Please select a criminal...</option>
    ${criminalCollection.map(criminal =>
    `<option value="${ criminal.id }">${ criminal.name }</option>`
    ).join("")
    }
    </select>
    <label for="note-author">Author:</label>
    <input type="text" id="note-author">
    <label for="note-text">Note:</label>
    <textarea type="text" id="note-text"></textarea>
    <button id="saveNote">Save Note</button>
    </fieldset>
    `
}
    
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveNote") {
            // clickEvent.preventDefault()
            // debugger
            const selectedCriminalId = document.getElementById("noteForm--criminal").value 
            const date = document.querySelector("#date").value // one way to do it 
            const author =  document.getElementById("note-author").value // another way to do it
            const note = document.querySelector("#note-text").value
            // Make a new object representation of a note
            const newNote = {
                "date": date,
                "author": author, 
                "note": note,
                "criminalId": pareseInt(selectedCriminalId)
            }
            saveNote(newNote)
            document.querySelector("#noteForm--criminal").value = ""
            document.querySelector("#date").value = ""
            document.getElementById("note-author").value = ""
            document.querySelector("#note-text").value = ""
        }
    })