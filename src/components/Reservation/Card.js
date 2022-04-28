import React from 'react';
import Avatar from './Avatar';
import './reservation.css';
import myPhoto from '../../assets/header-img.jpg';

const Card = (props) => {
  return (
    <div className='contacts'>
      <h1 className='heading'>Reserved users</h1>
      <div className='reservation-card'>
        <div className='top'>
        <h2 className='name'>{props.name}</h2>
        <Avatar image={myPhoto} />
        </div>     
        <div className='bottom'>
          <div className='info'>
          <p>{props.contact}</p>
          <p>{props.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card