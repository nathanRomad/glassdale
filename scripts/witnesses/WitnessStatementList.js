import { getWitnesses, useWitnesses } from "./WitnessDataProvider"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("WitnessesClicked", event => {
    const selectedWitnessID = event.detail.witnessID
    const witnessArray = useWitnesses()
    const selectedWitness = witnessArray.find((witnessObj) => witnessObj.id === selectedWitnessID)
    AssociatesModal(selectedWitness)
})

const contentContainer = document.querySelector(".witnessContainer")

export const WitnessList = () => {
    getWitnesses()
        .then(() => {
            const witnessStatements = useWitnesses()
            renderToDom(witnessStatements)
        })
}

const renderToDom = (witnessCollection) => {
    let witnessHTMLrepresentation = ""
    for (const witness of witnessCollection) {
        witnessHTMLrepresentation += WitnessList(witness)
    }
}