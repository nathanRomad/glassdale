
//convert date into readable format
${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}


let criminals = []

export const useCriminals = () => criminals.slice()

export const getCriminals = () => {
    /*
    Load database state into application state with a fetch().
    Make sure the last then() updates the criminals array
    */
}




export const CriminalList = () => {
    getCriminals().then(
        /*
            Now that you have the data, what
            component should be rendered?
        */
    )
}