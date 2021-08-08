import React from "react";

const FormPerson = ({ submit, newName, newNumber, handleNameChange, handleNumberChange }) => {
    return (
        <form onSubmit={submit}>
            Name: <input value={newName} onChange={handleNameChange} />
            <br />
            Number: <input value={newNumber} onChange={handleNumberChange} />
            <button type="submit">add</button>
        </form>
    )
}

export default FormPerson