import React from 'react';
import Avatar from '../Reservation/Avatar';
import Box from './Box';
import myPhoto from '../../assets/BTECH.png';

const Home = () => {
  const name = "Bee";
  let greeting;
  let date = new Date();
  let currentHour = date.getHours();

  let greetingsColor = {
    color: 'Black'
  }

 
  if (currentHour < 12){
    greeting = 'Good Morning';
    greetingsColor.color = 'Red';
  }else if(currentHour > 12 && currentHour < 18){
    greeting = 'Good Afternoon';
    greetingsColor.color = 'green'
  }else if (currentHour > 18 && currentHour < 23){
    greeting = 'Good Evening';
    greetingsColor.color = 'blue';
  }else {
    greeting = 'Welcome';
  }

  return (
    <div>
      <h2 style={greetingsColor}>{`${greeting} ${name}`}</h2>
        <Box />
        <Avatar image={myPhoto}/>
    </div>
  )
}

export default Home