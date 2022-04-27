import React from 'react';
import myPhoto from '../../assets/header-img.jpg';
import Forms from '../forms/Forms';


const Reservations = () => {
  return (
    <div>
      <Forms />
      <h2>Manager BeeTech Homes</h2>
      <img src={myPhoto} alt='my-self'/>
      <p>+2349020533101</p>
      <p>brighteyo16@gmail.com</p>
    </div>
  )
}

export default Reservations
