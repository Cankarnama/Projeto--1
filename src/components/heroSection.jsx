import React from 'react';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="text-side">
                <a href="#"><img src="/img/bitcoin.svg" alt="" style={{ marginRight: 10 }} /> Jump start your portfolio &rarr;</a>
                <h1>Jump start <br /> your crypto <br /> portfolio</h1>
                <p>Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.</p>
                <div className="form">
                    <input type="text" placeholder="Email address" />
                    <button className="btn">Get Started</button>
                </div>
            </div>
            <div className="image-side">
                <img src="/img/coinbase-head-img.svg" width="90%" alt="" />
            </div>
        </section>
    );
}

export default HeroSection;
