import React from 'react'
import './footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import LinkIcon from '@material-ui/icons/Link';
import EmailIcon from '@material-ui/icons/Email';
function Footer() {
    return (
        <>
            <footer class="footer__area">
                <div class="container">
                        <div class="footer__widget">
                            <h4>About Us</h4>
                            <div>
                                <p>We are pet lovers like you all who always want to help the stray animals in pain but
                                    can’t
                                    find any help from anyone or anywhere. So we are trying to build
                                    this community to change that us and for the new generations to come.
                                </p>
                            </div>
                            <div class="social__links">
                            <a href="/"><FacebookIcon class="fa" /></a>
                            <a href="/"><InstagramIcon class="fa"/></a>
                            <a href="/"><Twitter class="fa"/></a>
                            <a href="/"><LinkedInIcon class="fa"/></a>
                        </div>
                        <div class="footer__widget">
                           <h4>Explore</h4>
                           <ul class="nav-link">
                            <li><a href="/"><LinkIcon class="fa" /> About Us</a></li>
                            <li><a href="/"><LinkIcon class="fa" /> Services</a></li>
                            <li><a href="/"><LinkIcon class="fa" /> Testimonial</a></li>
                            <li><a href="/"><LinkIcon class="fa" /> Community</a></li>
                            <li><a href="/"><LinkIcon class="fa" /> Gallery</a></li>
                           </ul>
                        </div>
                        <div class="footer__widget">
                        <h4>Support</h4>
                        <ul class="nav-link">
                            <li><a href="/"><LinkIcon class="fa" /> Pet Finder</a></li>
                            <li><a href="/"><LinkIcon class="fa" /> Pet Care Shops</a></li>
                            <li><a href="/"><LinkIcon class="fa" /> Veterinary Dpctors</a></li>
                            <li><a href="/"><LinkIcon class="fa" /> Shelters</a></li>
                            <li><a href="/"><LinkIcon class="fa" /> Pet Pick Up and Pet Delivery</a></li>
                        </ul>
                        </div>
                        <div class="footer__widget">
                        <h4>Subscribe</h4>
                        <div>
                            <p>Get the latest news about Pets on your email</p>
                        </div>
                        <form id="form" class="subscribe__form">
                            <input type="email" id="email" name="EMAIL" placeholder="E-mail Address" autocomplete="off" />
                            <button type="submit"><EmailIcon class="fa"/></button>
                        </form>
                        </div>
                    </div>
                </div>
                <div class="copyright">Copyright &copy; 2021. All Rights
                Reserved</div>
            </footer>
        </>
    )
}

export default Footer