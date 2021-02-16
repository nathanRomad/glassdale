import { getFacilities, useFacilities } from "./FacilityProvider.js"
import { Facilities } from "./Facilities.js"
import "./FacilitiesButton.js"

const eventHub = document.querySelector(".container")
const contentContainer = document.querySelector(".witnessContainer")
const facilitiesContainer = document.querySelector(".facilityContainer")
const criminalContainer = document.querySelector(".criminalsContainer")

// Listen for the customEvent
eventHub.addEventListener("facilitiesButtonClicked", clickEvent => {
    FacilitiesList()
})

export const FacilitiesList = () => {
    facilitiesContainer.innerHTML = ""
    criminalContainer.innerHTML = ""
    getFacilities()
    .then(() => {
        const faciilitiesArray = useFacilities()
        renderFacilities(faciilitiesArray)
    })
}

const renderFacilities = (facilitiesCollection) => {
    let facilitiesHTMLrepresentations = ""
    for (const facilityObject of facilitiesCollection) {
        facilitiesHTMLrepresentations += Facilities(facilityObject)
    }
    contentContainer.innerHTML = `
        <h2>Facilities: </h2>
        ${facilitiesHTMLrepresentations}
        </section>`
    }


// Facility List
// Now it is time to do the reverse of what you did in the last chapter. You listed facilities per criminal, now you are going to list criminals per facility. 
// You will be writing code similar to what you did for the witness statement list.

// Give it your best shot. Your instruction team will let you know how long to work on this, and then they will review the code with you.

// Getting Started
// 1. Create a <div class="facility__button"></div> element in index.html.
// 2. Create a <article class="facilityContainer"></article> in index.html.
// 3. Create a DisplayFacilitiesButton that puts the button into the DOM.
// 4. Invoke that component function in main.js.
// 5. When the button is clicked, dispatch a custom event named facilitiesButtonClicked.
// 6. The criminal list should listen for that event and toggle its visibility.
// 7. Create a Facility component and a FacilityList component.
// 8. Create /styles/facilities.css file and copy/pasta the code from statements.css and change the colors.

// Listing Facilities
// Use the code that you have in CriminalList for working with many-to-many relationships. 
// Use the code in WitnessList to toggle the visibility of the list when the corresponding custom event is dispatched.
// In the Facility component, use map() to iterate the list of matching criminals that was determined in the FacilityList component.