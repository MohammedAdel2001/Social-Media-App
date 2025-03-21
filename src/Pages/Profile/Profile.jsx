import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import cover from "../../assets/gameofthrones.webp";
import profile from "../../assets/john.jpg";
import Posts from "../../Components/Posts/Posts"
export default function Profile() {
  return (
    <div className="profile">
      <div className="images">
        <img src={cover} alt="" className="cover" />
        <img src={profile} alt="" className="profile" />
      </div>
      <div className="profileContainer">
        <div className="uInfo shadow shadow-lg">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>

            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>

            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>

            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>

            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>John snow</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>Lama.dev</span>
              </div>
            </div>
              <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
}
