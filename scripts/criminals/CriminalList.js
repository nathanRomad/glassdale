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

//   const eventHub = document.querySelector(".container")

// // Listen for the custom event you dispatched in ConvictionSelect
// eventHub.addEventListener('what custom event did you dispatch in ConvictionSelect?', event => {
//     // Use the property you added to the event detail.
//     if (event.detail.crimeThatWasChosen !== "0"){
//         /*
//             Filter the criminals application state down to the people that committed the crime
//         */
//         const matchingCriminals = appStateCriminals.filter()

//         /*
//             Then invoke render() and pass the filtered collection as
//             an argument
//         */
//     }
// })

// const render = criminalCollection => {
//     contentTarget.innerHTML = you_fill_this_in
// }


// // Render ALL criminals initally
// export const CriminalList = () => {
//     getCriminals()
//         .then(() => {
//             const appStateCriminals = useCriminals()
//             render(appStateCriminals)
//         })
// }