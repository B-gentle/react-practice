import React from 'react';
import Card from '../contactCard/Card';
import './reservation.css';
import { FaBeer } from 'react-icons/fa'
import myPhoto from '../../assets/header-img.jpg';
import Forms from '../forms/Forms';


const Reservations = (props) => {

  let userIsRegistered = false;

  return (
    <div className='Reservation'>
      <FaBeer />
       <Card name='BeeTech' email='brighteyo16@gmail.com' contact='+2348128937021' image={myPhoto} />
       <div className='form-container'> <Forms isRegistered={userIsRegistered}/> </div>
      <Card name='Betty' email='bettychukwu291@gmail.com' contact='+234812837021' image={myPhoto} />

    </div>
  )
}
export default Reservations
