import React from 'react'
import './feedback.css';
import Heading from '../Heading';
import yogaMat from '../../Images/yogaMat.jpg';
import yogaStrap from '../../Images/yogaStrap.jpg';
import faceMask from '../../Images/faceMask.jpg';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
function Feedback() {
  return (
    <div className='feedback'>
        <Heading heading="Happy Customers"/>
        <div className='feedback-container'>
              <div>
                <img src={yogaMat} alt={yogaMat}></img>
                <p>I am very happy after buying this ...</p>
                <div className='detail'>
                  <span>Pallavi Soldey</span>
                  <span>Bilaspur</span>
                </div>
                <div className='rating'>
                  <StarIcon className='like'/>
                  <StarIcon className='like'/>
                  <StarIcon className='like'/>
                  <StarHalfIcon className='like'/>
                  <StarOutlineIcon className='like'/>
                </div>
              </div>
              <div>
                <img src={yogaStrap} alt={yogaStrap}></img>
                <p>I am very happy after buying this ...</p>
                <div className='detail'>
                  <span>Pallavi Soldey</span>
                  <span>Bilaspur</span>
                </div>
                <div className='rating'>
                  <StarIcon className='like'/>
                  <StarIcon className='like'/>
                  <StarIcon className='like'/>
                  <StarHalfIcon className='like'/>
                  <StarOutlineIcon className='like'/>
                </div>
              </div>
              <div>
                <img src={faceMask} alt={faceMask}></img>
                <p>I am very happy after buying this ...</p>
                <div className='detail'>
                  <span>Pallavi Soldey</span>
                  <span>Bilaspur</span>
                </div>
                <div className='rating'>
                  <StarIcon className='like'/>
                  <StarIcon className='like'/>
                  <StarIcon className='like'/>
                  <StarHalfIcon className='like'/>
                  <StarOutlineIcon className='like'/>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Feedback