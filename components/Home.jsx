import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import AllCountriesContainer from "./AllCountriesContainer";
import { useTheme } from "../Hooks/useTheme";

function Home() {
  const [query, setQuery] = useState("");
  const [isDark, setIsDark] = useTheme();

  return (
    <>
      <main className={`${isDark ? "dark" : ""}`}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <Filter setQuery={setQuery} />
        </div>
        <AllCountriesContainer query={query} />
      </main>
    </>
  );
}

export default Home;

export const ReturnFetch = async () => {
  const value = await fetch("https://restcountries.com/v3.1/all");
  return value.json();
};
