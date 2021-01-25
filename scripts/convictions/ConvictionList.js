








// REFERENCE:
// import { getConvictions, useConvictions } from "./ConvictionProvider.js"
// import { Conviction } from "./Conviction.js" //need to create

// export const ConvictionList = () => {
//     getConvictions()
//       .then(() => {
//         const convictionArray = useConvictions()

//         const filters__crime = document.querySelector(".filters")
//         let convictionsHTMLRepresentations = ""
  
//         for (const conviction of convictionArray) {
//             convictionsHTMLRepresentations += Conviction(conviction)
//         }
        
//         filters__crime.innerHTML = `
//           <h3>Criminal Convictions</h3>
//           <section class="convictionsList">
//           ${convictionsHTMLRepresentations}
//           </section>`
//       })
//   }