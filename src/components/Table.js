import React, {useState, useEffect} from "react";
import { Table,Progress, Popover } from 'antd';
import axios from 'axios'
import {CaretDownOutlined, CaretUpOutlined, StarOutlined} from '@ant-design/icons'
import Graph from './chart/Graph'
 
const RetTable = () => {
  const [dataL, setDataL] = useState([])

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d')
    .then((res)=>{
     // console.log(res.data)
      setDataL(res.data)
    }).catch((err)=>{console.log(err)})
   
  },[])
 
  
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  const firstCol = (record) => {
    let check = ['bitcoin','bnb','ethereum', 'solana', 'terra-luna', 'avalanche-2', 'shiba-inu']
    return(
    <div display="flex" className="sc-16r8icm-0 escjiH">
      <a href="/" className="cmc-link">
        <div className="sc-16r8icm-0 sc-1teo54s-0 dBKWCw">
          <img className="coin-logo" src={`${record.image}`} loading="lazy" alt="BTC logo" />
          <div className="sc-16r8icm-0 sc-1teo54s-1 dNOTPP">
            <p fontWeight="semibold" color="text" font-size="1" className="sc-1eb5slv-0 iworPT">{record?.name}</p>
            <div data-nosnippet="true" className="sc-1teo54s-2 fZIJcI">
              <div className="sc-1teo54s-3 etWhyV">{record.market_cap_rank}</div>
              <p color="text3" className="sc-1eb5slv-0 gGIpIK coin-item-symbol" font-size="1">{record?.symbol.toUpperCase()}</p>
              </div>
              </div>
              </div>
              </a>
             {check.includes(record?.id) && <div className="sc-16r8icm-0 bKmQGi">
                <div data-nosnippet="true" aria-expanded="false">
                  <div className="sc-1x3bens-0 hRpznX">
                    <button style={{whiteSpace:"nowrap",background:"#f0f6ff",color:"#3861fb"}} className="x0o17e-0 kPvqGV">Buy</button>
                  </div>
                  </div>
                  </div>}
                  </div>)
  }

const columns = [
  {
    title: <div className="table-first-col"><span>#</span></div>,
    width: 40,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
    defaultSortOrder: 'ascend',
    render:(a,record)=>{
      return <><StarOutlined className="table-star" /> <span className="table-star-2">{record.market_cap_rank}</span></>
    },
    sorter: (a, b) => a.market_cap_rank - b.market_cap_rank,
    
  },
  {
    title: <div className="s8fs2i-1 gbtfIe"><p className="sc-1eb5slv-0 iKUzJY" font-size="0" color="text">Name</p></div>,
    width: 90,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
    render:(a, record)=>{
      return firstCol(record)
    }
  },
  {
    title: <div className="s8fs2i-1 gbtfIe"><p className="sc-1eb5slv-0 iKUzJY" font-size="0" color="text">Price</p></div>,
    dataIndex: 'address',
    key: '1',
    width: 60,
    render:(a, record)=>{
      return `$${record?.current_price}`
    }
  },
  {
    title: <div className="s8fs2i-1 gbtfIe"><p className="sc-1eb5slv-0 iKUzJY" font-size="0" color="text">24h %</p></div>,
    dataIndex: 'age',
    key: '2',
    width: 50,
    render: (a, record) =>{ 
   return +record.price_change_percentage_24h < 0? <><CaretDownOutlined style={{color:"#ea3943"}} /><span className="span-red">%{Number.parseFloat(record.price_change_percentage_24h).toFixed(2)* -1}</span></>: <><CaretUpOutlined style={{color:"#16c784"}} /><span className="span-green">%{Number.parseFloat(record.price_change_percentage_24h).toFixed(2)}</span></>
  }
  },
  {
    title: <div className="s8fs2i-0 pEXWP"><div className="s8fs2i-1 gbtfIe"><p className="sc-1eb5slv-0 iKUzJY" font-size="0" color="text">7d %</p></div></div>,
    dataIndex: 'address',
    key: '3',
    width: 50,
    render: (a, record) =>{ 
   return +record.price_change_percentage_7d_in_currency < 0? <><CaretDownOutlined style={{color:"#ea3943"}} /><span className="span-red">%{Number.parseFloat(record.price_change_percentage_7d_in_currency).toFixed(2)* -1}</span></>: <><CaretUpOutlined style={{color:"#16c784"}} /><span className="span-green">%{Number.parseFloat(record.price_change_percentage_7d_in_currency).toFixed(2)}</span></>
     
     }
  },
  {
    title: <div className="s8fs2i-0 pEXWP"><div className="s8fs2i-1 gbtfIe"><p className="sc-1eb5slv-0 iKUzJY" font-size="0" color="text">Market Cap</p></div><div className="sbsk6s-2 cGlIZe" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="16" width="16" viewBox="0 0 24 24" color="neutral4" className="sc-16r8icm-0 kLSxec"><path d="M12 2C6.48583 2 2 6.48583 2 12C2 17.5142 6.48583 22 12 22C17.5142 22 22 17.5142 22 12C22 6.48583 17.5142 2 12 2ZM14.215 17.2367C13.6642 17.4533 11.755 18.365 10.655 17.3958C10.3267 17.1075 10.1633 16.7417 10.1633 16.2975C10.1633 15.4658 10.4367 14.7408 10.9292 13C11.0158 12.6708 11.1217 12.2442 11.1217 11.9058C11.1217 11.3217 10.9 11.1667 10.2992 11.1667C10.0058 11.1667 9.68083 11.2708 9.38667 11.3808L9.54917 10.715C10.205 10.4483 11.0283 10.1233 11.7333 10.1233C12.7908 10.1233 13.5692 10.6508 13.5692 11.6542C13.5692 11.9433 13.5192 12.45 13.4142 12.8L12.8058 14.9517C12.68 15.3867 12.4525 16.3458 12.805 16.63C13.1517 16.9108 13.9725 16.7617 14.3775 16.5708L14.215 17.2367ZM13.21 8.66667C12.52 8.66667 11.96 8.10667 11.96 7.41667C11.96 6.72667 12.52 6.16667 13.21 6.16667C13.9 6.16667 14.46 6.72667 14.46 7.41667C14.46 8.10667 13.9 8.66667 13.21 8.66667Z"></path></svg></div></div>,
    dataIndex: 'address',
    key: '4',
    width: 90,
    render: (a, record) => {
      return <p color="text" style={{whiteSpace:"nowrap"}} fontSize="1" className="sc-1eb5slv-0 hykWbK">
        <span className="sc-1ow4cwt-0 iosgXe">$762.35B</span>
        <span data-nosnippet="true" className="sc-1ow4cwt-1 ieFnWP">${`${record.market_cap.toLocaleString("en-US")}`}</span>
        </p>
    }
  },
  {
    title:  <div className="s8fs2i-0 pEXWP"><div className="s8fs2i-1 gbtfIe"><p className="sc-1eb5slv-0 iKUzJY" font-size="0" color="text">Volume(24h)</p></div><div className="sbsk6s-2 cGlIZe" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="16" width="16" viewBox="0 0 24 24" color="neutral4" className="sc-16r8icm-0 kLSxec"><path d="M12 2C6.48583 2 2 6.48583 2 12C2 17.5142 6.48583 22 12 22C17.5142 22 22 17.5142 22 12C22 6.48583 17.5142 2 12 2ZM14.215 17.2367C13.6642 17.4533 11.755 18.365 10.655 17.3958C10.3267 17.1075 10.1633 16.7417 10.1633 16.2975C10.1633 15.4658 10.4367 14.7408 10.9292 13C11.0158 12.6708 11.1217 12.2442 11.1217 11.9058C11.1217 11.3217 10.9 11.1667 10.2992 11.1667C10.0058 11.1667 9.68083 11.2708 9.38667 11.3808L9.54917 10.715C10.205 10.4483 11.0283 10.1233 11.7333 10.1233C12.7908 10.1233 13.5692 10.6508 13.5692 11.6542C13.5692 11.9433 13.5192 12.45 13.4142 12.8L12.8058 14.9517C12.68 15.3867 12.4525 16.3458 12.805 16.63C13.1517 16.9108 13.9725 16.7617 14.3775 16.5708L14.215 17.2367ZM13.21 8.66667C12.52 8.66667 11.96 8.10667 11.96 7.41667C11.96 6.72667 12.52 6.16667 13.21 6.16667C13.9 6.16667 14.46 6.72667 14.46 7.41667C14.46 8.10667 13.9 8.66667 13.21 8.66667Z"></path></svg></div></div>,
    dataIndex: 'address',
    key: '5',
    width: 90,
    render:(a, record) => {
      let sum = (record.total_volume * record.current_price).toFixed(0)
      return <div className="sc-16r8icm-0 j3nwcd-0 cRcnjD">
        <a href="/" className="cmc-link">
        <p font-size="1" className="sc-1eb5slv-0 hykWbK font_weight_500" color="text">${sum.toLocaleString("en-US")}</p></a>
        <div data-nosnippet="true"><p color="text2" font-size="0" className="sc-1eb5slv-0 etpvrL">{`${record.total_volume} ${record.symbol.toUpperCase()}`}</p></div></div>
    }
  },

  { title: <div className="s8fs2i-0 pEXWP"><div className="s8fs2i-1 gbtfIe"><p className="sc-1eb5slv-0 iKUzJY" font-size="0" color="text">Circulating Supply</p></div><div className="sbsk6s-2 cGlIZe" aria-expanded="false"><span className="icon-Info"></span></div></div>, 
  dataIndex: 'address', 
  key: '6',  
  width: 70, 
render: (a, record) => {
  return <div style={{cursor:"pointer"}} className="sc-16r8icm-0 g5oqcc-0 drLITg">
    <div className="sc-16r8icm-0 g5oqcc-1 eGQXzN">
      <p font-size="1" fontWeight="medium" color="text" className="sc-1eb5slv-0 kZlTnE ">{`${record.circulating_supply.toFixed(0)} ${record?.symbol.toUpperCase()}`}</p>
      </div>
     {(record.circulating_supply < record.total_supply) &&<Popover content={content} placement="bottom" >
      <div className="progress">
      
      <Progress percent={(record.circulating_supply/record.total_supply)*100} showInfo={false} strokeColor={'rgb(207, 214, 228)'} />
    
      </div>
      </Popover>}
      {/* <div width="160" className="qlsl66-0 jrRnei">
        <div width="145" className="qlsl66-1 gntWGK"></div>
      </div> */}
      </div>
}
},
  {
    title: <p style={{fontSize:"12px"}} color="text" font-size="1" className="sc-1eb5slv-0 hykWbK">Last 7 Days</p>,
    key: 'operation',
  
    width: 100,
    render: (a,record) => <Graph id={record.id} chan={record.price_change_percentage_7d_in_currency}/>,
  },
];

const data = [];
for (let i = 1; i <= 100; i++) {
  data.push({
    key: i,
    name: `${i}`,
    age: -32,
    address: ` London Park no. ${i}`,
  });
}

return(
  <div className="table-holder">
  <Table columns={columns} dataSource={dataL} scroll={{ x: 1300 }}  pagination={{position: 'bottomCenter'}}/>
  </div>
 )
}

export default RetTable