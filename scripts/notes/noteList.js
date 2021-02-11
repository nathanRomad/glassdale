import { getNotes, useNotes } from "./noteDataProvider.js";
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

export const NoteList = () => {
  getNotes()
      .then(getCriminals)
      .then(() => {
        const notes = useNotes()
        const criminals = useCriminals()
        render(notes, criminals)
      })
  }

  const render = (noteArray, criminalCollection) => {
    const allNotesConvertedToStrings = noteArray.map(noteObject => {
      debugger
    const relatedCriminal = criminalCollection.find(criminal => criminal.id === noteObject.id)
    return NoteHTMLConverter(noteObject, relatedCriminal)
  }).join("")
    
    contentTarget.innerHTML = `
    <section class="notesList">
    ${allNotesConvertedToStrings}
    </section>
    `
  }