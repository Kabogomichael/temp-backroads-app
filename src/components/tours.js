
import { tours } from '../data';
import Title from './title'
// import tour5 from '../images/tour-5.jpeg'
// import tour6 from '../images/tour-6.jpeg'


const Tours = () => {
    return ( 
        <section className="section" id="tours">
          <Title title='featured' subTitle='tours' />
        
        <div className="section-center featured-center">

          {tours.map((tour) =>{
            const {id,image,date,title,info,location,duration,amount} = tour
            return(
              <article className="tour-card" key={id}>
            <div className="tour-img-container">
              <img src={image} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>{info}</p>
              <div className="tour-footer">
                <p>
                  <span><i className="fas fa-map"></i></span> {location}
                </p>
                <p>{duration} days</p>
                <p>from ${amount}</p>
              </div>
            </div>
          </article>
            )
          })}
          
    
        
        </div>
      </section>
     );
}
 
export default Tours;