import React from 'react';
import './topsells.css';
import Heading from '../Heading';
import meditationChair from '../../Images/meditationChair.png';
import yogaChair from '../../Images/yogaChair.png';
import memoryFoam from '../../Images/memoryFoam.png';
import sleepMask from '../../Images/sleepMask.png';
import right2 from '../../Images/right2.jpg';
function Topsells() {
  return (
    <div className='topproducts'>
        <Heading heading="Top Selling" />
        <div className='container2'>
                <div className='left2'>
                    <div className='Img1'>
                        <img src={meditationChair} alt={meditationChair}/>
                        <h3>Meditation Chair</h3>
                    </div>
                    <div className='Img2'>
                        <h3>Yoga Chair</h3>
                        <img src={yogaChair} alt={yogaChair}/>
                    </div>
                    <div className='Img3'>
                        <img src={memoryFoam} alt={memoryFoam} />
                        <h3>Memory Foam</h3>
                    </div>
                    <div className='Img4'>
                        <h3>Yoga Mat</h3>
                        <img src={sleepMask} alt={sleepMask}/>
                    </div>
                </div>
                <div className='right2'>
                    <img src={right2} alt={right2}/> 
                    <div>
                    <i class="fa fa-quote-left"></i>
                    <span>Meditation means letting go of our baggage, letting go of all the pre-rehearsed stories and inner-dialogue that we’ve grown so attached to</span>
                    <i class="fa fa-quote-right"></i>
                    </div>       
                </div>
            </div>
    </div>
  )
}

export default Topsells;