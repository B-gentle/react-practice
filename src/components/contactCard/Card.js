import React from 'react';
import Avatar from './Avatar';
import Info from './Info';

const Card = (props) => {
  return (
    <div className='contacts'>
      <h1 className='heading'>Reserved users</h1>
      <div className='reservation-card'>
        <div className='top'>
        <h2 className='name'>{props.name}</h2>
        <Avatar image={props.image} />
        </div>     
        <div className='bottom'>
          <Info contact={props.contact}/>
          <Info email={props.email}/>
        </div>
      </div>
    </div>
  )
}

export default Card