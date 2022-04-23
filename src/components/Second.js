import React, {useState, useEffect} from "react";
import { Switch } from 'antd';
import {CaretDownOutlined, CaretUpOutlined,RightOutlined} from '@ant-design/icons'
import axios from 'axios'
const Second = () => {
	const [toggle, setToggle] = useState(true)
	const changeHighlights = (checked, event) => {
		
		setToggle(checked)
		}
	
		useEffect(()=>{
			let qs = `?start=1&limit=100&convert=USD`
axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/new${qs}`,{
	headers:{
		'X-CMC_PRO_API_KEY': '004e1a4d-f183-4fc2-9664-abfa6734534f',
	}
}).then((res)=>{
	console.log(res)
}).catch((err)=>{
	console.log(err)
})

		},[])

return(
<div className="second-flex">
	<div className="second-flex-1">
		<div className="second-flex-2-1">
		<h1>Today's Cryptocurrency Prices by Market Cap</h1>
		<p>The global crypto market cap is $1.97T, a<span><CaretDownOutlined className="span-red"/>2.29%</span>decrease over the last day. <a>Read More</a></p>
		</div>
		<div className="second-flex-2-2">
		 <span>Highlights</span> <Switch defaultChecked onChange={(checked, event)=>changeHighlights(checked, event)}/>
		</div>
	</div>
	{toggle && <div className="second-flex-2">
	<div className="second-flex-1-1">
		<div className="second-flex-inner">
			<div className="inner-1"><img alt='' className="inner-img-head" src="/TrendingIcon.png" /> <span className="inner-1-head">Trending</span></div>
			<div className="inner-2"><span className="span-blue">More<RightOutlined /></span></div>
		</div>
		<div className="second-flex-inner">
			<div className="inner-1"> <span className="rank">1</span><img alt='' src="/stepn.png" /><span>STEPN </span><span className="span-light">GMT</span></div>
			<div className="inner-2"><span className="span-green"><CaretUpOutlined/>0.00%</span></div>
		</div>
		<div className="second-flex-inner">
			<div className="inner-1"> <span className="rank">2</span><img alt='' src="/solana.png" /><span>Solana </span><span className="span-light">SOL</span></div>
			<div className="inner-2"><span className="span-red"><CaretDownOutlined/>5.92%</span></div>
		</div>
		<div className="second-flex-inner">
			<div className="inner-1"> <span className="rank">3</span><img alt='' src="/animal.png" /><span>Animal Concerts</span> <span className="span-light">ANML</span></div>
			<div className="inner-2"><span className="span-red"><CaretDownOutlined/>3.95%</span></div>
		</div>
	</div>
	<div className="second-flex-1-2">
		<div className="second-flex-inner">
			<div className="inner-1"><img alt='' className="inner-img-head" src="/GainnerIcon.png" /><span className="inner-1-head">Biggest Gainers</span></div>
			<div className="inner-2"><span className="span-blue">More<RightOutlined /></span></div>
		</div>
		<div className="second-flex-inner">
			<div className="inner-1"> <span className="rank">1</span><img alt='' src="/meta.png" /><span>META Gaming</span><span className="span-light">RMG</span></div>
			<div className="inner-2"><span className="span-green"><CaretUpOutlined/>1714.34%</span></div>
		</div>
		<div className="second-flex-inner">
			<div className="inner-1"> <span className="rank">2</span><img alt='' src="/sport.png" /><span>Sportoken</span><span className="span-light">SPT</span></div>
			<div className="inner-2"><span className="span-green"><CaretUpOutlined/>280.47%</span></div>
		</div>
		<div className="second-flex-inner">
			<div className="inner-1"> <span className="rank">3</span><img alt='' src="/sway.png" /><span>Sway Social</span><span className="span-light">SWAY</span></div>
			<div className="inner-2"><span className="span-green"><CaretUpOutlined/>176.55%</span></div>
		</div>
	</div>
	<div className="second-flex-1-3">
		<div className="second-flex-inner">
			<div className="inner-1"><img alt='' className="inner-img-head" src="/AddIcon.png" /> <span className="inner-1-head">Recently Added</span></div>
			<div className="inner-2"><span className="span-blue">More<RightOutlined /></span></div>
		</div>
		<div className="second-flex-inner">
			<div className="inner-1"> <span className="rank">1</span><img alt='' src="/freedom.png" /> <span>Freedom God Dao</span><span className="span-light">FGD</span></div>
			<div className="inner-2">$25.62</div>
		</div>
		<div className="second-flex-inner">
			<div className="inner-1"> <span className="rank">2</span><img alt='' src="/tycoon.png" /> <span>Tycoon Zone</span><span className="span-light">TYCOON</span></div>
			<div className="inner-2">$0.04489</div>
		</div>
		<div className="second-flex-inner">
			<div className="inner-1"> <span className="rank">3</span><img alt='' src="/lion.png" /><span>Lion Scrub Finance</span><span className="span-light">Lion</span></div>
			<div className="inner-2">$36.91</div>
		</div>
	</div>
	</div>}
</div>
)	
}


export default Second
