import './App.css';
import MainContent from './components/MainContent';
import SideContent from './components/SideContent';
import { useState } from 'react';

function App() {
  const [cardNumber, setCardNumber] = useState('');

  return (
    <div className="App">
      <SideContent numeroDeTarjeta={cardNumber}/>
      <MainContent 
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
      />
    </div>
  );
}

export default App;
