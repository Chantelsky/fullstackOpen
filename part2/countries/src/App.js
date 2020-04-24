import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [countries, setCountries] = useState([]);

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);

    fetchCountries();
  };

  const fetchCountries = async () => {
    try {
      const countries = await axios.get(
        `https://restcountries.eu/rest/v2/name/${name}?fields=name;flag`
      );
      console.log(countries);

      setCountries(countries.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        Find Countries:{' '}
        <input id='name' value={name} onChange={handleNameChange} />
      </div>
      <div>
        Countries:
        <ul>
          {countries.map((country) => {
            return <li key={country.alpha2Code}>{country.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
