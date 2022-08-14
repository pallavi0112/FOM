import React from 'react'
import './footer.css';
import logo from '../../Images/logo.jpg';
function Footer() {
    return (
        <>
            <footer class="footer__area">
                <div class="footer-container">
                    <div className='top-container'>
                        <div className='img'>
                            <img src={logo} alt={logo} />
                        </div> 
                        <div>
                           <ul class="nav-link">
                            <li><a href="/">Shop</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Contact Us</a></li>
                            <li><a href="/">Product Catalog</a></li>
                            <li><a href="/">More</a></li>
                           </ul>
                        </div>
                        <div class="log-in">
                        <p>Get the latest Updates about Your Favorit Products</p>
                        <form id="form" class="subscribe__form">
                            <input type="email" id="email" name="EMAIL" placeholder="E-mail Address" autocomplete="off" />
                            <button type="submit"><i class="fa fa-envelope"></i></button>
                        </form>
                        </div>
                        <div class="social__links">
                            <a href="/"><i class="fa fa-google-plus"></i></a>
                            <a href="/"><i class="fa fa-facebook-f"></i></a>
                            <a href="/"><i class="fa fa-instagram"></i></a>
                            <a href="/"><i class="fa fa-linkedin"></i></a>
                            <a href="/"><i class="fa fa-twitter"></i></a>
                        </div>
                    </div>
                    <div className='bottom-container'>
                         &copy; 2022 :  All Rights Reserved
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer