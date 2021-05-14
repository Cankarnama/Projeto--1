import React from 'react';

const EarnSection = () => {

    const options = [
        {
            name: "Ampleforth Governance Token",
            other: "Forth",
            earnType: "$3 FORTH",
            icon: "ampleforth.svg"
        },
        {
            name: "The Graph",
            other: "GRT",
            earnType: "$3 GRT",
            icon: "thegraph.svg"
        },
        {
            name: "Stellar Lumens",
            other: "XLM",
            earnType: "$10 XLM",
            icon: "ampleforth.svg"
        },
        {
            name: "Compound",
            other: "COMP",
            earnType: "$9 COMP",
            icon: "compound.png"
        },
    ]

    return (
        <section className="earn">
            <div className="info">
                <h2>Earn up to $25 worth <br /> of crypto</h2>
                <p>Discover how specific cryptocurrencies work — and <br /> get a bit of each crypto to try out for yourself.</p>
                <a href="#" className="btn">Start earning</a>
            </div>
            <div className="options">
                {options.map(option=>{
                    return <Option {...option} />
                })}
                <a href="#" className="btn empty">View more {">"}</a>
            </div>
        </section>
    );
}

const Option = ({name, other = '', earnType, icon})=>{
    return (
        <div className="option">
            <img src={`/img/${icon}`} width="40px" alt="" />
            <span className="name">{name}</span>
            <span className="other">{other}</span>
            <div className="earn-type">Earn {earnType}</div>
        </div>
    );
}

export default EarnSection;
