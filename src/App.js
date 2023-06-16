import './App.css';
import MainContent from './components/MainContent';
import SideContent from './components/SideContent';
import { useState } from 'react';

function App() {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardMonth, setCardMonth] = useState('');
  const [cardYear, setCardYear] = useState('');
  const [cardCvc, setCardCvc] = useState('');

  return (
    <div className="App">
      <SideContent
        nombreDeTarjeta={cardName}
        numeroDeTarjeta={cardNumber}
        mesDeExpiracion={cardMonth}
        anoDeExpiracion={cardYear}
        codigoDeTarjeta={cardCvc}
      />
      <MainContent 
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
  );
}

export default App;
