import React, { useState } from "react"
import CountryInformation from './CountryInformation'

const Country = ({ country }) => {

    const [state, setState] = useState(false)
    const handleOnClick = () => { setState(!state) }

    if (state) {
        return (
            <>
                {country.name} <button onClick={handleOnClick}>{state ? "hide" : "show"}</button>
                <CountryInformation country={country} />
            </>
        )
    }

    return (
        <>
            {country.name} <button onClick={handleOnClick}>{state ? "hide" : "show"}</button>
        </>
    )
}

export default Country