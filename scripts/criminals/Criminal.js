import { ShowAssociatesButton } from "../associates/ShowAssociatesButton.js"
import { ShowWitnessesButton } from "../witnesses/WitnessStatementButton.js"

export const Criminal = (criminal) => {
    return `<section class="criminal__card" id="${criminal.id}"
                <div class="criminal__name">${criminal.name}<div>
                <div class="criminal__age">${criminal.age}<div>
                <div class="criminal__conviction">${criminal.conviction}<div>
                <div class="criminal__termStart">${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}
                <div class="criminal__termEnd">${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}
                <div>${ShowAssociatesButton(criminal)}</div>
                <div>${ShowWitnessesButton(criminal)}</div>
                </section>`
            }