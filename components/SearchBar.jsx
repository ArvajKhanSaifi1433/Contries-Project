import React from "react";

function SearchBar({ setQuery }) {
  return (
    <>
      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          onChange={(e) => {
            setQuery(e.target.value.toLowerCase());
          }}
          placeholder="Search for a country..."
        />
      </div>
    </>
  );
}

export default SearchBar;
