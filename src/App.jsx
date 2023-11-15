import React, { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import CreateContext from "../components/CreateContext";

function App() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );

  return (
    <CreateContext>
      <Header />
      <Outlet />
    </CreateContext>
  );
}

export default App;
