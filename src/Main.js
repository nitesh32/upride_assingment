import React from 'react'
import './main.css';
import { Booking } from './Booking';

export const Main = () => {
  return (
    <div id="main">
      <div id="bar">
        <div id="two_butt">
        <div id="bar_search">
          <input type="text" placeholder="Search Bookings"/>
          
          <div id="search_cont">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </div>
        </div>

        <div id="book_butt">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
          </svg>
          <strong>New Booking</strong>
        </div>
      </div>
        
      <div id="user_name">
        <div id="user_profile">
          <img src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1440" alt="img"/>
        </div>
        <span>Hello Lokesh!👋</span>
      </div>
        
      </div> 
      <Booking/>
    </div>
  )
}
