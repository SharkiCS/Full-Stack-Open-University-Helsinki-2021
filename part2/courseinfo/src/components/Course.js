import React from 'react'

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Total = ({ course }) =>
    <b><p>total of exercises {course.parts.reduce((a, b) => a + b.exercises, 0)}</p></b>


const Part = (props) => {
    return (
        <p>
            {props.name} {props.exercises}
        </p>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(value => console.log(value.name))}
            {course.parts.map(value => <Part name={value.name} exercises={value.exercises} />)}
        </div>
    )
}




export default Course