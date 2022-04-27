import React from 'react';
import './bedspace.css';
import styled from 'styled-components';
import FirstHouse from '../../assets/house-1.png';
import SecondHouse from '../../assets/house-2.jpg';
import ThirdHouse from '../../assets/house-3.jpg';
import FourthHouse from '../../assets/house-4.jpg';
import FifthHouse from '../../assets/house-5.jpg';
import SixthHouse from '../../assets/house-6.jpg';
import SeventhHouse from '../../assets/house-7.jpg';
import EightHouse from '../../assets/house-8.jpg';
const BedSpace = () => {

  const houses = [{
    id: 1, name: 'TechGeneHub', image: FirstHouse, price: '₦250,000', Address: '4 Onukak Street'
  },
  {
    id: 2, name: 'Duplex Estate', image: SecondHouse, price: '₦450,000', Address: '308 Oron Road'
  },
  {
    id: 3, name: 'NPS Homes', image: ThirdHouse, price: '₦850,000', Address: '50 Atamunu Str'
  },
  {
    id: 4, name: 'Ghegwen Apartments', image: FourthHouse, price: '₦950,000', Address: ' 02 Down White Harbour'
  },
  {
    id: 5, name: 'Bateba Homes', image: FifthHouse, price: '₦150,000', Address: '50 Bateba Road'
  },
  {
    id: 6, name: 'Eagle House', image: SixthHouse, price: '₦250,000', Address: 'Nkwagu'
  },
  {
    id: 7, name: 'Alhaja Spot', image: SeventhHouse, price: '₦350,000', Address: 'Offa'
  },
  {
    id: 8, name: '5 Star Lodge', image: EightHouse, price: '₦550,000', Address: '02 Arena, London'
  },
  ]

  return (
    <div className='product-slide'>
      {
        houses.map((house) =>
          <div className='product-box'>
            <div className='image-box'>
              <img src={house.image} alt='' />
            </div>
            <div className='detail-box'>
              <span>
                <span>{house.price}/year</span>
                <span>{house.name}</span>
              </span>
              <div>{house.Address}</div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default BedSpace