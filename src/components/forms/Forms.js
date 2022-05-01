import React from 'react';
import './forms.css';
import Input from './Input';

const Forms = () => {
  return (
    <form>
<Input type="text" placeholder="Username" />
<Input type="password" placeholder="Password" />
<button type='submit'>Login</button>
    </form>
  )
}

export default Forms