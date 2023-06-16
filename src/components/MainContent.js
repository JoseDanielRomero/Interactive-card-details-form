import '../stylesheets/MainContent.css'
import UserForm from './UserForm';

function MainContent({ cardCvc, setCardCvc, cardMonth, setCardMonth, cardYear, setCardYear, cardName, setCardName, cardNumber, setCardNumber }) {
  return (
      <main className='main-content-box'>
          <div className='main-content-box-column'>
              <UserForm
                cardName={cardName}
                setCardName={setCardName}
                cardNumber={cardNumber}
                setCardNumber={setCardNumber}
                cardMonth={cardMonth}
                setCardMonth={setCardMonth}
                cardYear={cardYear}
                setCardYear={setCardYear}
                cardCvc={cardCvc}
                setCardCvc={setCardCvc}
              />
          </div>
      </main>
    );
}

export default MainContent;