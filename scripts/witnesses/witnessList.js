import { Witness } from "./Witness.js"
import { getWitnesses, useWitnesses } from "./WitnessDataProvider.js"
import "./witnessButton.js"

const eventHub = document.querySelector(".container")
const contentContainer = document.querySelector(".witnessContainer")
const criminalContainer = document.querySelector(".criminalsContainer")

eventHub.addEventListener("showWitnessesClicked", event => {
    WitnessList()
})

export const WitnessList = () => {
    criminalContainer.innerHTML = ""
    getWitnesses()
    .then(() => {
        const witnessesArray = useWitnesses()
        renderToDom(witnessesArray)
    })
}

const renderToDom = (witnessCollection) => {
    let witnessHTMLrepresentation = ""
    for (const witnessObj of witnessCollection) {
            witnessHTMLrepresentation += Witness(witnessObj)
        }
        contentContainer.innerHTML = `
            <h2>Witness Statements</h2>
            ${witnessHTMLrepresentation}
            </section>`
        }