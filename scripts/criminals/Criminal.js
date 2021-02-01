export const Criminal = (criminal) => {
    return `<section class="criminal__card" id="${criminal.id}"
                <div class="criminal__name">${criminal.name}<div>
                <div class="criminal__age">${criminal.age}<div>
                <div class="criminal__conviction">${criminal.conviction}<div>
                <div class="criminal__termStart">${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}
                <div class="criminal__termEnd">${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}
                <button id="associates--${criminal.id}">Associate Alibis</button>
                </section>`
            }



//dispatch event.

// eventHub.addEventListener("alibiChosen", alibiChosenEvent => {
//     if ( alibi is clicked, fetch criminal data from getCriminals, use .find to get specific criminal ID,
//     use criminalID to filter for "known-associates"
//     display known-associates to DOM using render function/window.alert? )
    
// })

// eventHub.addEventListener("crimeChosen", crimeChosenEvent => {
//     if (crimeChosenEvent.detail.crimeThatWasChosen !== "0") {
//       const convictionsArray = useConvictions()
//         const chosenConvictionObject = convictionsArray.find(convictionObj => {
//         return convictionObj.id === parseInt(crimeChosenEvent.detail.crimeThatWasChosen)
//       })

//       const criminalsArray = useCriminals()
//       const filteredCriminalsArray = criminalsArray.filter(
//         criminalObj => criminalObj.conviction === chosenConvictionObject.name)

//       renderToDom(filteredCriminalsArray)
//     }
//   })