import React from 'react';
import './App.css';
import Netflix from './components/Netflix';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Netflix/>
      </header>
      
      <img className='picSize' src='https://www.thewrap.com/wp-content/uploads/2016/12/Hook-Dustin-Hoffman-and-Robin-Williams-.jpg' alt='Hook'></img>

      <img className='pic2size' src='https://cdn.images.express.co.uk/img/dynamic/36/590x/fifthelement-784733.jpg' alt='The Fifth Element'></img>

      <img className='pic3size' src='https://www.eyeforfilm.co.uk/images/newsite/notting_600.jpg' alt='Notting Hill'></img>
    </div>
  );
}

export default App;
