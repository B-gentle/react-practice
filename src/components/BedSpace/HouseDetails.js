import React from 'react';
import FourthHouse from '../../assets/house-4.jpg';
import { useParams } from 'react-router-dom';


const HouseDetails = ({houses}) => {

  const {name, price} = useParams();

  return (
    <div className='house-details'>
      <div>
      <img src={FourthHouse} alt=""/>
      </div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  )
}

export default HouseDetails