import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => (<button onClick={onClick}>    {text}  </button>)
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [text, setText] = useState('This text will change once you click the botton')

  const handleText = () => { 
    setText('Text is changed')
  }

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const object = [
    { 
      name: "asereje",
      othername: "cacadevaca"
    }
  ]

  const a =  {...object, othername: "aaaaaaaaaaa"}
   return (

    <div>
       {a.name}
       {text}
       {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      <Button onClick={handleText} text="Change my text" />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)