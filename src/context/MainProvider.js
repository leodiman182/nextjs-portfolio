import { useState } from "react";
import MainContext from "./MainContext";

export default function MainProvider({ children }) {
  const [isBugFixed, setIsBugFixed] = useState(false);

  const context = { isBugFixed, setIsBugFixed };

  return (
    <MainContext.Provider value={context}>{children}</MainContext.Provider>
  );
}
