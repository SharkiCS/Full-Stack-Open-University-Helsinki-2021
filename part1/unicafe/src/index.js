import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = (props) => <h1>{props.text}</h1>

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Text = ({ text, points }) => <p>{text} {points}</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickHandleGood = () => setGood(good + 1) 
  const clickHandleNeutral = () => setNeutral(neutral + 1)
  const clickHandleBad = () => setBad(bad + 1)

  return (
    <div>
      <Title text='give feedback' />
      <Button onClick={clickHandleGood} text="Good" />
      <Button onClick={clickHandleNeutral} text="Neutral" />
      <Button onClick={clickHandleBad} text="Bad" />
      <Title text='statistics' />
      <Text text="good" points={good} />
      <Text text="neutral" points={neutral} />
      <Text text="bad" points={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)