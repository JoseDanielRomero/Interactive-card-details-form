import '../stylesheets/UserForm.css'

function UserForm() {
    return (
        <form id='user-form'>

            <label className='form-labels'>
              CARDHOLDER NAME
              <input type='text' className='form-inputs large' name='input-name' placeholder='e.g. Jane Appleseed' spellCheck='false'/>
            </label>

            <label className='form-labels'>
              CARDHOLDER NUMBER
              <input type='number' className='form-inputs large' name='input-number' placeholder='e.g. 1234 5678 9123 0000' spellCheck='false'/>
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
                    <input type='number' className='form-inputs exp-style' name='input-expiration' placeholder='MM' spellCheck='false'/>
                    <input type='number' className='form-inputs exp-style' name='input-expiration' placeholder='YY' spellCheck='false'/>
                    <input type='number' className='form-inputs large adjust' name='input-cvc' placeholder='e.g. 123' spellCheck='false'/>
                </div>
            </section>

            <button type='submit' className='button-submit'>Confirm</button>

        </form>
    );
}

export default UserForm;