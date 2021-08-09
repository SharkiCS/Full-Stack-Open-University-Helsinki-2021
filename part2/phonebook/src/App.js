import React, { useState, useEffect } from 'react'
import axios from 'axios'

import FormPerson from './components/FormPerson'
import Filter from './components/Filter'
import Persons from './components/Persons'

const Title = (props) => <h2>{props.text}</h2>

const App = () => {
    const [persons, setPersons] = useState([])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setFilter] = useState('')

    const addPerson = (e) => {
        e.preventDefault()

        if (newName === '' || newNumber === '') {
            alert('Fill all the fields.')
            return
        }

        const personObject = {
            name: newName,
            number: newNumber
        }

        const nameExists = persons.some(person =>
            person.name.toLowerCase() === newName.toLowerCase()
                ? true
                : false
        )

        const numberExists = persons.some(person =>
            person.number.toLowerCase() === newNumber.toLowerCase()
                ? true
                : false
        )


        if (nameExists) {
            alert(`${newName} name is already added to numberbook`)
            return
        }

        if (numberExists) {
            alert(`${newNumber} number is already added to numberbook`)
            return
        }

        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = (e) => setNewName(e.target.value)
    const handleNumberChange = (e) => setNewNumber(e.target.value)
    const handleFilterChange = (e) => setFilter(e.target.value)

    const filter = newFilter !== ''
        ? persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
        : persons

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }, [])


    return (
        <div>
            <Title text="Phonebook" />
            <Filter value={newFilter} onChange={handleFilterChange} />

            <Title text="Add a new" />
            <FormPerson
                addPerson={addPerson}
                newName={newName}
                newNumber={newNumber}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
            />

            <Title text="Numbers" />
            <Persons persons={filter} />
        </div>
    )
}

export default App