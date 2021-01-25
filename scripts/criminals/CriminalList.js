import { getCriminals, useCriminals } from './criminals/CriminalProvider.js'

export const CriminalList = () => {
    getCriminals()
      .then(() => {
        const criminalArray = useCriminals()

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