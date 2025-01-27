import React from 'react';
import '../main/main.css';
import Input from '../../base/input/Input';

export default function Form() {
  return (
    <form>
      <div className='form-container'>
        <h2 className='form-title'>TRY A FREE CLASS</h2>
          <Input  label='First name' type='text' name='first name' placeholder='First name'/>
          <Input  label='Last name' type='text' name='last name' placeholder='Last name'/>
          <Input  label='Email' type='email' name='email' placeholder='Email'/>
          <Input  label='Phone number' type='tel' name='phone number' placeholder='Phone number'/>

        <p className='law-title'>
          By clicking “Try Row House,” you agree to our Terms and to receive automated marketing calls or texts from or on behalf of Row House at the phone number provided above. Consent is not a condition of purchase. Message and data rates may apply.
        </p>
        <button className='button-form'>Try Row House</button>
      </div>
    </form>
  );
}
