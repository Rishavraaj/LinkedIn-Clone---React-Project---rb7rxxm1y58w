import React from 'react'
import './leftSidebar.css'
import bg from '../Assets/bg.jpg'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {AiOutlinePlus} from "react-icons/ai"

const LeftSidebar = ({email, password}) => {
  return (
    <div className="leftsidebar_container">
      <div className="leftProfile_container">
        <div className="bgimg_container">
          <img src={bg} alt="" />
        </div>
        <div className="profile_container">
          
        </div>
        <div className="plaindiv">

        </div>
        <div className="name_div">
        <h3>{email}</h3>

        </div>
        <div className="connections_container">
          <div className="connections">
            <p>Connections</p>
            <p>31</p>
          </div>
          <div className="network">
            <p>Grow your network</p>
          </div>
          <div className="visited">
            <p>who visited your profile</p>
            <p>11</p>
          </div>
        </div>

        <div className="myItem_container">
            <BsFillBookmarkFill/>
            <p>My items</p>
        </div>
      </div>

      <div className="group_conatiner">
        <div className="group">
          <p>Groups</p>
        </div>
        <div className="events">
        <p>Events</p>
        <AiOutlinePlus/>
        </div>
        <div className="followed">
          <p>Follow Hastags</p>
        </div>
        <div className="discover">
          <p>Discover More</p>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar