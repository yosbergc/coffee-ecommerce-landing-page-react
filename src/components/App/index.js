import React from 'react';
import { ButtonComponent } from '../ButtonComponent';
import { ProductsContainer } from '../ProductsContainer';
import { ProductSingle } from '../ProductSingle';
import { LoadingComponent } from '../LoadingComponent'
import './App.css';
function App() {
  let [currentActive, changeCurrentActive] = React.useState(0);
  let [currentProducts, changeCurrentProducts] = React.useState([])
  let [isLoading, changeIsLoading] = React.useState(true);
  const API_URL = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';
  React.useEffect(() => {
    try {
      fetch(API_URL)
      .then(res => res.json())
      .then(data => changeCurrentProducts(data))
      changeIsLoading(false);
    } catch (error) {
      changeIsLoading(false)
      console.error(error)
    }
  }, [])
  let filterProducts = currentActive === 0 ? currentProducts : currentProducts.filter(product => product.available);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section className='collection-container'>
        <h1>Our Collection</h1>
        <p className='mainP'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        <section className='button-section'>
          <ButtonComponent isActiveNumber={0} changeCurrentActive={changeCurrentActive} currentActive={currentActive} text={"All Products"}/>
          <ButtonComponent isActiveNumber={1} changeCurrentActive={changeCurrentActive} currentActive={currentActive} text={"Available Now"}/>
        </section>
        <ProductsContainer>
          {isLoading && <LoadingComponent/>}
          {!isLoading && currentProducts.length > 0 && filterProducts.map(producto => {
            return <ProductSingle
              name={producto.name}
              photoSrc={producto.image}
              price={producto.price}
              rating={producto.rating}
              ratingCount={producto.votes}
              isPopular={producto.popular}
              isAvailable={producto.available}
              key={producto.id}
            />
          })}
        </ProductsContainer>
      </section>
    </div>
  );
}

export default App;
