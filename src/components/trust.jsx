import React from 'react';

const Trust = () => {
    return (
        <section className="trust">
            <div className="header">
                <h3>Create your cryptocurrency portfolio today</h3>
                <p>Coinbase has a variety of features that make it the best place to start trading</p>
            </div>
            <div className="body">
                <div className="item">
                    <img src="/img/secure.svg" />
                    <h3>Secure storage</h3>
                    <p>We store the vast majority of the digital assets in secure offline storage.</p>
                    <a href="#">Learn how Coinbase keeps your funds safe and secure {">"}</a>
                </div>
                <div className="item">
                    <img src="/img/insurance.svg" />  
                    <h3>Protected by insurance</h3>
                    <p>Cryptocurrency stored on our servers is covered by our insurance policy.</p>
                    <a href="#">Learn how your crypto is covered by our insurance policy {">"}</a>
                </div>
                <div className="item">
                    <img src="/img/practices.svg" />
                    <h3>Industry best practices</h3>
                    <p>Coinbase supports a variety of the most popular digital currencies.</p>
                    <a href="#">Learn how we implement industry best practices for account security {">"}</a>
                </div>
            </div>
        </section>
    );
}

export default Trust;
