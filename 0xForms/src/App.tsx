import { useState } from 'react'
import './App.css'
import { QuestionCard } from './app/admin/Form'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QuestionCard/>
    </>
  )
}

export default App
