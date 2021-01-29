import { getNotes, useNotes } from "./noteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";

const contentTarget = document.querySelector(".notesFormContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})
eventHub.addEventListener("noteStateChanged", event => {
  if (contentTarget.innerHTML !== "") {
    NoteList()
  }
})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map(noteObject => 
        NoteHTMLConverter(noteObject)
    ).join("")
    contentTarget.innerHTML = `
        <h3>Case Notes</h3>
        <section class="notesList">
        ${allNotesConvertedToStrings}
        </section>
`
}

export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}