import React from "react";
import { Card } from 'antd';

const { Meta } = Card;

const FirstCard = () => {
	
return(
  <Card
    hoverable
    style={{ width: '100%' }}
  
    bordered={false}
  >
    <Meta description="www.instagram.com" title="Europe Street beat"  />
  </Card>)	
}


export default FirstCard;
