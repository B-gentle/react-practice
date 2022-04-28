import React from 'react';
import Card from '../contactCard/Card';
import './reservation.css';
import myPhoto from '../../assets/header-img.jpg';


const Reservations = (props) => {
  return (
    <div className='Reservation'>
      <Card name='BeeTech' email='brighteyo16@gmail.com' contact='+234812837021' image={myPhoto} />
      <Card name='Betty' email='bettychukwu291@gmail.com' contact='+234812837021' image={myPhoto} />
      <Card name='Cozy' email='usohps@gmail.com' contact='+234812837021' image={myPhoto} />
    </div>
  )
}

export default Reservations
