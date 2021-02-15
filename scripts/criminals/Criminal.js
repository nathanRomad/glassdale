import { ShowAssociatesButton } from "../associates/ShowAssociatesButton.js"

export const Criminal = (criminalObject, facilities) => {
    return `
        <section class="criminal__card">
            <h3 class="criminal__name">${criminalObject.name}</h3>
            <div class="criminal__details">
                <p class="criminal__conviction">Convictions: ${criminalObject.conviction}</p>
                <p class="criminal__arrestingOfficer">Arrested by: ${criminalObject.arrestingOfficer}</p>
                <p class="criminal__incarceration">Incarcerated from:
                    ${new Date(criminalObject.incarceration.start).toLocaleDateString()} to
                    ${new Date(criminalObject.incarceration.end).toLocaleDateString()}.
                </p>
                <div class="criminal__age">Age: ${criminalObject.age}</div>
                <div>
                    <h4>Facilities</h4>
                    <ul>
                        ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                    </ul>
                </div>
                <button id="associates--${criminalObject.id}">Show Associates</button>
            </div>
        </section>`
    }