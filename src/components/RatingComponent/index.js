import './RatingComponent.css'
import StarFill from './Star_fill.svg'
import Star from './Star.svg'
function RatingComponent({rating, ratingCount}) {
    return (ratingCount > 0 ? 
    <section className="ratingContainer">
    <img src={StarFill} alt="Star Icon"></img>
    <p className='ratingNumber'>{rating}</p>
    <span>({ratingCount})</span>
    </section> : 
    <section className="ratingContainer">
    <img src={Star} alt="Star Icon Clean"></img>
    <p className='noRatings'>No ratings</p>
    </section>)
}
export {RatingComponent};