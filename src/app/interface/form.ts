import { Option } from "../components/ToolPanel/components/Options";

export interface FormValues {
    sizeOptions: Option[];
    cleanFurnitureOptions: Option[];
    cementOptions: Option[];
    paintOptions: Option[];
    falseCeilingOptions: Option[];
    woodDoorOptions: Option[];
    baseBoardOptions: Option[];
    cleaningInstallationOptions: Option[];
    showerScreenOptions: Option[];
    electricalOptions: Option[];
    pipingOptions: Option[];
    frunitureOptions: Option[];
  }
  
  export const initialValues = {
    sizeOptions: [],
    cleanFurnitureOptions: [],
    cementOptions: [],
    paintOptions: [],
    falseCeilingOptions: [],
    woodDoorOptions: [],
    baseBoardOptions: [],
    cleaningInstallationOptions: [],
    showerScreenOptions: [],
    electricalOptions: [],
    pipingOptions: [],
    frunitureOptions: [],
  };
  