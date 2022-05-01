import React from 'react';
import './forms.css';
import Input from './Input';

const Forms = (props) => {
  return (
    <form>
<Input type="text" placeholder="Username" />
<Input type="password" placeholder="Password" />
{props.isRegistered ? null : <Input type="password" placeholder="Confirm Password" />}
<button type='submit'>
  {props.isRegistered ? "Login" : "register"}
</button>
    </form>
  )
}

export default Forms;