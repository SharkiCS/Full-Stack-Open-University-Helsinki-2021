import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ country }) => {
    const { capital } = country

    const api_key = process.env.REACT_APP_API_KEY
    const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`

    const [weather, setWeather] = useState(
        {
            "current": {
                "temperature": "",
                "weather_icons": [""],
                "weather_descriptions": [""],
                "wind_speed": "",
                "wind_dir": "",
            }
        }
    )

    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                setWeather(response.data)
            })
    })

    return (
        <div>
            <h1>Wheather in {capital}</h1>
            <p><b>temperature: {weather.current.temperature} </b> </p>
            <p><b>wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
            <img src={weather.current.weather_icons[0]} width="150" height="150" alt={weather.current.weather_descriptions[0]} />
        </div>
    )
}

export default Weather