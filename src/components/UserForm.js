import '../stylesheets/UserForm.css'

function UserForm({ cardCvc, setCardCvc, cardMonth, setCardMonth, cardYear, setCardYear, cardName, setCardName, cardNumber, setCardNumber }) {
  const handleChangeName = (event) => {
    setCardName(event.target.value);
  }
  const handleChangeNumber = (event) => {
    setCardNumber(event.target.value);
  }
  const handleChangeMonth = (event) => {
    setCardMonth(event.target.value);
  }
  const handleChangeYear = (event) => {
    setCardYear(event.target.value);
  }
  const handleChangeCvc = (event) => {
    setCardCvc(event.target.value);
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
          value={cardName}
          onChange={handleChangeName}
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
          onChange={handleChangeNumber}
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
            value={cardMonth}
            onChange={handleChangeMonth}
          />
          <input
            type='number' 
            className='form-inputs exp-style' 
            name='input-expiration' 
            placeholder='YY' 
            spellCheck='false' 
            autoComplete='off'
            value={cardYear}
            onChange={handleChangeYear}
          />
          <input 
            type='number' 
            className='form-inputs large adjust' 
            name='input-cvc' 
            placeholder='e.g. 123' 
            spellCheck='false'
            autoComplete='off'
            value={cardCvc}
            onChange={handleChangeCvc}
          />
        </div>
      </section>
      <button type='submit' className='button-submit'>Confirm</button>
    </form>
  );
}

export default UserForm;