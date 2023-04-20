import React from 'react'
import './style.css'
import btnStyles from './button.module.css'

const App = () => {
  return (
    <div>
      <h1>Source | Root Component</h1>
      <button className={btnStyles.error}>ERROR</button>
      <button className={btnStyles.success}>SUCCESS</button>
    </div>
  )
}

export default App