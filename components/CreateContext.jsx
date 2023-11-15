import React, { createContext, useState } from "react";

export const Handle = createContext();

function CreateContext({ children }) {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );
  return (
    <Handle.Provider value={[isDark, setIsDark]}>{children}</Handle.Provider>
  );
}

export default CreateContext;
