import './ProductsContainer.css'
function ProductsContainer({children}) {
    return (<section className="productsContainer">
        {children}
    </section>)
}
export {ProductsContainer};