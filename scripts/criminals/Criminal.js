import { ShowAssociatesButton } from "../associates/ShowAssociatesButton.js"

// export const Criminal = (criminal) => {
//     return `<section class="criminal__card" id="${criminal.id}"
//                 <div class="criminal__name">${criminal.name}<div>
//                 <div class="criminal__age">${criminal.age}<div>
//                 <div class="criminal__arrestingOfficer">Arrested by ${criminalObject.arrestingOfficer}</div>
//                 <div class="criminal__conviction">${criminal.conviction}<div>
//                 <div class="criminal__termStart">${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}
//                 <div class="criminal__termEnd">${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}
//                 <div>${ShowAssociatesButton(criminal)}</div>
//                 </section>`
//             }


export const Criminal = (criminalObject, facilities) => {
    return `
        <div class="criminal">
            <h4>${criminalObject.name}</h4>
            <div class="criminal__details">
                <p>Convicted for ${criminalObject.conviction}</p>
                <p>Arrested by ${criminalObject.arrestingOfficer}</p>
                <p>Incarcerated between:
                    ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                    ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
                </p>
                <p>Age: ${criminalObject.age}</p>
                <div>
                    <h2>Facilities</h2>
                    <ul>
                        ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                    </ul>
                </div>
                <button id="associates--${criminalObject.id}">Show Associates</button>
            </div>
        </div>`
    }