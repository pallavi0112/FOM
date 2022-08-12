import React from 'react';
import Navbar from './Navbar';
import './Header.css';
function Header() {
  return (
    <div className='header-wrapper'>
      <Navbar />
      <div className='contentBx'>
        <h3>Neque porro quisquam est qui dolorem ipsum quia</h3>
        <p>It is a long established fact that a reader will be distracted
         by the readable content of a page when looking at its layout.
          The point of using Lorem Ipsum is that it has a more-or-less normal
           distribution of letters, as opposed to using 'Content here, content here', 
           making it look like readable English.</p>
        <button>Shop Now</button>
      </div>
    </div>
  )
}

export default Header