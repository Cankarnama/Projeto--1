import React from 'react';

const GetStarted = () => {
    return (
        <section className="get-started">
            <div className="header">
                <h3>Get started in a few minutes</h3>
                <p>Coinbase supports a variety of the most popular digital currencies.</p>
            </div>
            <div className="body">
                <div className="item">
                    <img src="/img/create.svg" alt="" />
                    <h3>Create an account</h3>
                </div>
                <hr />
                <div className="item">
                    <img src="/img/bank.svg" alt="" />
                    <h3>Link your bank account</h3>
                </div>
                <hr />
                <div className="item">
                    <img src="/img/buynsell.svg" />
                    <h3>Start buying {"&"} selling</h3>
                </div>
            </div>
        </section>
    );
}

export default GetStarted;
