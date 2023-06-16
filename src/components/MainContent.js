import '../stylesheets/MainContent.css'
import UserForm from './UserForm';

function MainContent({ cardNumber, setCardNumber }) {
  return (
      <main className='main-content-box'>
          <div className='main-content-box-column'>
              <UserForm
                cardNumber={cardNumber}
                setCardNumber={setCardNumber}
              />
          </div>
      </main>
    );
}

export default MainContent;