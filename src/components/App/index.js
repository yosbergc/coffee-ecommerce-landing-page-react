import React from 'react';
import { ButtonComponent } from '../ButtonComponent';
import { ProductsContainer } from '../ProductsContainer';
import { ProductSingle } from '../ProductSingle';
import './App.css';
function App() {
  let [currentActive, changeCurrentActive] = React.useState(0);
  let [currentProducts, changeCurrentProducts] = React.useState([])
  let [isLoading, changeIsLoading] = React.useState(true);
  React.useEffect(() => {

  }, [])
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
        <ProductsContainer>
          <ProductSingle name={"Cappuccino"} photoSrc={"https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg"} price={"$5.20"} rating={4.7} isPopular={true} ratingCount={60}/>
          <ProductSingle name={"Cappuccino"} photoSrc={"https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg"} price={"$5.20"} rating={4.7} isPopular={true} ratingCount={60}/>
          <ProductSingle name={"Cappuccino"} photoSrc={"https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg"} price={"$5.20"} rating={4.7} isPopular={true} ratingCount={60}/>
          <ProductSingle name={"Cappuccino"} photoSrc={"https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg"} price={"$5.20"} rating={4.7} isPopular={true} ratingCount={60}/>
          <ProductSingle name={"Cappuccino"} photoSrc={"https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg"} price={"$5.20"} rating={4.7} isPopular={true} ratingCount={60}/>
          <ProductSingle name={"Cappuccino"} photoSrc={"https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg"} price={"$5.20"} rating={4.7} isPopular={true} ratingCount={60}/>
        </ProductsContainer>
      </section>
    </div>
  );
}

export default App;
