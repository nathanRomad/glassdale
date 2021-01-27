  import { getCriminals, useCriminals } from "./CriminalProvider.js"
  import { Criminal } from "./Criminal.js"
  import { useConvictions } from "./../convictions/ConvictionProvider.js"
  
  const eventHub = document.querySelector(".container")
  const criminalsContainer = document.querySelector(".criminalsContainer")
  
  const renderToDom = (criminalCollection) => {
    let criminalsHTMLRepresentations = ""
  
    for (const criminal of criminalCollection) {
      criminalsHTMLRepresentations += Criminal(criminal)
    }
    
    criminalsContainer.innerHTML = `
    <h3>Criminals</h3>
    <section class="criminalsList">
    ${criminalsHTMLRepresentations}
    </section>`
  }
  
  export const CriminalList = () => {
    getCriminals()
      .then(() => {
        const criminalsArray = useCriminals()
        renderToDom(criminalsArray)
      })
  }
  
  eventHub.addEventListener("crimeChosen", crimeChosenEvent => {
    if (crimeChosenEvent.detail.crimeThatWasChosen !== "0") {
      const convictionsArray = useConvictions()
        const chosenConvictionObject = convictionsArray.find(convictionObj => {
        return convictionObj.id === parseInt(crimeChosenEvent.detail.crimeThatWasChosen)
      })

      const criminalsArray = useCriminals()
      const filteredCriminalsArray = criminalsArray.filter(
        criminalObj => criminalObj.conviction === chosenConvictionObject.name)

      renderToDom(filteredCriminalsArray)
    }
  })


/// listening for officers arrest...

  eventHub.addEventListener("officerSelect", event => {
    // How can you access the officer name that was selected by the user?
    const officerName = event.???

    // How can you get the criminals that were arrested by that officer?
    const criminals = useCriminals()
    criminals.???(
        criminalObject => {
            if (criminalObject.??? === officerName) {
                return true
            }
        }
    )
})