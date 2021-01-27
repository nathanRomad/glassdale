import { useConvictions, getConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    getConvictions()
    .then( () => {
      const convictions = useConvictions()
      render(convictions)
    })
}

const render = (convictionsCollection) => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map(convictions =>
            `<option value="${convictions.id}">${convictions.name}</option>`
                ).join("")
            }
        </select>
    `
}

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "crimeSelect") {
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: changeEvent.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})