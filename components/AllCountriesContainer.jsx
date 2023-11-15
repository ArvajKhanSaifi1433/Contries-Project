import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import SimmerEffect from "./SimmerEffect";

function AllCountriesContainer({ query }) {
  const [All, setAll] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((data) => {
        setAll(data);
      });
  }, []);
  return All.length === 0 ? (
    <SimmerEffect />
  ) : (
    <>
      <div className="countries-container">
        {All.filter(
          (country) =>
            country.name.common.toLowerCase().includes(query) ||
            country.region.toLowerCase().includes(query)
        ).map((data, ind) => {
          return (
            <CountryCard
              key={ind}
              name={data.name.common}
              flags={data.flags.svg}
              population={data.population}
              region={data.region}
              capital={data.capital}
              data={data}
            />
          );
        })}
      </div>
    </>
  );
}

export default AllCountriesContainer;
