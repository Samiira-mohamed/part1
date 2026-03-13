import { useState } from 'react'

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'Any fool can write code that a computer can understand.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0])

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>

      <h2>Anecdote of the day</h2>

      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>

      <button onClick={vote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>

    </div>
  )
}

export default App