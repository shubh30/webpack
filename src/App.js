import React from 'react'
import './style.scss'
import btnStyles from './button.module.css'
import avatar from './images/avatar.webp'

const App = () => {
  return (
    <div>
      <h1>Source | Root Component</h1>
      <button className={btnStyles.error}>ERROR</button>
      <button className={btnStyles.success}>SUCCESS</button>
      <img src={avatar} />
    </div>
  )
}

export default App