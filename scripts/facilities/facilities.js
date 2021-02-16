export const Facilities = (facilitiesObj, criminalObj) => {
    return`
    <section class="facility__card">
        <h3 class="facility__name">${facilitiesObj.facilityName}</h3>
        <div class="facility__details">
            <p class="">Security Level: ${facilitiesObj.securityLevel}</p>
            <p class="">Capacity: ${facilitiesObj.capacity}</p>
        <div>
            <h4>Criminals</h4>
                <ul>
                ${criminalObj.map(criminal => `<li>${criminal.facilityName}</li>`).join("")}
                </ul>
        </div>
        </div>
    </section>
    `
}

// need to fix my line 11.. criminals function