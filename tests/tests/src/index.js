import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const object = {
    name: "hey",
    street: "aaa"
  }

  return object.street
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)