import './ProductSingle.css'
import {RatingComponent} from '../RatingComponent'
function ProductSingle({name, rating, ratingCount, price, photoSrc, isPopular}) {
    return (<article className='ProductSingle'>
        <section className='ProductSingle-ImgBackground' style={{backgroundImage: `url(${photoSrc})`}}>
            {isPopular && <section className='popularComponent'>
                    Popular
                </section>}
        </section>
        <section className='ProductSingle-Info'>
            <div className='ProductSingle-Info-left'>
                <h3>{name}</h3>
                <div className='ratingSection'>
                    {<RatingComponent rating={rating} ratingCount={ratingCount}/>}
                </div>
            </div>
            <div className='ProductSingle-Info-right'>
                <p>{price}</p>
            </div>
        </section>
    </article>)
}
export {ProductSingle};