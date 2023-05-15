import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import homee from '../../assets/Sidebar/homee.png';
import schedule from '../../assets/Sidebar/schedule.png';
import user from '../../assets/Sidebar/user.png';
import inbox from '../../assets/Sidebar/inbox.png';
import noti from '../../assets/Sidebar/noti.png';
import question from '../../assets/Login/question.png';
import { useState } from 'react';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">LOGO</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <div className="fc">
                <img className="sideimg" src={homee}></img>
                <li className="sidebarListItem ">Home</li>
              </div>
            </Link>
            <Link to="/about" className="link">
              <div className="fc">
                <img className="sideimg" src={schedule}></img>
                <li className="sidebarListItem">Schedule</li>
              </div>
            </Link>

            <Link to="/service" className="link">
              <div className="fc">
                <img className="sideimg" src={user}></img>
                <li className="sidebarListItem">User</li>
              </div>
            </Link>
            <Link to="/contact" className="link">
              <div className="fc">
                <img className="sideimg" src={inbox}></img>
                <li className="sidebarListItem">Inbox</li>
              </div>
            </Link>
            <Link to="/contact" className="link">
              <div className="fc">
                <img className="sideimg" src={noti}></img>
                <li className="sidebarListItem">Notification</li>
              </div>
            </Link>
            <button className="endbtn">Log Out</button>
          </ul>
        </div>
      </div>
    </div>
  );
}
