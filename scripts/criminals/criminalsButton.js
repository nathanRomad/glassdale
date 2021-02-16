export const ShowCriminalsButton = () => {
    const contentTarget = document.querySelector(".buttonContainer")
    contentTarget.innerHTML += "<button id='showCriminals'>Show All Criminals</button>"
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showCriminals") {
        // debugger
        const customEvent = new CustomEvent("showCriminalsClicked")
        eventHub.dispatchEvent(customEvent)
    }
})