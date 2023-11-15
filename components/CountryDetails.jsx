import React, { useEffect, useState } from "react";
import "./CountryDet.css";
import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";
import { useTheme } from "../Hooks/useTheme";

function CountryDetails() {
  const { county } = useParams();
  const { state } = useLocation();
  const [isDark, setIsDark] = useTheme();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(false);
  const pk = useLoaderData()
  console.log(pk);
  function setCountryData(data) {
    setCountry({
      name: data.name.common,
      flags: data.flags.svg,
      alt: data.flags.alt,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population.toLocaleString("en-In"),
      region: data.region,
      subregion: data.subregion,
      capital: data.capital?.join(","),
      tld: data.tld,
      languages: Object.values(data.languages || {}).join(","),
      borders: [],
      currencies: Object.values(data.currencies || {})
        .map((dd) => dd.name)
        .join(","),
    });
    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((name) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${name}`)
          .then((data) => data.json())
          .then(([value]) => value.name.common);
      })
    ).then((borders) => {
      setCountry((prevState) => ({ ...prevState, borders }));
    });
  }
  useEffect(() => {
    if (state) {
      setCountryData(state);
      return;
    }
    fetch(`https://restcountries.com/v3.1/name/${county}?fullText=true`)
      .then((data) => data.json())
      .then(([data]) => {
        setCountryData(data);
      })
      .catch((data) => {
        setError(true);
      });
  }, [county]);

  if (error) {
    return <h1 style={{ color: "red" }}>Page is Not Found</h1>;
  }

  return country === null ? (
    "Loading..."
  ) : (
    <>
      <main className={`${isDark ? "dark" : ""}`}>
        <div className="country-details-container">
          <span
            className="back-button"
            onClick={() => {
              history.back();
            }}
          >
            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
          </span>
          <div className="country-details">
            <img src={country.flags} alt={country.alt} />
            <div className="details-text-container">
              <h1>{country.name}</h1>
              <div className="details-text">
                <p style={{ marginTop: "10px" }}>
                  <b>Native Name: </b>
                  {country.nativeName}
                </p>
                <p>
                  <b>Population: </b>
                  {country.population}
                </p>
                <p>
                  <b>Region: </b>
                  {country.region}
                </p>
                <p>
                  <b>Sub Region: </b> {country.subregion}
                </p>
                <p>
                  <b>Capital: </b> {country.capital}
                </p>
                <p>
                  <b>Top Level Domain: </b> {country.tld}
                </p>
                <p>
                  <b>Currencies: </b> {country.currencies}
                </p>
                <p>
                  <b>Languages: </b> {country.languages}
                </p>
              </div>
              {country.borders.length !== 0 && (
                <div className="border-countries">
                  <b>Border Countries: </b>&nbsp;
                  {country.borders.map((bor) => (
                    <Link key={bor} to={`/${bor}`}>
                      {bor}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CountryDetails;
