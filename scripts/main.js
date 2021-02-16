import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { OfficerList } from "./officers/OfficerList.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { NoteForm } from "./notes/noteForm.js";
import { ShowNoteButton } from "./notes/ShowNotesButton.js";
import "./notes/noteList.js";
import "../scripts/witnesses/witnessDataProvider.js"
import { getWitnesses } from "../scripts/witnesses/witnessDataProvider.js";
import { ShowWitnessButton } from "../scripts/witnesses/witnessButton.js";
import "./witnesses/witnessList.js"
import { useCriminalFacilities } from "./facilities/CriminalFacilityProvider.js";
import { getFacilities } from "./facilities/FacilityProvider.js";
import { DisplayFacilitiesButton } from "../scripts/facilities/FacilitiesButton.js";
import { ShowCriminalsButton } from "./criminals/criminalsButton.js";
import "./facilities/FacilityList.js"

OfficerList()
CriminalList()
getConvictions()
ConvictionSelect()
OfficerSelect()
NoteForm()
getWitnesses()
useCriminalFacilities()
getFacilities()
ShowNoteButton()
ShowWitnessButton()
DisplayFacilitiesButton()
ShowCriminalsButton()

// testing:
// getCriminals().then(NoteForm)
// import { getCriminals } from "./criminals/CriminalProvider.js";
