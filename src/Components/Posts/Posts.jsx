import "./posts.scss";
import first from "./../../assets/john.jpg";
import second from "./../../assets/cercy.webp";
import third from "./../../assets/Daenerys.webp";
import Sansa from "./../../assets/sansa.jpeg";
import Post from "../post/post";
import game from "./../../assets/gameofthrones.webp";
export default function Posts() {
  const posts = [
    {
      id: 1,
      name: "John Snow",
      userId: 1,
      profilePic: game,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt tempore repudiandae quia commodi quam, voluptatum error vel vero dolorum sequi fugit, doloremque ipsa, cum praesentium delectus quo deleniti ducimus quae!",
      img: first,
    },
    {
      id: 2,
      name: "Cercei Lannister",
      userId: 2,
      profilePic: game,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt tempore repudiandae quia commodi quam, voluptatum error vel vero dolorum sequi fugit, doloremque ipsa, cum praesentium delectus quo deleniti ducimus quae!",
      img: second,
    },
    {
      id: 3,
      name: "Daenerys Targaryen",
      userId: 3,
      profilePic: game,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt tempore repudiandae quia commodi quam, voluptatum error vel vero dolorum sequi fugit, doloremque ipsa, cum praesentium delectus quo deleniti ducimus quae!",
      img: third,
    },
    {
      id: 4,
      name: "Sansa",
      userId: 4,
      profilePic: game,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt tempore repudiandae quia commodi quam, voluptatum error vel vero dolorum sequi fugit, doloremque ipsa, cum praesentium delectus quo deleniti ducimus quae!",
      img: Sansa,
    },
  ];
  return (
    <>
      <div className="posts">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </>
  );
}
