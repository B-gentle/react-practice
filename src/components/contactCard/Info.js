import React from 'react';

const info = (props) => {
  return (
    <div>
          <p className='info'>{props.contact}</p>
          <p className='info'>{props.email}</p>
    </div>
  )
}

export default info