import React from 'react'
import { Wrapper , DashCard  , Loading} from '../components'
import { useContext } from 'react';
import StateContext from '../context/Context';
import uploadimg from "../assets/upload.jpg";
import requestimg from "../assets/request.jpg";
import orderimg from "../assets/order.jpg";
import stockimg from "../assets/stock.jpg";



const dashoptions = [{
  Name : "ORDERS",
  Img : orderimg,
  Link : "/dashboard/orders",
  Desc : "Here you can see all the orders placed by the users and their status and details" 
},
{
  Name : "UPLOAD",
  Img : uploadimg,
  Link : "/dashboard/upload",
  Desc : "Here you can upload new Stickers to the database and make them available for the users"
},
{
  Name : "REQUESTS",
  Img : requestimg,
  Link : "/dashboard/requests",
  Desc : "Here you can see all the requests placed by the users"
},
{
  Name : "STOCK",
  Img : stockimg,
  Link : "/dashboard/stock",
  Desc : "Here you can see all the stock available"
}]

const Dashboard = () => {

  const {isLoadingstate} = useContext(StateContext)

  return (
    <Wrapper>
      {isLoadingstate && (<Loading/>)}
      {isLoadingstate && (<Loading/>)}
      <div className=' grid md:grid-cols-2 gap-10'>
        <DashCard data = {dashoptions[0]}/>
        <DashCard data = {dashoptions[1]}/>
        <DashCard data = {dashoptions[2]}/>
        <DashCard data = {dashoptions[3]}/>
      </div>
    </Wrapper>
  )
}

export default Dashboard