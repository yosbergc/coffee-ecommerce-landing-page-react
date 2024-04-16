import React from 'react';
import { ButtonComponent } from '../ButtonComponent';
import './App.css';
function App() {
  let [currentActive, changeCurrentActive] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section className='collection-container'>
        <h1>Our Collection</h1>
        <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        <section className='button-section'>
          <ButtonComponent isActiveNumber={0} changeCurrentActive={changeCurrentActive} currentActive={currentActive} text={"All Products"}/>
          <ButtonComponent isActiveNumber={1} changeCurrentActive={changeCurrentActive} currentActive={currentActive} text={"Available Now"}/>
        </section>
      </section>
    </div>
  );
}

export default App;
