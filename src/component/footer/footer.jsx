import "./footer.css";

const Footer = () => {
    return (
        <>
            
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-row">
                        <div className="footer-column footer-column-large">
                            <h6>About</h6>
                            <p className="text-justify">
                                We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.
                                </p>
                            
                        </div>
                        <div className="footer-column footer-column-small">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="#">FINANCE</a></li>
                                <li><a href="#">Stock Market</a></li>
                                <li><a href="#">Financial Modeling</a></li>
                                <li><a href="#">Crypto</a></li>
                            </ul>
                        </div>
                        <div className="footer-column footer-column-small">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                                <li><a href="/team">Team</a></li>
                                <li><a href="/privacy-policy/">Privacy Policy</a></li>
                            </ul>
                        </div>
                     
                    </div>
                    <hr />
                </div>
                <div className="footer-bottom-container">
                    <div className="footer-row">
                        <div className="footer-bottom-column footer-bottom-column-large">
                            <p className="copyright-text">
                                Copyright © 2017 All Rights Reserved by
                                <a href="#">FEC</a>.
                            </p>
                        </div>
                        <div className="footer-bottom-column footer-bottom-column-small">
                            <ul className="social-icons">
                                <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                                <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                                <li><a className="dribbble" href="#"><i className="fa fa-dribbble" /></a></li>
                                <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
