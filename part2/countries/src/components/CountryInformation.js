import React from "react"

const CountryInformation = ({ country }) => {
    const { name, capital, population, languages, flag } = country

    return (
        <div>
            <h1>{name}</h1>
            <p>capital: {capital}</p>
            <p>population: {population}</p>

            <h1>languages</h1>

            <ul>
                {languages.map(language => <li key={language.iso639_1}>{language.name}</li>)}
            </ul>
            <img src={flag} width="150" height="150" alt={name} />
        </div>
    )
}

export default CountryInformation