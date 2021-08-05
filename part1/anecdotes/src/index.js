import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) =>
  <button onClick={onClick}>{text}</button>

const Title = ({ text }) => <h1>{text}</h1>

const AnecdoteMostVoted = ({ anecdotes, votes }) => {
  const arr = Object.values(votes)
  const max = Math.max(...arr)

  const index = Object.keys(votes).find(key => votes[key] === max)
  return (anecdotes[index])
}

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const object = {}
  for (let i = 0; i < anecdotes.length; i++)  object[i] = 0

  const [votes, setVote] = useState({
    ...object
  })

  const clickHandleRandom = () =>
    setSelected(Math.floor(Math.random() * (anecdotes.length - 1)))

  const clickHandleVote = () => {
    const newObject = {
      ...votes,
      [selected]: votes[selected] + 1
    }
    setVote(newObject)
  }

  return (
    <div>
      <Title text="Anecdote of the day" />
      {props.anecdotes[selected]}
      <p>has {votes[selected]} vote(s).</p>
      <Button onClick={clickHandleVote} text="Vote this anecdote" />
      <Button onClick={clickHandleRandom} text="Random anecdote" />

      <Title text="Anecdote with most votes" />
      <AnecdoteMostVoted anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)