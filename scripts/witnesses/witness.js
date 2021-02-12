export const Witness = (witness) => {
    return `
    <p class="witness"> 
        <b>Witness Name: </b>${witness.name}<br>
        <b>Statements: </b>${witness.statements}<br>
    </p>    
    `
}