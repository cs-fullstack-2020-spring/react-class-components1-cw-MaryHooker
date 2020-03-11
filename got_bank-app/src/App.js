import React from 'react';
import './App.css';
import BankAccount from './components/BankAccount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BankAccount customerName='Mary' balance='3'/>
      </header>
    </div>
  );
}

export default App;
