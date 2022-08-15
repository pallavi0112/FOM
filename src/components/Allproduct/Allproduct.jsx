import React from 'react';
import Heading from '../Heading';
import Product from './Product';
import p1 from '../../Images/p1.png';
import p2 from '../../Images/p2.png';
import p3 from '../../Images/p3.png';
import p4 from '../../Images/p4.png';
import p5 from '../../Images/p5.png';
import meditationChair from '../../Images/meditationChair.png';
import yogaChair from '../../Images/yogaChair.png';
import memoryFoam from '../../Images/memoryFoam.png';
import sleepMask from '../../Images/sleepMask.png';
import './allproduct.css';
function Allproduct() {
  return (
    <section className='allproduct-section'>
        <Heading heading="All Products"/>
        <div className='product-container'>
         <div>
          <Product img = {p1}
                   heading="Friends of Meditation small relaxing Buddha Meditation Chair"
                   price = '2,400'
                   value = '3'
           />
         </div>
         <div>
          <Product img = {p2}
                   heading="Friends of Meditation small relaxing Buddha Meditation Chair"
                   price = '2,400'
                   value = '3'
           />
         </div>
         <div>
          <Product img = {p3}
                   heading="Friends of Meditation small relaxing Buddha Meditation Chair"
                   price = '2,400'
                   value = '3'
           />
         </div>
         <div>
          <Product img = {p4}
                   heading="Friends of Meditation small relaxing Buddha Meditation Chair"
                   price = '2,400'
                   value = '3'
           />
         </div>
         <div>
          <Product img = {p5}
                   heading="Friends of Meditation small relaxing Buddha Meditation Chair"
                   price = '2,400'
                   value = '3'
           />
         </div>
         <div>
          <Product img = {sleepMask}
                   heading="Friends of Meditation small relaxing Buddha Meditation Chair"
                   price = '2,400'
                   value = '3'
           />
         </div>
         <div>
          <Product img = {yogaChair}
                   heading="Friends of Meditation small relaxing Buddha Meditation Chair"
                   price = '2,400'
                   value = '3'
           />
         </div>
         <div>
          <Product img = {meditationChair}
                   heading="Friends of Meditation small relaxing Buddha Meditation Chair"
                   price = '2,400'
                   value = '3'
           />
         </div>       
        </div>
    </section>
  )
}

export default Allproduct