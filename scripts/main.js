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
// import { getCriminals } from "./criminals/CriminalProvider.js";
import { ShowWitnessButton } from "../scripts/witnesses/witnessButton.js";
import "./witnesses/witnessList.js"

OfficerList()
CriminalList()
getConvictions()
ConvictionSelect()
OfficerSelect()
NoteForm()
ShowNoteButton()
// getCriminals().then(NoteForm)

getWitnesses()
ShowWitnessButton()
