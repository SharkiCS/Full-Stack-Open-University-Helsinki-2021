import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Filter = ({ data, search }) => {
  if (data.length > 10 && search !== '')
    return <p>Too many matches, specify another filter.</p>

  if (data.length === 1)
    return (<Countrie data={data} />)

  if (data.length > 0 && data.length <= 10)
    return (data.map(c => <p key={c.numericCode}>{c.name}</p>))

  return <p></p>
}

const Countrie = ({ data }) => {

  const { name, capital, population, languages, flag } = data[0]

  console.log(languages);
  return (
    <div>
      <h1>{name}</h1>
      <p>capital: {capital}</p>
      <p>population: {population}</p>

      <h1>languages</h1>

      <ul>
        {languages.map(language => <li key={language.iso639_1}>{language.name}</li>)}
      </ul>
      <img src={flag} width="150" height="150" />
    </div>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleValueOnChange = (e) => setSearch(e.target.value)

  const data = search !== ''
    ? countries.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    : countries

  return (
    <div>
      <input value={search} onChange={handleValueOnChange} />
      <Filter data={data} search={search} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
