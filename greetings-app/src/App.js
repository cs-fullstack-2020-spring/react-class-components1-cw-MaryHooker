import React from 'react';
import './App.css';
import SayHello from './components/SayHello';
import SayHowdy from './components/SayHowdy';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SayHello/>
        <SayHowdy/>
      </header>
    </div>
  );
}

export default App;
