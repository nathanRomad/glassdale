export const ShowWitnessButton = () => {
    const contentTarget = document.querySelector(".witnessContainer")
    contentTarget.innerHTML += "<button id='showWitnesses'>Show Witness Statements</button>"
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showWitnesses") {
        const customEvent = new CustomEvent("showWitnessStatements")
        eventHub.dispatchEvent(customEvent)
    }
})

// Place a button in the UI labeled "Witness Statements" - DONE
// 1. The name of the witness.
// 2. Their statement text.
// Which components do you need to create for this feature?
// Where is the data coming from in the API? Do you need a new provider? - DONE
// Which component is "talking" (i.e. dispatches a custom event) when a user performs an action?
// Which component would listen and react to that custom event?
// Does data need to be send along with the message?
// Which DOM element would contain the list of witness statements? Do you need a new one, or can they go in an existing one?