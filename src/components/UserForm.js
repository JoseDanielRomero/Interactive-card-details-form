import { useState } from 'react';
import '../stylesheets/UserForm.css'

function UserForm() {
  const [cardNumber, setCardNumber] = useState('');

  const handleChange = (event) => {
    setCardNumber(event.target.value);
  }

  return (
    <form id='user-form'>
      <label className='form-labels'>
        CARDHOLDER NAME
        <input
          type='text'
          className='form-inputs large'
          name='input-name'
          placeholder='e.g. Jane Appleseed'
          spellCheck='false'
          autoComplete='off'
        />
      </label>
      <label className='form-labels'>
        CARDHOLDER NUMBER
        <input
          type='number'
          className='form-inputs large' 
          name='input-number' 
          placeholder='e.g. 1234 5678 9123 0000' 
          spellCheck='false' 
          autoComplete='off'
          value={cardNumber}
          onChange={handleChange}
        />
      </label>
      <section className='user-form-adjust'>
        <div className='user-form-row'>
          <label className='form-labels inline'>
            EXP. DATE (MM/YY)
          </label>
          <label className='form-labels inline'>
            CVC
          </label>
        </div>
        <div className='user-form-row buttons'>
          <input
            type='number' 
            className='form-inputs exp-style' 
            name='input-expiration' 
            placeholder='MM' 
            spellCheck='false' 
            autoComplete='off'
          />
          <input
            type='number' 
            className='form-inputs exp-style' 
            name='input-expiration' 
            placeholder='YY' 
            spellCheck='false' 
            autoComplete='off'
          />
          <input 
            type='number' 
            className='form-inputs large adjust' 
            name='input-cvc' 
            placeholder='e.g. 123' 
            spellCheck='false'
            autoComplete='off'
          />
        </div>
      </section>
      <button type='submit' className='button-submit'>Confirm</button>
    </form>
  );
}

export default UserForm;