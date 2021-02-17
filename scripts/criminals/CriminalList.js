import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"
import { useConvictions } from "./../convictions/ConvictionProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js"
import { getFacilities, useFacilities } from "../facilities/FacilityProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facilities/CriminalFacilityProvider.js"
  
const eventHub = document.querySelector(".container")
const criminalsContainer = document.querySelector(".criminalsContainer")
const facilitiesContainer = document.querySelector(".facilityContainer")
const witnessContainer = document.querySelector(".witnessContainer")

eventHub.addEventListener("showCriminalsClicked", event => {
  // debugger
  CriminalList()
})

const renderToDom = (criminalsToRender, allFacilities, allRelationships) => {
  // Step 1 - Iterate all criminals
  criminalsContainer.innerHTML = criminalsToRender.map(
      (criminalObject) => {
        // Step 2 - Filter all relationships to get only ones for this criminal
        const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)
        // debugger
          // cannot read FILTER
          // Step 3 - Convert the relationships to facilities with map()
          const facilities = facilityRelationshipsForThisCriminal.map(cf => {
              const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
              return matchingFacilityObject
          })

          // Must pass the matching facilities to the Criminal component
          return Criminal(criminalObject, facilities)
      }
  ).join("")
}


export const CriminalList = () => {
  facilitiesContainer.innerHTML = ""
  witnessContainer.innerHTML = ""
  // Kick off the fetching of both collections of data
  getFacilities()
    .then(getCriminalFacilities)
    .then(getCriminals)
        .then(
          () => {
              // Pull in the data now that it has been fetched
              const facilities = useFacilities()
              const crimFac = useCriminalFacilities()
              const criminalsArray = useCriminals()
              // Pass all three collections of data to render()
              renderToDom(criminalsArray, facilities, crimFac)
          }
      )
}

eventHub.addEventListener("crimeChosen", crimeChosenEvent => {
  if (crimeChosenEvent.detail.crimeThatWasChosen !== "0") {
    const convictionsArray = useConvictions()
      const chosenConvictionObject = convictionsArray.find(convictionObj => {
      return convictionObj.id === parseInt(crimeChosenEvent.detail.crimeThatWasChosen)
    })
    const criminalFacilities = useCriminalFacilities()
    const facilities = useFacilities()
    const criminalsArray = useCriminals()
    const filteredCriminalsArray = criminalsArray.filter(
      criminalObj => criminalObj.conviction === chosenConvictionObject.name)

    renderToDom(filteredCriminalsArray, facilities, criminalFacilities)
    // debugger
  }
})

/// listening for officers arrest...
eventHub.addEventListener("officerChosen", officerChosenEvent => {
  if (officerChosenEvent.detail.officerThatWasChosen !== "0") {
    const officersArray = useOfficers()
    const criminalsArray = useCriminals()
    const chosenOfficerObject = officersArray.find(officerObj => {
      return officerObj.id === parseInt(officerChosenEvent.detail.officerThatWasChosen)
    })
    const criminalFacilities = useCriminalFacilities()
    const facilities = useFacilities()
    const filteredCriminalsArray = criminalsArray.filter(
      criminalObj => criminalObj.arrestingOfficer === chosenOfficerObject.name)
    renderToDom(filteredCriminalsArray, facilities, criminalFacilities)
  }
})