import React, { useEffect, useState } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
// import response from './response'
import axios from 'axios'
import moment from 'moment'

export default function Graph({id, chan}) {
  const [rData, setRData] = useState([])
  // const [respon, setRespon] = useState('')
  const [color, setColor] =useState(false)
 // let color = false
  useEffect(()=>{
    let currentDate = new Date()
    let agoDate = currentDate.getDate() - 7

    currentDate = moment(currentDate).unix()
    agoDate = moment(agoDate).unix()
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=${agoDate}&to=${currentDate}`).then((res)=>{
   // console.log(`${id}`, res.data)
    let prices = res.data.prices;
    let  newData = prices.map((el)=>{
       return {
         pv: el[1]
       }
     })
     if(chan > 0){
       setColor(true)
     }
     setRData(newData)
    }).catch((err)=>{
      console.log(err)
    })
    // console.log(response.prices)
   
    // console.log(newData)
   
  },[])

    return(
        <div className="graph">      
         <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={rData}>
          <Line type="monotone" dataKey="pv" dot={''} stroke={color?"#16c784": "#ea3943"} strokeWidth={2} />
          {/* #ea3943 */}
        </LineChart>
      </ResponsiveContainer>
      </div>

    )
}