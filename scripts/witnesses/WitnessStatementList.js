import { Witness } from "./Witness.js"
import { getWitnesses, useWitnesses } from "./WitnessDataProvider,js"
import "./WitnessStatementButton"

const eventHub = document.querySelector(".container")
const contentContainer = document.querySelector(".witnessContainer")

eventHub.addEventListener("WitnessesClicked", event => {
    const selectedWitnessID = event.detail.witnessID
    const witnessArray = useWitnesses()
    const selectedWitness = witnessArray.find((witnessObj) => witnessObj.id === selectedWitnessID)
    renderToDom(selectedWitness)
    //broken evenListener.. why renderToDom?
})

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
        witnessHTMLrepresentation += Witness(witnessObj)
    }
    contentContainer.innerHTML = `
      <h2>Witness Statements</h2>
      ${witnessHTMLrepresentation}
      </section>`
  }
  //need to check Witness() function is correct.