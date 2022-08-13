import React from 'react'
import Rating from '@material-ui/lab/Rating';
function Card(props) {
  return (
        <> <div>
                <img src={props.img} alt={props.img}></img>
                <p>{props.feedback}</p>
                <div className='detail'>
                  <span>{props.name}</span>
                  <span>{props.city}</span>
                </div>
                <div className='rating'>
                <Rating
                  name="read-only"
                  value={props.ratingValue}
                  readOnly
                  /> 
                </div>
              </div>
        </>
  )
}

export default Card;