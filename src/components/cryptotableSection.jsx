import React from 'react';

const CryptotableSection = () => {
    const cryptos = [
        {
            name: "Bitcoin",
            abrv: "BTC",
            price: "289,862.93",
            change: "-11.63",
            icon: "bitcoinIcon.png"
        },
        {
            name: "Ethereum",
            abrv: "ETH",
            price: "22,054.00",
            change: "-10.80",
            icon: "ethereumIcon.png"
        },
        {
            name: "Bitcoin Cash",
            abrv: "BCH",
            price: "7,306.30",
            change: "-15.19",
            icon: "bitcoinCashIcon.png"
        },
        {
            name: "Litecoin",
            abrv: "LTC",
            price: "1,847.37",
            change: "-16.88",
            icon: "liteCoinIcon.png"
        },
    ];

    return (
        <section className="crypto-table">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th id="stretch-col">Name</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Chart</th>
                        <th>Trade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cryptos.map((crypto, id)=>{
                            return <TableRow {...crypto} id={id+1}/>
                        })
                    }
                </tbody>
            </table>
        </section>
    );
}

const TableRow = ({icon, id, abrv, name, price, change })=>{
    return (
        <tr>
            <td>{id}</td>
            <td>
                <div className="name">
                    <img src={`/img/${icon}`} width="35px" style={{marginRight: 20}} />
                    <span>{name}</span>
                    <span className="abrv">{abrv}</span>
                </div>
            </td>
            <td>GHS {price}</td>
            <td>{change}%</td>
            <td><img src="/img/chart.svg" alt="" /></td>
            <td><a href="#" className="btn">Buy</a></td>
        </tr>
    )
}

export default CryptotableSection;
