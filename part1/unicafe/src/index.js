import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = (props) => (<h1>{props.text}</h1>)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const positive = good === 0 ? `${0} %` : `${(good * 100) / total} %`
  const average = (good - bad) / total

  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
      <div>
        <table>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="Total" value={total} />
          <Statistic text="Average" value={average} />
          <Statistic text="Positive" value={positive} />
        </table>
      </div>

    )
  }

  return <p>No feedback given</p>
}

const Statistic = ({ text, value }) =>
(
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Button = ({ onClick, text }) => (<button onClick={onClick}>{text}</button>)

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)