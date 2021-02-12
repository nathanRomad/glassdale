export const NoteHTMLConverter = (noteObject, relatedCriminal) => {
    return `
        <section class="note">
            <h4>Case Notes about ${relatedCriminal.name}</h4>
            <div class="note__date">Date: ${new Date(noteObject.date).toLocaleDateString('en-US')}</div>
            <div class="note-author">Author: ${ noteObject.author }</div>
            <div class="note-text">Note: ${ noteObject.note }</div>
        </section>
    `
}
//not sure about date reference.