import React from 'react';
import './Navbar.css';
import logo from '../../Images/logo.jpg';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
function Navbar() {
  return (
    <div className='nav-bar'>
      <div className='nav1-container'>
        <div className='logo'>
          <a href='/'><img src={logo} alt={logo} width='100px' height='80px' /></a>
        </div>
        <div>
          <ul>
            <li><a href='/'><FavoriteBorderIcon className='icons'/></a></li>
            <li><a href='/'><ShoppingCartIcon className='icons'/></a></li>
            <li><a href='/'><PersonIcon className='icons'/></a></li>
          </ul>
        </div>
      </div>
      <div className='nav2-container'>
        <div className='nav-menu'>
          <nav>
            <ul>
              <li><a href='/'>Shop</a></li>
              <li><a href='/'>About Us</a></li>
              <li><a href='/'>Contact Us</a></li>
              <li><a href='/'>Product Catalog</a></li>
            </ul>
          </nav>
        </div>
        <div className='searchBx'>
          <SearchIcon className='searchIcon' />
          <input type='text' placeholder='search your product here...' />
          <button>search</button>
        </div>
      </div>
      <div className='nav3-container'>
        <ul className='productbar'>
          <li><a href='/'>All</a></li>
          <li><a href='/'>Chair</a>
           <ul>
            <li><a href='/'>Meditation Chair</a></li>
            <li><a href='/'>Backless Yoga Chair</a></li>
           </ul>
          </li>
          <li><a href='/'>Meditation Cushions</a></li>
          <li><a href='/'>Yoga Mats</a></li>
          <li><a href='/'>Mask</a>
          <ul>
          <li><a href='/'>Sleep Mask</a></li>
          <li><a href='/'>Face Mask</a></li>
          </ul>
          </li>
          <li><a href='/'>More</a>
          <ul>
          <li><a href='/'>Yoga Accessories</a></li>
          <li><a href='/'>Travel Accessories</a></li>
          <li><a href='/'>restorative yoga Prop</a></li>
          </ul>
          </li>  
        </ul>
      </div>
    </div>
  )
}

export default Navbar