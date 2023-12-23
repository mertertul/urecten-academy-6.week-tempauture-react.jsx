
import React, { useState } from 'react';
import '../App.css';

function App() {
  const [temperature, setTemperature] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');
  const [celsius, setCelsius] = useState('');

  const handleTemperatureChange = (e) => {
    const inputTemperature = parseFloat(e.target.value);
    setTemperature(inputTemperature);

    // Fahrenheit
    const fahrenheitValue = (inputTemperature * 9/5) + 32;
    setFahrenheit(fahrenheitValue);

    // Kelvin
    const kelvinValue = inputTemperature + 273.15;
    setKelvin(kelvinValue);

    // Celsius
    const celsiusValue = (inputTemperature - 32) * 5/9;
    setCelsius(celsiusValue);
  };

  return (
    <div className="app">
      <h1>Temperature Converter</h1>
      <label>
        Enter Temperature (Celsius):
        <input
          type="number"
          value={temperature}
          onChange={handleTemperatureChange}
        />
      </label>

      <h3>Results</h3>
      <p>Fahrenheit: {fahrenheit.toFixed(2)} °F</p>
      <p>Kelvin: {kelvin.toFixed(2)} K</p>
      <p>Celsius: {celsius.toFixed(2)} °C</p>
    </div>
  );
}

export default App;
