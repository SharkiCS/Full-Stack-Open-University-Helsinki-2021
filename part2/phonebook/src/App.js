import React, { useState, useEffect } from 'react'

import FormPerson from './components/FormPerson'
import Filter from './components/Filter'
import Persons from './components/Persons'

import personService from './services/persons'

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
            number: newNumber,
        }

        const nameExists = persons.some(person =>
            person.name.toLowerCase() === newName.toLowerCase()
                ? true
                : false
        )


        if (nameExists) {
            if (window.confirm(`The user exists do you want to update the number?`)) {
                const person = persons.filter(p => p.name === newName).shift()
                const newObject = { ...person, number: newNumber }

                personService.update(newObject.id, newObject)
                    .then(returnedPerson => {
                        setPersons(
                            persons
                                .filter((p) => p.name !== newName)
                                .concat(returnedPerson)
                        )

                    })

                return
            }
        }

        personService
            .create(personObject)
            .then(returnedPersons => {
                setPersons(persons.concat(returnedPersons))
                setNewName('')
                setNewNumber('')
            })
    }

    const handleNameChange = (e) => setNewName(e.target.value)
    const handleNumberChange = (e) => setNewNumber(e.target.value)
    const handleFilterChange = (e) => setFilter(e.target.value)

    const filter = newFilter !== ''
        ? persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
        : persons

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    return (
        <div>
            <Title text="Phonebook" />
            <Filter value={newFilter} onChange={handleFilterChange} />

            <Title text="Add a new" />
            <FormPerson
                submit={addPerson}
                newName={newName}
                newNumber={newNumber}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
            />

            <Title text="Numbers" />
            <Persons personsArr={filter} persons={persons} setPersons={setPersons} />
        </div>
    )
}

export default App