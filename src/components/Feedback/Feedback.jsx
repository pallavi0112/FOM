import React, { useState } from 'react'
import './feedback.css';
import Heading from '../Heading';
import yogaMat from '../../Images/yogaMat.jpg';
import yogaStrap from '../../Images/yogaStrap.jpg';
import faceMask from '../../Images/faceMask.jpg';
import Card from './Card';
function Feedback() {
  const [ratingValue, setRatingValue] = useState(3);
  return (
    <section className='feedback'>
      <Heading heading="Happy Customers" />
      <div className='quotes'>
        <i class="fa fa-quote-left"></i>
        <span>In tough times, It's harder and even more important to keep our customers happy</span>
        <i class="fa fa-quote-right"></i>
      </div>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active pointer"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1" class="pointer"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2" class="pointer"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className='feedback-container'>
              <Card
                img={yogaMat}
                feedback="I am very happy after buying this ..."
                name="Pallavi Soldey"
                city="Akalatara"
                ratingValue={ratingValue}
              />
              <Card
                img={yogaStrap}
                feedback="I am very happy after buying this ..."
                name="Pallavi Soldey"
                city="Bilaspur"
                ratingValue={ratingValue}
              />
              <Card
                img={faceMask}
                feedback="I am very happy after buying this ..."
                name="Pallavi Soldey"
                city="Raipur"
                ratingValue={ratingValue}
              />
            </div>
          </div>
          <div class="carousel-item">
            <div className='feedback-container'>
              <Card
                img={yogaMat}
                feedback="I am very happy after buying this ..."
                name="Pallavi Soldey"
                city="Akalatara"
                ratingValue={ratingValue}
              />
              <Card
                img={yogaStrap}
                feedback="I am very happy after buying this ..."
                name="Pallavi Soldey"
                city="Bilaspur"
                ratingValue={ratingValue}
              />
              <Card
                img={faceMask}
                feedback="I am very happy after buying this ..."
                name="Pallavi Soldey"
                city="Raipur"
                ratingValue={ratingValue}
              />
            </div>
          </div>
          <div class="carousel-item">
            <div className='feedback-container'>
              <Card
                img={yogaMat}
                feedback="I am very happy after buying this ..."
                name="Pallavi Soldey"
                city="Akalatara"
                ratingValue={ratingValue}
              />
              <Card
                img={yogaStrap}
                feedback="I am very happy after buying this ..."
                name="Pallavi Soldey"
                city="Bilaspur"
                ratingValue={ratingValue}
              />
              <Card
                img={faceMask}
                feedback="I am very happy after buying this ..."
                name="Pallavi Soldey"
                city="Raipur"
                ratingValue={ratingValue}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className='feedback-container'>
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
            
      </div> */}
    </section>
  )
}

export default Feedback