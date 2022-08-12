import React from 'react';
import './product.css';
import Heading from '../Heading';
import img1 from '../../Images/prop.jpg';
import img2 from '../../Images/Mat.jpg';
import img3 from '../../Images/mask.jpg';
import img4 from '../../Images/Bg.jpg';
const Products = () => {
    return (
        <section className='products'>
            <Heading heading="Shop catagories"/>
            <div className='container'>
                <div className='left'>
                    <img src={img3} alt={img3 }/>
                    <h3><a href='/'>Face Mask</a></h3>
                </div>
                <div className='right'>
                    <div className='img1'>
                        <img src={img4} alt={img4}/>
                        <h3><a href='/'>Meditation Mat</a></h3>
                    </div>
                    <div className='img2'>
                        <img src={img2} alt={img2}/>
                        <h3><a href='/'>Yoga Mat</a></h3>
                    </div>
                    <div className='img3'>
                        <img src={img1} alt={img1} height="220px"/>
                        <h3><a href='/'>Prop</a></h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products