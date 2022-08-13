import React from 'react'
import './footer.css';
import logo from '../../Images/logo.jpg';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
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
                            <button type="submit"><EmailIcon class="fa"/></button>
                        </form>
                        </div>
                        <div class="social__links">
                            <a href="/"><FacebookIcon class="fa" /></a>
                            <a href="/"><InstagramIcon class="fa"/></a>
                            <a href="/"><Twitter class="fa"/></a>
                            <a href="/"><LinkedInIcon class="fa"/></a>
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