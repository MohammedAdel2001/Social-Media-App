import React, { useEffect, useState } from "react";
import "./leftbar.scss";
import imagee from "./../../assets/social-media.jpg"
import Friends from "./../../assets/1.png";
import Groups from "./../../assets/2.png";
import Market from "./../../assets/3.png";
import Watch from "./../../assets/4.png";
import Memories from "./../../assets/5.png";
import Events from "./../../assets/6.png";
import Gaming from "./../../assets/7.png";
import Gallery from "./../../assets/8.png";
import Videos from "./../../assets/9.png";
import Messages from "./../../assets/10.png";
import Tut from "./../../assets/11.png";
import Courses from "./../../assets/12.png";
import Fund from "./../../assets/13.png";
export default function Leftbar() {
  const [username, setusername] = useState(null)

  useEffect(() => {
      setusername(localStorage.getItem("username"));
    }, []);
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={imagee} alt="" />
            <span>{username}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tut} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}
