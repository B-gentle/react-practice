import React from 'react'
import './box.css';
import Notepad from './Notepad';
import Notes from './Notes';

const NoteHeader = () => {
  return (
    <div className='box'>
      <header>
        <h1>Notes</h1>
      </header>
      <div>
      {Notes && Notes.map((note)=>  <Notepad key={note.key} title={note.title} content={note.content}/>)}
      </div>
    </div>
  )
}

export default NoteHeader