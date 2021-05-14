import React from 'react';

const AppHeader = () => {
    return (
        <section className="app-header">
            <span className="logo">coinbase</span>
            <nav>
                <a href="#">Prices</a>
                <span>Learn</span>
                <span>Individuals</span>
                <span>Business</span>
                <span>Developers</span>
                <span>Company</span>
            </nav>
            <div className="ctas">
                <a href="#" className="btn empty">Sign in</a>
                <a href="#" className="btn">Get Started</a>
            </div>
        </section>
    );
}

const Menu = ({ links, title, desc, otherLink }) => {
    return (
        <div className="menu">
            <div className="links">
                <ul>
                    {links.map(link => {
                        return (
                            <li>
                                <a href="#">
                                    <span>&gt;</span>
                                    <span>{link}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="desc">
                <h3>{title}</h3>
                <p>{desc}</p>
                <a href="#">{otherLink}</a>
            </div>
        </div>
    )
}

export default AppHeader;
