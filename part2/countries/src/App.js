import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'

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
      find countries: <input value={search} onChange={handleValueOnChange} />
      <Filter data={data} search={search} />
    </div>
  )
}

export default App