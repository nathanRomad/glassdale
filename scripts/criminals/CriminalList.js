import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"

export const CriminalList = () => {
    getCriminals()
      .then(() => {
        const criminalArray = useCriminals()

        const criminalsContainer = document.querySelector(".criminalsContainer")
        let criminalsHTMLRepresentations = ""
  
        for (const criminal of criminalArray) {
          criminalsHTMLRepresentations += Criminal(criminal)
        }
        
        criminalsContainer.innerHTML = `
          <h3>Glassdale Criminals</h3>
          <section class="criminalsList">
          ${criminalsHTMLRepresentations}
          </section>`
      })
  }