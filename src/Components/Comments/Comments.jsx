import "./comments.scss";
import first from "./../../assets/john.jpg";
import second from "./../../assets/cercy.webp";
import third from "./../../assets/Daenerys.webp";
import prof from "../../assets/social-media.jpg";
import { useEffect, useState } from "react";
export default function Comments() {
  const [username, setusername] = useState(null);

  useEffect(() => {
    setusername(localStorage.getItem("username"));
  }, []);
  //temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum enim ratione iure distinctio illum neque unde odit, doloremque laboriosam culpa porro sequi animi mollitia minus dicta necessitatibus in reiciendis deleniti!",
      name: "John Diggle",
      userId: 1,
      profilePic: second,
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum enim ratione iure distinctio illum neque unde odit, doloremque laboriosam culpa porro sequi animi mollitia minus dicta necessitatibus in reiciendis deleniti!",
      name: "John",
      userId: 2,
      profilePic: first,
    },
    {
      id: 3,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum enim ratione iure distinctio illum neque unde odit, doloremque laboriosam culpa porro sequi animi mollitia minus dicta necessitatibus in reiciendis deleniti!",
      name: "Queen of Dragons",
      userId: 3,
      profilePic: third,
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={prof} alt="" />
        <input type="text" name="" id="" placeholder="Write a Comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
}
