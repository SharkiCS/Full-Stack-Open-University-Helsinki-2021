import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <h1> {props.name} </h1>
const Content = (props) => <p> {props.part} {props.exercise} </p>
const Total = (props) => <p> {props.total}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const totalExercise = [exercises1, exercises2, exercises3]

  return (
    <>
      <Header name={course} />
      <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} />
      <Total total={totalExercise.reduce((a, b) => a + b)} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))