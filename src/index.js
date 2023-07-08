import changeContent from "./changecontent";
import getDataFromSubmit from "./add/getDataFromSubmit";
import addContent from "../src/add/note-card";
import { updateContentOnLocalStorageChange } from "../src/add/note-card";
changeContent();
getDataFromSubmit();
updateContentOnLocalStorageChange();
