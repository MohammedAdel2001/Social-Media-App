import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "../Comments/Comments";
export default function Post({ post }) {
  const [commentOpen, setcommentOpen] = useState(false)
  //temporary
  const [liked, setliked] = useState(false)
  return (
    <div className="post shadow shadow-lg">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item" onClick={()=> setliked(!liked)}>
            {liked?<FavoriteOutlinedIcon style={{color:"red"}}/>: <FavoriteBorderOutlinedIcon/>}
            12k likes
          </div>
          <div className="item"onClick={()=>setcommentOpen(!commentOpen)}>
           <TextsmsOutlinedIcon/>
           20k Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon/>
            Share
          </div>
        </div>
        {commentOpen && <Comments/>}
      </div>
    </div>
  );
}
