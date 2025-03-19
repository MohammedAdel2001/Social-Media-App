import "./stories.scss"
import first from "./../../assets/first.jpg"
import second from "./../../assets/second.webp"
import third from "./../../assets/third.webp"
import book from "./../../assets/book.jpeg"
import { useEffect, useState } from "react"
export default function Stories() {
    const [username, setusername] = useState(null)
    
      useEffect(() => {
          setusername(localStorage.getItem("username"));
        }, []);
    // dummy data
    const stories=[
    {
      id:1,
      name:"Megzo",
      img: first
    },
    {
      id:2,
      name:"Megzo",
      img:second
    },
    {
      id:3,
      name:"Megzo",
      img:third
    },
    {
      id:4,
      name:"Megzo",
      img:book
    },
    

    ]
  return (
    <div className="stories">
        <div className="story">
                <img src={third} alt="" />
                <span>{username}</span>
                <button>+</button>
            </div>
        {stories.map(story=>(
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}
