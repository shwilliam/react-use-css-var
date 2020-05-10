import React, {useState} from 'react'
import {useCssVar} from './react-use-css-var'

export const App = () => {
  const [get, set] = useCssVar('--color-bg')
  const [input, setInput] = useState(get() || '')

  const handleSubmit = e => {
    e.preventDefault()
    set(input)
  }

  const handleChange = e => setInput(e.target.value)

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="CSS value..."
        />
        <button type="submit">Save</button>
      </form>
    </main>
  )
}
