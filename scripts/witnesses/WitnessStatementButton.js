export const ShowWitnessesButton = (witnessObj) => {
    return `<button id="witnesses--${witnessObj.id}">Witness Statements</button>`
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("click", event => {
if (event.target.id.startsWith("witnesses--")) {
    const [prefix, witnessID] = event.target.id.split("--")
    const customWitnessEvent = new CustomEvent("WitnessesClicked", {
        detail: {
            witnessID: parseInt(witnessID)
        }
    })
    eventHub.dispatchEvent(customWitnessEvent)
}
})