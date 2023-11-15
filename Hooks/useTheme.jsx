import React, { useContext } from "react";
import { Handle } from "../components/CreateContext";

/* export const useTheme = () => {
  const [isDark, setIsDark] = useContext(Handle);
  return [isDark, setIsDark];
}; */

export const useTheme = () => {
  return useContext(Handle);
};
/* export const useTheme = () => 
   useContext(Handle);
*/
