import { getNotes, useNotes, deleteNote } from "./noteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

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

let notes = []
let criminals = []

export const NoteList = () => {
  getNotes()
      .then(getCriminals)
      .then(() => {
        notes = useNotes()
        criminals = useCriminals()
        render(notes, criminals)
      })
  }

  const render = (notes, criminals) => {
  const allNotesConvertedToStrings = notes.map(noteObject => {
    const relatedCriminal = criminals.find(criminal => criminal.id === noteObject.id)
    return NoteHTMLConverter(noteObject, relatedCriminal)
  }).join("")
    
    contentTarget.innerHTML = `
    <section class="notesList">
    ${allNotesConvertedToStrings}
    </section>
    `
  }

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
      const [prefix, id] = clickEvent.target.id.split("--")
      /*
          Invoke the function that performs the delete operation.
          Once the operation is complete you should THEN invoke
          useNotes() and render the note list again.
      */
      deleteNote(id).then(
        () => {
          const updatedNotes = useNotes()
          const criminals = useCriminals()
          render(updatedNotes, criminals)
        }
      )
  }
})