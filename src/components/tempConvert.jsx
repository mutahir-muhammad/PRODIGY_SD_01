import React, { useState } from 'react';
import './tempConverter.css';

function TempConverter() {
  const [inputTemp, setInputTemp] = useState('');
  const [fromUnit, setFromUnit] = useState('celsius');
  const [results, setResults] = useState({
    celsius: '',
    fahrenheit: '',
    kelvin: ''
  });

  const convertTemperature = () => {
    const temp = parseFloat(inputTemp);
    if (isNaN(temp)) {
      alert('Please enter a valid number for temperature!');
      return;
    }

    switch (fromUnit) {
      case 'celsius':
        setResults({
          celsius: `${temp} °C`,
          fahrenheit: `${(temp * 9 / 5 + 32).toFixed(2)} °F`,
          kelvin: `${(temp + 273.15).toFixed(2)} K`
        });
        break;
      case 'fahrenheit':
        setResults({
          celsius: `${((temp - 32) * 5 / 9).toFixed(2)} °C`,
          fahrenheit: `${temp} °F`,
          kelvin: `${((temp - 32) * 5 / 9 + 273.15).toFixed(2)} K`
        });
        break;
      case 'kelvin':
        setResults({
          celsius: `${(temp - 273.15).toFixed(2)} °C`,
          fahrenheit: `${((temp - 273.15) * 9 / 5 + 32).toFixed(2)} °F`,
          kelvin: `${temp} K`
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="temp-converter">
      <h1>Temperature Converter</h1>
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <label>
          Temperature:
          <input
            type="text"
            value={inputTemp}
            onChange={(e) => setInputTemp(e.target.value)}
          />
        </label>
        <br />
        <label>
          From:
          <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
          </select>
        </label>
        <br />
        <button onClick={convertTemperature}>Convert</button>
      </form>
      <div className="results">
        <h2>Results</h2>
        <p>Celsius: {results.celsius}</p>
        <p>Fahrenheit: {results.fahrenheit}</p>
        <p>Kelvin: {results.kelvin}</p>
      </div>
    </div>
  );
}

export default TempConverter;
