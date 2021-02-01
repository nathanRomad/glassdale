export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="note__date">Date: ${new Date(noteObject.date).toLocaleDateString('en-US')}</div>
            <div class="note-author">Author: ${ noteObject.author }</div>
            <div class="note-suspect">Suspect: ${ noteObject.suspect }</div>
            <div class="note-text">Note: ${ noteObject.note }</div>
        </section>
    `
}

//not sure about date reference.