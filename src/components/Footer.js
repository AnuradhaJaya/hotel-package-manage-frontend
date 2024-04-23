import React from 'react';
import logo2 from '../assets/img/logo2.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='pt-0'> 
        <footer className="footer-type4">
            <div className="footer-top">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* footer widget */}
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Link to="/">
                                    <img src={logo2} data-rjs="2" alt="Logo" />
                                </Link>
                            </div>
                            <div className="footer-about-text">
                                <p>Be the first to know New developments at the Hotel ElephantBay !</p>
                            </div>
                            <div className="footer-subscribe parsley-validate">
                                <form action=" ">
                                    <input type="email" className="theme-input-style" placeholder="your email here" required />
                                    <button type="submit"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                                </form>
                            </div>
                        </div>
                        {/* End of footer widget */}

                        {/* footer widget */}
                        <div className="footer-widget">
                            <div className="footer-header">
                                <h5>About Elephantbay</h5>
                            </div>
                            <div className="footer-links">
                                <ul className="links-list">
                                    <li><Link to=" ">About Our Company</Link></li>
                                    <li><Link to=" ">License</Link></li>
                                    <li><Link to=" ">Policy Privacy</Link></li>
                                    <li><Link to=" ">Terms of use</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* End of footer widget */}

                        {/* footer widget */}
                        <div className="footer-widget">
                            <div className="footer-header">
                                <h5>Useful Links</h5>
                            </div>
                            <div className="footer-links">
                                <ul className="links-list">
                                    <li><Link to=" ">Rooms</Link></li>
                                    <li><Link to=" ">Offers</Link></li>
                                    <li><Link to=" ">Events</Link></li>
                                    <li><Link to=" ">Location</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* End of footer widget */}

                        {/* footer widget */}
                        <div className="footer-widget">
                            <div className="footer-header">
                                <h5>Contact Us</h5>
                            </div>
                            <div className="footer-contact-wrap">
                                <ul className="footer-contact-list">
                                    <li>
                                        <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                                        Pinnawala,, Pinnawala, 71100
                                    </li>
                                    <li>
                                        <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                        <a href="mailto:info@emailname.com">Email: hotelelephantbay@gmail.com</a>
                                    </li>
                                    <li>
                                        <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                                        <a href="tel:+006543219874">Phone: +94 352 266 731</a>
                                    </li>
                                    <li>
                                        <span><i className="fa fa-clock-o" aria-hidden="true"></i></span>
                                        <div className='font-bold'>Monday - Saturday:</div>9:00 am - 18:00 pm
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-social-area ">
                                <ul className="list-unstyled">
                                    <li><a href=" "><i className="fa fa-facebook"></i></a></li>
                                    <li><a href=" "><i className="fa fa-twitter"></i></a></li>
                                    <li><a href=" "><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* End of footer widget */}
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-bottom-wrap">
                                <div className="copyright-text">
                                    <p>© 2024 <Link to={'/'}>ElephantBay</Link> All rights reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </div>

    );
};

export default Footer;
