import CountryInformation from './CountryInformation'
import Country from './Country'

const Filter = ({ data, search }) => {

    if (data.length > 10 && search !== '')
        return <p>Too many matches, specify another filter.</p>

    if (data.length === 1)
        return (<CountryInformation country={data.shift()} />)

    if (data.length > 0 && data.length <= 10)
        return (
            data.map(country =>
                <div key={country.name}>
                    <Country country={country} />
                </div>
            )
        )

    return <p></p>
}

export default Filter