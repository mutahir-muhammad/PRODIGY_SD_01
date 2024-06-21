import React, { useState } from 'react';
import './tempConverter.css';

const tempConverter = () => {
    //states to store the input temperature, from unit, to unit and the result
    const [inputTemp, setInputTemp] = useState('');
    const [fromUnit, setFromUnit] = useState('celsius');
    const [toUnit, setToUnit] = useState('fahrenheit');
    const [result, setResult] = useState('');

    const kelvinFactor = 273.15;

    //function to convert the temperatures to desired units and set the result
    const convertTemperature = () => {

        let inputTemperature = parseFloat(inputTemp);

        if (!isNaN(inputTemperature)) {
            if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
                setResult((inputTemperature * 9 / 5 + 32).toFixed(2) + ' °F');
            }
            else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
                setResult((inputTemperature + kelvinFactor).toFixed(2) + ' K');
            }
            else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
                setResult(((inputTemperature - 32) * 5 / 9).toFixed(2) + ' °C');
            }
            else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
                setResult(((inputTemperature - 32) * 5 / 9 + kelvinFactor).toFixed(2) + ' K');
            }
            else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
                setResult((inputTemperature - kelvinFactor).toFixed(2) + ' °C');
            }
            else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
                setResult(((inputTemperature - kelvinFactor) * 9 / 5 + 32).toFixed(2) + ' °F');
            }
            else {
                setResult('Invalid conversion');
            }
        }
        else {
            setResult('Enter a valid number');
        }
    };

    return (
        <div className='temp-converter'>
            <h2>Temperature Converter</h2>
            <label>
                Temperature:
                <input type="text" value={inputTemp} onChange={(e) => setInputTemp(e.target.value)} />
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
            <label>
                To:
                <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>
                </select>
            </label>
            <br />
            <button onClick={convertTemperature}>Convert</button>
            <br />
            <div className='result'>
                Result: {result}
            </div>
        </div>
    );
};

export default tempConverter;
