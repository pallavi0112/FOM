import React, {useState} from 'react'
import './feedback.css';
import Heading from '../Heading';
import yogaMat from '../../Images/yogaMat.jpg';
import yogaStrap from '../../Images/yogaStrap.jpg';
import faceMask from '../../Images/faceMask.jpg';
import Card from './Card';
function Feedback() {
  const [ratingValue, setRatingValue] = useState(3);
  return (
    <div className='feedback'>
        <Heading heading="Happy Customers"/>
        <div className='feedback-container'>
             <Card 
                 img = {yogaMat}
                 feedback="I am very happy after buying this ..."
                 name = "Pallavi Soldey"
                 city = "Akalatara"
                 ratingValue = {ratingValue}
             />
               <Card 
                 img = {yogaStrap}
                 feedback="I am very happy after buying this ..."
                 name = "Pallavi Soldey"
                 city = "Bilaspur"
                 ratingValue = {ratingValue}
             />
               <Card 
                 img = {faceMask}
                 feedback="I am very happy after buying this ..."
                 name = "Pallavi Soldey"
                 city = "Raipur"
                 ratingValue = {ratingValue}
             />
              
        </div>
    </div>
  )
}

export default Feedback