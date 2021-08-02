import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
  return (
    <h1> {course.name} </h1>
  )
}

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map(value =>
        <Part part={value.name} exercise={value.exercises} />)}
    </>
  )
}

const Part = (props) => {
  return (
    <p>  {props.part} {props.exercise} </p>
  )
}

const Total = ({ course }) => {
  return (
    <p> Number of exercises: {course.parts.reduce((a, b) => a + b.exercises, 0)} </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))