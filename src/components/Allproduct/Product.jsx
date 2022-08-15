import React from 'react'
import Rating from '@material-ui/lab/Rating';
function Product(props) {
    return (
        <>
            <div className='productBx'>
                <img src={props.img} alt={props.img}></img>
                <h3>{props.heading}</h3>
                <div className='product-details'>
                    <span><i class="fa fa-rupee"></i>{props.price}</span>
                    <Rating name="read-only" value={props.value} readOnly />
                </div>
            </div>
        </>
    )
}

export default Product