export const Witness = (witnessObj) => {
    // debugger
    return `
        <p class="Witness">
            Witness: ${witnessObj.name}<br>
            Statement: "${witnessObj.statements}"
        </p>
    `
  }