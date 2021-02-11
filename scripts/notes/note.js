export const NoteHTMLConverter = (noteObject, relatedCriminal) => {
    debugger
    return `
        <section class="note">
            <h3>Case Notes about ${relatedCriminal.name}</h3>
            <div class="note__date">Date: ${new Date(noteObject.date).toLocaleDateString('en-US')}</div>
            <div class="note-author">Author: ${ noteObject.author }</div>
            <div class="note-text">Note: ${ noteObject.note }</div>
        </section>
    `
}

//not sure about date reference.