import { useOfficers, getOfficers } from "./OfficerProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")

export const OfficerSelect = () => {
    getOfficers()
    .then(() => {
        const officers = useOfficers()
        render(officers)
    })
}

const render = (officersCollection) => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${officersCollection.map(officers =>
            `<option value="${officers.id}">${officers.name}</option>`
                ).join("")
            }
        </select> ...This dropdown is not yet functional...
    `
}


eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        console.log(changeEvent.target.value)
        const customEvent = new CustomEvent("officerChosen", {
            detail: {
                officerThatWasChosen: changeEvent.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})