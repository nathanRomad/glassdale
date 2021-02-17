export const Witness = (witnessObj) => {
    return `
        <p class="Witness">
            Witness:   ${witnessObj.name} <br>
            Statement: ${witnessObj.statements}
        </p>
    `
  }