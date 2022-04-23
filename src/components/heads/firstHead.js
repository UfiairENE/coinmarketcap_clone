import React from 'react'


const FirstHead = () => {

    return(
        <div className="firstHead">
            <div className="f-container">
                <div>
                    <span className="f-con-span">
                        Cryptos:
                        <a href="/" className="f-con-a">18,847</a>
                    </span>
                    <span className="f-con-span">
                    Exchanges:
                        <a href="/" className="f-con-a">507</a>
                    </span>
                    <span className="f-con-span">
                    Market Cap:
                        <a href="/" className="f-con-a">$1,846,727,079,650</a>
                    </span>
                    <span className="f-con-span">
                    24h Vol:
                        <a href="/" className="f-con-a">$97,545,205,157</a>
                    </span>
                    <span className="f-con-span">
                    Dominance:
                        <a href="/" className="f-con-a">BTC: 40.9% ETH: 19.6%</a>
                    </span>
                    <span className="f-con-span">
                    <span className="icon-Gas-Filled" style={{marginRight:"4px;",verticalAlign:"middle"}}></span>
                    ETH Gas:
                        <a href="/" className="f-con-a">46 Gwei
                        <span className="icon-Chevron-down"></span>
                        </a>
                    </span>
                </div>
                <div className="f-con-2">
                    <div className="f-con-item"></div>
                    <div className="f-con-lan">
                    <div className="cmc-popover"><div className="cmc-popover__trigger"><button title="Change your language" className="sc-1kx6hcr-0 eFEgkr"><span className="sc-1b4wplq-1 kJnRBT">English</span><span className="sc-1b4wplq-0 ifkbzu"><span className="icon-Caret-down"></span></span></button></div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstHead