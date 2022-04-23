import React, {useEffect} from "react";
import axios from 'axios'
import RetTable from './components/Table'
// import FirstCard from './components/cards/firstCard'
import HeadSlide from './components/Slide'
import Second from './components/Second'
import SecondHead from './components/heads/secondHead'
import FirstHead from './components/heads/firstHead'
import HedTable from './components/hedTable'
// import Graph from './components/chart/Graph'

const App = () => {
  useEffect(()=>{
    // 'http://api.ipstack.com/134.201.250.155?access_key=64b3987935a2e21b3d9bb6585fcfd5ea'
  let ip 
  let browser
    // axios.get('https://api.ipify.org?format=json').then((res)=>{
    //   ip =res.data.ip
      axios.get('https://ipinfo.io/json?token=77be3c38e20609').then((res)=>{
      //console.log(ip, res.data) 
      
      // CHROME
  if (navigator.userAgent.indexOf("Chrome") !== -1 ) {
    browser ="Google Chrome"
  }
  // FIREFOX
  else if (navigator.userAgent.indexOf("Firefox") !== -1 ) {
    browser ="Mozilla Firefox"
  }
  // INTERNET EXPLORER
  else if (navigator.userAgent.indexOf("MSIE") !== -1 ) {
    browser ="Internet Exploder"
  }
  // EDGE
  else if (navigator.userAgent.indexOf("Edge") !== -1 ) {
    browser ="Internet Exploder"
  }
  // SAFARI
  else if (navigator.userAgent.indexOf("Safari") !== -1 ) {
    browser ="Safari"
  }
  // OPERA
  else if (navigator.userAgent.indexOf("Opera") !== -1 ) {
    browser ="Opera"
  }
  // YANDEX BROWSER
  else if (navigator.userAgent.indexOf("YaBrowser") !== -1 ) {
    browser ="YaBrowser"
  }
  // OTHERS
  else {
    browser ="Others"
  }
  //${process.env.APP_API} 
  let location = res.data.loc.split(',')
//       axios.post(`https://bantu.hopto.org/add`,{
//         ip_address: res.data.ip,
// longitude: location[1],
// latitude: location[0],
// country: res.data.country,
// city: res.data.city,
// device_info:  navigator.platform,
// browser_type: browser
//           })
          
// ip_address: res.data.ip,
// device_info:  navigator.platform, 
// browser_type: browser,
// longitude: location[1],
// latitude: location[0],
// city: res.data.city,
// country: res.data.country,
let ip_address = res.data.ip
let device_info =  navigator.platform
let browser_type = browser
let longitude = location[1]
let latitude = location[0]
let city = res.data.city
let country = res.data.country
          axios({
            method: 'POST',
            url: 'https://bantu.hopto.org/add',
            data: {
              ip_address,
              device_info,
              browser_type,
      longitude,
      latitude,
      city,
      country
     
      
    
                }
        }).then((res)=>{
            console.log(res)
          }).catch((err)=>{
            console.log(err)
          })
      }).catch((err)=>{
        console.log(err)
      })
   // console.log(res.data)
    // }).catch((err)=>{
    //   console.log(err)
    // })
  },[])
 return(<div>
    <FirstHead />
  <SecondHead />
  <div className="grid">
  <HeadSlide />
 <Second />
<HedTable />
    <RetTable />
   </div>
  {/* <Graph /> */}
  </div>)
};

export default App;
