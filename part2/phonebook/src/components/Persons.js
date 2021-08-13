import React from "react";

import personService from './../services/persons'

const Persons = ({ personsArr, persons, setPersons }) => {

    const handleClick = (person) => {
        if (window.confirm(`You're gonna delete the user '${person.name}' are you sure?`)) {
            personService
                .remove(person.id)
                .then(setPersons(persons.filter((p) => p.id !== person.id)))
        }
    }

    return (personsArr.map(person =>
        <div key={person.id}>
            <person key={person.id}> {person.name} : {person.number}
                <button key={person.id} onClick={() => handleClick(person)}>delete</button>
            </person>
        </div>)

    )
}
export default Persons