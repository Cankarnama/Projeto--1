import React from 'react';

const CreateCryptoSection = () => {
    const services = [
        {
            icon: "manage.svg",
            title: "Manage your portfolio",
            body: "Buy and sell popular digital currencies, keep track of them in the one place."
        },
        {
            icon: "buys.svg",
            title: "Recurring buys",
            body: "Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly."
        },
        {
            icon: "protect.svg",
            title: "Vault Protection",
            body: "For added security, store your funds in a vault with time delayed withdrawals."
        },
        {
            icon: "mobile.svg",
            title: "Mobile apps",
            body: "Stay on top of the markets with the Coinbase app for Android or iOS."
        }
    ]

    return (
        <section className="create">
            <div className="header">
                <h3>Create your cryptocurrency portfolio today</h3>
                <p>Coinbase has a variety of features that make it the best place to start trading</p>
            </div>
            <div className="body">
                <div className="services">
                    {services.map(service=> <Service {...service} />)}
                </div>
                <div className="presentation">
                    <img src="/img/presentation.png" alt="" />
                </div>
            </div>
        </section>
    );
}

const Service = ({icon, title, body })=>{
    return (
        <div className="service">
            <div className="icon">
            <img src={`/img/${icon}`} width="40px" alt="" />
            </div>
            <div className="details">
                <h5>{title}</h5>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default CreateCryptoSection;
