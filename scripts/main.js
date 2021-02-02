import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { OfficerList } from "./officers/OfficerList.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { NoteForm } from "./notes/noteForm.js";
import { ShowNoteButton } from "./notes/ShowNotesButton.js";
import "./notes/noteList.js";
import { ShowWitnessesButton } from "./witnesses/WitnessStatementButton.js";
// import "./witnesses/WitnessStatement.js";


OfficerList()
CriminalList()
getConvictions()
ConvictionSelect()
OfficerSelect()
NoteForm()
ShowNoteButton()
ShowWitnessesButton()