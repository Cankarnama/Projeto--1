import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="site-info">
                <span className="logo">coinbase</span>
                <select name="language" id="lang">
                    <option value="#" selected>English</option>
                </select>
                <p>© 2021 Coinbase</p>
                <p> <a href="">Blog</a>•<a href="">Twitter</a>•<a href="">Facebook</a></p>
            </div>
            <div className="navigations">
                <div className="item">
                    <h5>Company</h5>
                    <a href="#">About</a>
                    <a href="#">Careers</a>
                    <a href="#">Affiliates</a>
                    <a href="#">Blog</a>
                    <a href="#">Press</a>
                    <a href="#">Investors</a>
                    <a href="#">Legal & privacy</a>
                    <a href="#">Cookie policy</a>
                </div>
                <div className="item">
                    <h5>Individuals</h5>
                    <a href="#">Buy & sell</a>
                    <a href="#">Earn free crypto</a>
                    <a href="#">Wallet</a>
                    <a href="#">Card</a>
                </div>
                <div className="item">
                    <h5>Support</h5>
                    <a href="#">Help center</a>
                    <a href="#">Contact us</a>
                    <a href="#">Create account</a>
                    <a href="#">ID verification</a>
                    <a href="#">Account information</a>
                    <a href="#">Payment methods</a>
                    <a href="#">Account access</a>
                    <a href="#">Supported crypto</a>
                    <a href="#">Supported countries</a>
                    <a href="#">Status</a>
                </div>
                <div className="item">
                    <h5>Learn</h5>
                    <a href="#">Browse crypto prices</a>
                    <a href="#">Crypto basics</a>
                    <a href="#">Tips & tutorials</a>
                    <a href="#">Market updates</a>
                    <a href="#">What is Bitcoin?</a>
                    <a href="#">What is crypto?</a>
                    <a href="#">What is a blockchain?</a>
                    <a href="#">How to set up a crypto wallet</a>
                    <a href="#">How to send crypto</a>
                    <a href="#">Taxes</a>
                </div>
                <div className="item">
                    <h5>Developers</h5>
                    <a href="#">Coinbase Cloud</a>
                    <a href="#">Connect</a>
                    <a href="#">Commerce</a>
                    <a href="#">Pro</a>
                    <a href="#">Bison Trails</a>
                    <a href="#">WalletLink</a>
                    <a href="#">Rosetta</a>
                    <a href="#">USDC</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
