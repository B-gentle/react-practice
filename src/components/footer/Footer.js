import React from 'react';
import './footer.css'

const Footer = () => {
    let yourName = 'BeeTech'; 
  let date = new Date();
  let currentDate = date.getFullYear();
  return (
    <footer>
        <p>Created by {yourName}</p>
        <p>&copy; {currentDate}</p>
    </footer>
  )
}

export default Footer