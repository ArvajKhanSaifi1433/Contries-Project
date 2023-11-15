import React, { useState } from "react";
import { createContext } from "react";

export const TextContext = createContext();

function SetContext({ children }) {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );
  return (
    <TextContext.Provider value={[isDark, setIsDark]}>
      {children}
    </TextContext.Provider>
  );
}

export default SetContext;
