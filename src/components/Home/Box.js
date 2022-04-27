import React from 'react'
import './box.css';

const Box = () => {
  return (
    <div className='box'>
      <header>
        <h1>Notes</h1>
      </header>
      <div className='note'>
        <h1>This is the note title</h1>
        <p>This is the note content</p>
      </div>
    </div>
  )
}

export default Box