import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Filter from "./components/Filter";
import Results from "./components/Results";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countrySearch, setCountrySearch] = useState("");
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const countriesToShow = showMessage
    ? 0
    : countries.filter((country) => {
        return country.name.toLowerCase().includes(countrySearch.toLowerCase());
      });

  const handleCountrySearch = (e) => {
    setCountrySearch(e.target.value);
    setShowMessage(false);
  };

  const handleButtonClick = (e) => {
    setCountrySearch(e.target.parentElement.firstChild.data);
  };

  return (
    <div>
      <h2>Countries</h2>
      <Filter filterHandler={handleCountrySearch} />
      <h2>Results</h2>
      <Results
        countriesList={countriesToShow}
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default App;
